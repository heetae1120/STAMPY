// Business-rule tests for the demo server (node --test). They bundle app/api/demo.ts
// with esbuild and run it against an in-memory localStorage.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';

const store = new Map();
globalThis.localStorage = { getItem: k => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: k => store.delete(k) };
const out = await build({ entryPoints: ['app/api/demo.ts'], bundle: true, write: false, format: 'esm', platform: 'neutral' });
const api = await import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
const reject = async (p, code) => { await assert.rejects(p, e => e.code === code, 'expected ' + code); };

const okForm = c => ({ channel: c.channels[0], channelUrl: 'https://blog.example.com/me', plan: '일주일 동안 쓰고 솔직하게 기록할게요.', agree: true });
const openCampaign = () => api.campaignsOf(api.snapshot()).find(c => Date.parse(c.recruitStart) - 86400000 < Date.now() && Date.parse(c.recruitEnd) > Date.now());

test('full flow: apply → select → review → approve grants stamps and sticker exactly once', async () => {
  await api.resetDemo();
  const member = await api.login('fresh', '탐험가');
  const c = openCampaign();
  await reject(api.apply(c.id, { ...okForm(c), channelUrl: 'http://x' }), 'VALIDATION');
  const app = await api.apply(c.id, okForm(c));
  await reject(api.apply(c.id, okForm(c)), 'DUPLICATE');
  await reject(api.setApplicationStatus(app.id, 'selected'), 'FORBIDDEN');
  await reject(api.submitReview(app.id, { url: 'https://blog.example.com/r', memo: '', disclosure: true, experienced: true }), 'INVALID_STATE');

  const admin = await api.login('admin', '운영자');
  await api.setApplicationStatus(app.id, 'selected');
  await api.switchUser(member.id);
  await reject(api.submitReview(app.id, { url: 'https://blog.example.com/r', memo: '', disclosure: false, experienced: true }), 'VALIDATION');
  const review = await api.submitReview(app.id, { url: 'https://blog.example.com/r', memo: '', disclosure: true, experienced: true });
  let bal = api.balanceOf(api.snapshot(), member.id);
  assert.equal(bal.available, 0, 'submission alone grants nothing');
  assert.equal(bal.pending, c.stamps, 'submitted review counts as pending');

  await api.switchUser(admin.id);
  await api.decideReview(review.id, 'approved', '확인');
  await reject(api.decideReview(review.id, 'approved', '확인'), 'INVALID_STATE');
  const s = api.snapshot();
  bal = api.balanceOf(s, member.id);
  assert.equal(bal.available, c.stamps);
  assert.equal(bal.pending, 0);
  assert.equal(s.ledger.filter(l => l.refId === review.id).length, 1, 'one ledger row per review');
  assert.ok(s.userStickers.some(x => x.userId === member.id && x.stickerId === c.stickerId));
  assert.ok(s.userStickers.some(x => x.userId === member.id && x.stickerId === 'st-first'));
  assert.equal(s.applications.find(a => a.id === app.id).status, 'completed');
});

test('changes requested lets the member resubmit; rejection does not', async () => {
  await api.resetDemo();
  const member = await api.login('fresh', '탐험가');
  const c = openCampaign();
  const app = await api.apply(c.id, okForm(c));
  const admin = await api.login('admin', '운영자');
  await api.setApplicationStatus(app.id, 'selected');
  await api.switchUser(member.id);
  const r1 = await api.submitReview(app.id, { url: 'https://a.example.com/1', memo: '', disclosure: true, experienced: true });
  await api.switchUser(admin.id);
  await reject(api.decideReview(r1.id, 'changes_requested', ''), 'VALIDATION');
  await api.decideReview(r1.id, 'changes_requested', '광고 표기를 첫 줄에 넣어 주세요');
  await api.switchUser(member.id);
  const r2 = await api.submitReview(app.id, { url: 'https://a.example.com/2', memo: '', disclosure: true, experienced: true });
  await api.switchUser(admin.id);
  await api.decideReview(r2.id, 'rejected', '체험 사실을 확인할 수 없어요');
  await api.switchUser(member.id);
  await reject(api.submitReview(app.id, { url: 'https://a.example.com/3', memo: '', disclosure: true, experienced: true }), 'INVALID_STATE');
  assert.equal(api.balanceOf(api.snapshot(), member.id).available, 0, 'no stamps without approval');
});

test('redemption: balance, idempotency, stock, per-user limit, refund', async () => {
  await api.resetDemo();
  const u = await api.login('sample', '예시탐험가');
  const s0 = api.snapshot();
  const start = api.balanceOf(s0, u.id).available;
  assert.equal(start, 4, 'sample: 7 earned − 3 spent');
  const ship = { name: '탐험가', phone: '010-1234-5678', zip: '04000', address1: '서울시 마포구 데모로 1', address2: '', memo: '' };
  const mug = api.rewardById('rw-01'); // cost 4
  await reject(api.redeem(mug.id, { ...ship, phone: '123' }, 'k-bad'), 'VALIDATION');
  const before = api.snapshot().stock[mug.id];
  const [a, b] = await Promise.all([api.redeem(mug.id, ship, 'k1'), api.redeem(mug.id, ship, 'k1')]);
  assert.equal(a.id, b.id, 'same key returns the same redemption');
  let s = api.snapshot();
  assert.equal(api.balanceOf(s, u.id).available, 0, 'charged once');
  assert.equal(s.stock[mug.id], before - 1, 'stock decremented once');
  await reject(api.redeem(mug.id, ship, 'k2'), 'INSUFFICIENT_STAMPS');
  await reject(api.redeem('rw-04', ship, 'k3'), 'OUT_OF_STOCK');
  await api.cancelRedemption(a.id);
  await api.cancelRedemption(a.id); // idempotent
  s = api.snapshot();
  assert.equal(api.balanceOf(s, u.id).available, 4, 'refunded once');
  assert.equal(s.stock[mug.id], before, 'stock restored');
  assert.equal(s.ledger.filter(l => l.refId === a.id && l.type === 'refund').length, 1);
  await reject(api.redeem('rw-02', ship, 'k4'), 'LIMIT_REACHED'); // sample already redeemed hand cream (limit 1)
});

test('quota and role checks on selection', async () => {
  await api.resetDemo();
  const c = openCampaign();
  const ids = [];
  for (let i = 0; i < c.quota + 1; i++) {
    await api.login('fresh', '탐험가' + i);
    ids.push((await api.apply(c.id, okForm(c))).id);
  }
  await api.login('admin', '운영자');
  for (let i = 0; i < c.quota; i++) await api.setApplicationStatus(ids[i], 'selected');
  await reject(api.setApplicationStatus(ids[c.quota], 'selected'), 'QUOTA_FULL');
});

test('closed and upcoming campaigns refuse applications', async () => {
  await api.resetDemo();
  await api.login('fresh', '탐험가');
  const list = api.campaignsOf(api.snapshot());
  const closed = list.find(c => Date.parse(c.recruitEnd) < Date.now());
  const upcoming = list.find(c => Date.parse(c.recruitStart) - 86400000 > Date.now());
  await reject(api.apply(closed.id, okForm(closed)), 'CLOSED');
  await reject(api.apply(upcoming.id, okForm(upcoming)), 'NOT_OPEN');
});

// ---- Venues, map exposure and partner inquiries -------------------------------------

const venueForm = { name: '테스트 카페', brandId: 'dalcom', category: 'cafe', roadAddress: '서울 마포구 테스트로 1', address: '', sido: '서울', sigungu: '마포구', latitude: '37.55', longitude: '126.91', naverPlaceUrl: '', phone: '' };

test('only verified and approved venues reach the public map; demo venues stay in demo preview', async () => {
  await api.resetDemo();
  let s = api.snapshot();
  assert.equal(api.mapExperiences(s, { status: 'all' }).items.length, 0, 'no public venues by default');
  assert.ok(api.mapExperiences(s, { status: 'all', demo: true }).items.length > 0, 'demo preview shows fictional venues');
  assert.ok(api.mapExperiences(s, { status: 'all', demo: true }).items.every(i => i.venue.demo), 'demo preview is labelled demo');

  await api.login('admin', '운영자');
  const demoVenue = api.venuesOf(api.snapshot()).find(v => v.demo);
  await reject(api.verifyVenue(demoVenue.id, 'verified', { address: true, coordinates: true, business: true }), 'DEMO_VENUE');
  await reject(api.setVenueMapApproval(demoVenue.id, true), 'INVALID_STATE');

  await reject(api.registerVenue({ ...venueForm, latitude: '10' }), 'VALIDATION');
  const v = await api.registerVenue(venueForm);
  assert.equal(v.verificationStatus, 'pending');
  await reject(api.setVenueMapApproval(v.id, true), 'INVALID_STATE');
  await reject(api.verifyVenue(v.id, 'verified', { address: true, coordinates: false, business: true }), 'VALIDATION');
  await api.verifyVenue(v.id, 'verified', { address: true, coordinates: true, business: true });
  const visit = api.campaignsOf(api.snapshot()).find(c => c.kind === 'visit');
  const delivery = api.campaignsOf(api.snapshot()).find(c => c.kind === 'delivery');
  await reject(api.editCampaign(delivery.id, { venueId: v.id }), 'VALIDATION');
  await api.editCampaign(visit.id, { venueId: v.id });
  s = api.snapshot();
  assert.equal(api.mapExperiences(s, { status: 'all' }).items.length, 0, 'verified but not approved stays hidden');
  await api.setVenueMapApproval(v.id, true);
  s = api.snapshot();
  const pub = api.mapExperiences(s, { status: 'all' }).items;
  assert.equal(pub.length, 1);
  assert.equal(pub[0].venue.id, v.id);
  // Rejecting later also withdraws the map exposure.
  await api.verifyVenue(v.id, 'rejected', { address: false, coordinates: false, business: false });
  assert.equal(api.mapExperiences(api.snapshot(), { status: 'all' }).items.length, 0);
});

test('map filters: region from data, venue type, search, area bounds and distance', async () => {
  await api.resetDemo();
  const s = api.snapshot();
  const all = api.mapExperiences(s, { status: 'all', demo: true });
  assert.deepEqual(all.regions.map(r => r.sido).sort(), ['경기', '부산', '서울']);
  assert.ok(api.mapExperiences(s, { status: 'all', demo: true, region: '부산' }).items.every(i => i.venue.region.sido === '부산'));
  assert.ok(api.mapExperiences(s, { status: 'all', demo: true, category: 'beauty' }).items.every(i => i.venue.category === 'beauty'));
  assert.equal(api.mapExperiences(s, { status: 'all', demo: true, q: '해운대' }).items.length, 1);
  assert.equal(api.mapExperiences(s, { status: 'all', demo: true, q: '말랑' }).items.length, 0, 'delivery brands never appear on the map');
  const seoul = api.mapExperiences(s, { status: 'all', demo: true, bounds: [37.4, 126.8, 37.7, 127.2] }).items;
  assert.ok(seoul.length >= 2 && seoul.every(i => i.venue.region.sido === '서울'));
  const near = api.mapExperiences(s, { status: 'all', demo: true, region: 'near', near: { lat: 37.55, lng: 126.91 } }).items;
  assert.ok(near.length >= 1 && near.every(i => i.distanceKm <= api.NEAR_KM));
  assert.ok(near.every((it, i) => i === 0 || near[i - 1].distanceKm <= it.distanceKm), 'sorted by distance');
});

const inquiry = { company: '망원 작은카페', contact: '김사장', phone: '010-1234-5678', email: 'owner@example.com', businessType: 'cafe', location: '서울 마포구 망원동', campaignKind: 'visit', message: '신메뉴 체험단을 5명 정도 모집하고 싶어요.', agree: true, naverPlaceUrl: '', instagramUrl: '', offerMenu: '', headcount: '', period: '' };

test('partner inquiry: validation, idempotent retry and duplicate guard', async () => {
  await api.resetDemo();
  await reject(api.submitInquiry({ ...inquiry, phone: '1234', email: 'x@', agree: false, businessType: '' }, 'k0'), 'VALIDATION');
  await reject(api.submitInquiry({ ...inquiry, naverPlaceUrl: 'http://evil.example.com' }, 'k0b'), 'VALIDATION');
  const [a, b] = await Promise.all([api.submitInquiry(inquiry, 'k1'), api.submitInquiry(inquiry, 'k1')]);
  assert.equal(a.id, b.id, 'same key → one inquiry');
  await reject(api.submitInquiry(inquiry, 'k2'), 'DUPLICATE');
  assert.equal(api.snapshot().inquiries.length, 1);
  assert.equal(api.snapshot().inquiries[0].status, 'received');
});

test('older saved demo data is migrated without losing anything', async () => {
  await api.resetDemo();
  await api.login('sample', '예시탐험가');
  const raw = JSON.parse(store.get('stampy.demo.v1'));
  delete raw.venues; delete raw.venueEdits;
  store.set('stampy.demo.v1', JSON.stringify(raw));
  const u = await api.login('fresh', '새사람'); // forces a re-read + write
  const s = api.snapshot();
  assert.ok(Array.isArray(s.venues) && s.venueEdits);
  assert.equal(s.users.length, raw.users.length + 1, 'existing users kept');
  assert.equal(s.ledger.length, raw.ledger.length, 'ledger kept');
  void u;
});
