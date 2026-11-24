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
