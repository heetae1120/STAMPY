// DEMO SERVER — runs in the browser and stores everything in localStorage.
// It follows the rules a real server must enforce (see docs/SERVICE_DESIGN.md), but it is
// not secure: anyone can edit localStorage. Replace these functions with HTTP calls to a
// real API before handling real users, stamps, stock or shipping data.
import {
  ApiError, type AdminAction, type Application, type BrandInquiry, type Campaign, type Channel,
  type LedgerEntry, type Redemption, type RedemptionStatus, type Review, type ReviewStatus,
  type Reward, type Shipping, type User, type UserSticker,
} from './types';
import { CAMPAIGNS, REWARDS, STICKERS, campaignStatus } from '../data/catalog';

const KEY = 'stampy.demo.v1';

export interface DemoState {
  v: 1;
  seq: number;
  users: User[];
  sessionUserId: string | null;
  campaignEdits: Record<string, Partial<Campaign>>;
  applications: Application[];
  reviews: Review[];
  ledger: LedgerEntry[];
  userStickers: UserSticker[];
  redemptions: Redemption[];
  stock: Record<string, number>;
  inquiries: BrandInquiry[];
  adminActions: AdminAction[];
}

function fresh(): DemoState {
  return {
    v: 1, seq: 1, users: [], sessionUserId: null, campaignEdits: {}, applications: [], reviews: [],
    ledger: [], userStickers: [], redemptions: [], inquiries: [], adminActions: [],
    stock: Object.fromEntries(REWARDS.map(r => [r.id, r.initialStock])),
  };
}

let cache: DemoState | null = null;
const listeners = new Set<() => void>();

function read(): DemoState {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as DemoState;
      if (parsed && parsed.v === 1) return parsed;
    }
  } catch {
    // Storage blocked (private mode, disabled cookies): keep working in memory.
    if (cache) return cache;
  }
  return fresh();
}

export function snapshot(): DemoState {
  if (!cache) cache = read();
  return cache;
}

function write(state: DemoState) {
  cache = state;
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* memory only */ }
  listeners.forEach(l => l());
}

export function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', e => {
    if (e.key === KEY) { cache = read(); listeners.forEach(l => l()); }
  });
}

const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
const latency = () => wait(180 + Math.random() * 220);

/**
 * Every write runs as one transaction: re-read the stored state under a lock, apply the
 * change to a copy, and save once. If the change throws, nothing is saved.
 */
async function tx<T>(fn: (s: DemoState) => T): Promise<T> {
  await latency();
  const run = () => {
    const s: DemoState = JSON.parse(JSON.stringify(read()));
    const result = fn(s);
    write(s);
    return result;
  };
  const locks = (navigator as Navigator & { locks?: LockManager }).locks;
  return locks ? locks.request(KEY, run) as Promise<T> : run();
}

async function query<T>(fn: (s: DemoState) => T): Promise<T> {
  await latency();
  return fn(snapshot());
}

const now = () => new Date().toISOString();
const nextId = (s: DemoState, prefix: string) => prefix + '-' + (s.seq++).toString(36) + Math.random().toString(36).slice(2, 6);

function me(s: DemoState): User {
  const user = s.users.find(u => u.id === s.sessionUserId);
  if (!user) throw new ApiError('AUTH_REQUIRED', '로그인이 필요해요.');
  return user;
}
function admin(s: DemoState): User {
  const user = me(s);
  if (user.role !== 'admin') throw new ApiError('FORBIDDEN', '운영자만 할 수 있어요.');
  return user;
}

// ---- Catalog ---------------------------------------------------------------

export function campaignsOf(s: DemoState): Campaign[] {
  return CAMPAIGNS.map(c => ({ ...c, ...s.campaignEdits[c.id] }));
}
export function campaignById(s: DemoState, id: string) {
  return campaignsOf(s).find(c => c.id === id);
}
export const rewardById = (id: string) => REWARDS.find(r => r.id === id);

export interface CampaignQuery { category?: string; status?: string; sort?: string; q?: string }

export function listCampaigns(params: CampaignQuery, opts: { fail?: boolean } = {}) {
  return query(s => {
    if (opts.fail) throw new ApiError('NETWORK', '체험단 목록을 불러오지 못했어요.');
    const q = (params.q ?? '').trim().toLowerCase();
    let list = campaignsOf(s).filter(c => {
      if (params.category && params.category !== 'all' && c.category !== params.category) return false;
      if (params.status && params.status !== 'all' && campaignStatus(c) !== params.status) return false;
      if (q) {
        const brand = c.brandId;
        const hay = [c.title, c.summary, c.benefit, brand].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    const order = { open: 0, upcoming: 1, closed: 2 } as const;
    list = list.sort((a, b) => {
      if (params.sort === 'deadline') return order[campaignStatus(a)] - order[campaignStatus(b)] || Date.parse(a.recruitEnd) - Date.parse(b.recruitEnd);
      if (params.sort === 'stamps') return b.stamps - a.stamps || Date.parse(a.recruitEnd) - Date.parse(b.recruitEnd);
      return Date.parse(b.recruitStart) - Date.parse(a.recruitStart);
    });
    return list;
  });
}

export function getCampaign(slug: string) {
  return query(s => {
    const c = campaignsOf(s).find(x => x.slug === slug);
    if (!c) throw new ApiError('NOT_FOUND', '체험단을 찾을 수 없어요.');
    const applied = s.applications.filter(a => a.campaignId === c.id && a.status !== 'cancelled').length;
    const mine = s.sessionUserId ? s.applications.find(a => a.campaignId === c.id && a.userId === s.sessionUserId) : undefined;
    return { campaign: c, applied, mine };
  });
}

// ---- Session -----------------------------------------------------------------

export function session(s = snapshot()) {
  return s.users.find(u => u.id === s.sessionUserId) ?? null;
}

export type DemoLogin = 'fresh' | 'sample' | 'admin';

export function login(kind: DemoLogin, nickname: string) {
  return tx(s => {
    const name = nickname.trim();
    if (name.length < 2 || name.length > 12) throw new ApiError('VALIDATION', '닉네임은 2~12자로 입력해 주세요.', { nickname: '2~12자로 입력해 주세요.' });
    const user: User = {
      id: nextId(s, 'u'), nickname: name, role: kind === 'admin' ? 'admin' : 'member', createdAt: now(),
      intro: '', channels: {},
    };
    s.users.push(user);
    s.sessionUserId = user.id;
    if (kind === 'sample') seedSample(s, user);
    return user;
  });
}

export function switchUser(userId: string) {
  return tx(s => {
    if (!s.users.some(u => u.id === userId)) throw new ApiError('NOT_FOUND', '계정을 찾을 수 없어요.');
    s.sessionUserId = userId;
  });
}

export function logout() {
  return tx(s => { s.sessionUserId = null; });
}

export function resetDemo() {
  return tx(s => { Object.assign(s, fresh()); });
}

export function updateProfile(patch: { nickname: string; intro: string; channels: Partial<Record<Channel, string>> }) {
  return tx(s => {
    const user = me(s);
    const fields: Record<string, string> = {};
    const name = patch.nickname.trim();
    if (name.length < 2 || name.length > 12) fields.nickname = '2~12자로 입력해 주세요.';
    for (const [k, v] of Object.entries(patch.channels)) if (v && !isHttps(v)) fields['ch-' + k] = 'https:// 로 시작하는 주소를 입력해 주세요.';
    if (patch.intro.length > 120) fields.intro = '120자 안으로 써 주세요.';
    if (Object.keys(fields).length) throw new ApiError('VALIDATION', '입력한 내용을 확인해 주세요.', fields);
    user.nickname = name;
    user.intro = patch.intro.trim();
    user.channels = Object.fromEntries(Object.entries(patch.channels).filter(([, v]) => v)) as User['channels'];
    return true;
  });
}

export function markSeen(kind: 'stickers' | 'stamps') {
  return tx(s => {
    const user = me(s);
    if (kind === 'stickers') user.seenStickersAt = now(); else user.seenStampsAt = now();
  });
}

function isHttps(v: string) {
  try { return new URL(v).protocol === 'https:'; } catch { return false; }
}

// ---- Applications ------------------------------------------------------------------

export interface ApplyForm { channel: Channel; channelUrl: string; plan: string; agree: boolean }

function applyIn(s: DemoState, user: User, c: Campaign, form: ApplyForm, at = now()) {
  const fields: Record<string, string> = {};
  if (!c.channels.includes(form.channel)) fields.channel = '이 체험단에서 받는 채널을 골라 주세요.';
  if (!isHttps(form.channelUrl)) fields.channelUrl = 'https:// 로 시작하는 채널 주소를 입력해 주세요.';
  if (form.plan.trim().length < 10) fields.plan = '어떻게 체험하고 기록할지 10자 이상 적어 주세요.';
  if (form.plan.length > 300) fields.plan = '300자 안으로 적어 주세요.';
  if (!form.agree) fields.agree = '유의사항에 동의해 주세요.';
  if (Object.keys(fields).length) throw new ApiError('VALIDATION', '입력한 내용을 확인해 주세요.', fields);
  const existing = s.applications.find(a => a.campaignId === c.id && a.userId === user.id);
  if (existing && existing.status !== 'cancelled') throw new ApiError('DUPLICATE', '이미 신청한 체험단이에요.');
  if (existing) {
    Object.assign(existing, { status: 'applied', channel: form.channel, channelUrl: form.channelUrl, plan: form.plan.trim(), updatedAt: at });
    return existing;
  }
  const app: Application = {
    id: nextId(s, 'ap'), campaignId: c.id, userId: user.id, status: 'applied', channel: form.channel,
    channelUrl: form.channelUrl, plan: form.plan.trim(), createdAt: at, updatedAt: at,
  };
  s.applications.push(app);
  return app;
}

export function apply(campaignId: string, form: ApplyForm) {
  return tx(s => {
    const user = me(s);
    const c = campaignById(s, campaignId);
    if (!c) throw new ApiError('NOT_FOUND', '체험단을 찾을 수 없어요.');
    const status = campaignStatus(c);
    if (status === 'upcoming') throw new ApiError('NOT_OPEN', '아직 모집이 시작되지 않았어요.');
    if (status === 'closed') throw new ApiError('CLOSED', '모집이 마감된 체험단이에요.');
    return applyIn(s, user, c, form);
  });
}

export function cancelApplication(applicationId: string) {
  return tx(s => {
    const user = me(s);
    const app = s.applications.find(a => a.id === applicationId && a.userId === user.id);
    if (!app) throw new ApiError('NOT_FOUND', '신청 내역을 찾을 수 없어요.');
    if (app.status === 'cancelled') return app;
    if (app.status !== 'applied') throw new ApiError('INVALID_STATE', '선정 결과가 나온 뒤에는 취소할 수 없어요. 문의해 주세요.');
    app.status = 'cancelled';
    app.updatedAt = now();
    return app;
  });
}

// ---- Reviews -----------------------------------------------------------------

export interface ReviewForm { url: string; memo: string; disclosure: boolean; experienced: boolean }

function submitIn(s: DemoState, user: User, app: Application, form: ReviewForm, at = now()) {
  const fields: Record<string, string> = {};
  if (!isHttps(form.url)) fields.url = 'https:// 로 시작하는 리뷰 주소를 입력해 주세요.';
  if (!form.disclosure) fields.disclosure = '광고(제공) 표기를 넣었는지 확인해 주세요.';
  if (!form.experienced) fields.experienced = '직접 체험한 내용인지 확인해 주세요.';
  if (form.memo.length > 300) fields.memo = '300자 안으로 적어 주세요.';
  if (Object.keys(fields).length) throw new ApiError('VALIDATION', '입력한 내용을 확인해 주세요.', fields);
  if (app.status !== 'selected') throw new ApiError('INVALID_STATE', '선정된 체험단만 리뷰를 제출할 수 있어요.');
  if (s.reviews.some(r => r.applicationId === app.id && r.status === 'rejected')) throw new ApiError('INVALID_STATE', '반려된 미션은 다시 제출할 수 없어요. 문의해 주세요.');
  const open = s.reviews.find(r => r.applicationId === app.id && (r.status === 'submitted' || r.status === 'approved'));
  if (open) throw new ApiError('DUPLICATE', open.status === 'approved' ? '이미 승인된 리뷰예요.' : '검수 중인 리뷰가 있어요.');
  const review: Review = {
    id: nextId(s, 'rv'), applicationId: app.id, campaignId: app.campaignId, userId: user.id, url: form.url.trim(),
    channel: app.channel, memo: form.memo.trim(), status: 'submitted', submittedAt: at,
  };
  s.reviews.push(review);
  return review;
}

export function submitReview(applicationId: string, form: ReviewForm) {
  return tx(s => {
    const user = me(s);
    const app = s.applications.find(a => a.id === applicationId && a.userId === user.id);
    if (!app) throw new ApiError('NOT_FOUND', '신청 내역을 찾을 수 없어요.');
    return submitIn(s, user, app, form);
  });
}

// ---- Stamps & stickers ---------------------------------------------------------

export function balanceOf(s: DemoState, userId: string) {
  let available = 0, earned = 0, spent = 0;
  for (const l of s.ledger) {
    if (l.userId !== userId) continue;
    available += l.amount;
    if (l.type === 'earn' || l.type === 'adjust') earned += Math.max(0, l.amount);
    if (l.type === 'spend') spent += -l.amount;
    if (l.type === 'refund') spent -= l.amount;
  }
  const pending = s.reviews
    .filter(r => r.userId === userId && r.status === 'submitted')
    .reduce((sum, r) => sum + (campaignById(s, r.campaignId)?.stamps ?? 0), 0);
  return { available, earned, spent, pending };
}

function grantSticker(s: DemoState, userId: string, stickerId: string, at: string, ref: { campaignId?: string; reviewId?: string } = {}) {
  if (s.userStickers.some(x => x.userId === userId && x.stickerId === stickerId)) return false;
  s.userStickers.push({ id: nextId(s, 'us'), userId, stickerId, acquiredAt: at, ...ref });
  return true;
}

function approveIn(s: DemoState, actor: User, review: Review, note: string, at = now()) {
  const app = s.applications.find(a => a.id === review.applicationId)!;
  const c = campaignById(s, review.campaignId)!;
  const key = 'review:' + review.id;
  review.status = 'approved';
  review.decidedAt = at;
  review.decisionNote = note;
  // One review is rewarded exactly once, whatever happens to the request.
  if (!s.ledger.some(l => l.idempotencyKey === key)) {
    s.ledger.push({
      id: nextId(s, 'lg'), userId: review.userId, type: 'earn', amount: c.stamps, reason: `리뷰 미션 승인 · ${c.title}`,
      refType: 'review', refId: review.id, idempotencyKey: key, createdAt: at,
    });
  }
  grantSticker(s, review.userId, c.stickerId, at, { campaignId: c.id, reviewId: review.id });
  const approved = s.reviews.filter(r => r.userId === review.userId && r.status === 'approved').length;
  if (approved >= 1) grantSticker(s, review.userId, 'st-first', at);
  if (approved >= 3) grantSticker(s, review.userId, 'st-explorer', at);
  if (s.userStickers.filter(x => x.userId === review.userId).length >= 5) grantSticker(s, review.userId, 'st-star', at);
  app.status = 'completed';
  app.updatedAt = at;
  log(s, actor, 'review.approve', review.id, note, at);
}

function log(s: DemoState, actor: User, action: string, target: string, note = '', at = now()) {
  s.adminActions.push({ id: nextId(s, 'aa'), actorId: actor.id, action, target, note, at });
}

// ---- Rewards -------------------------------------------------------------------

export function listRewards() {
  return query(s => REWARDS.map(r => ({ reward: r, stock: s.stock[r.id] ?? 0 })));
}

export function getReward(slug: string) {
  return query(s => {
    const reward = REWARDS.find(r => r.slug === slug);
    if (!reward) throw new ApiError('NOT_FOUND', '상품을 찾을 수 없어요.');
    const user = session(s);
    const mine = user ? s.redemptions.filter(x => x.userId === user.id && x.rewardId === reward.id && x.status !== 'cancelled').length : 0;
    return { reward, stock: s.stock[reward.id] ?? 0, mine };
  });
}

export function validateShipping(sh: Shipping) {
  const fields: Record<string, string> = {};
  if (sh.name.trim().length < 2) fields.name = '받는 분 이름을 입력해 주세요.';
  if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(sh.phone.trim())) fields.phone = '휴대폰 번호를 010-0000-0000 형식으로 입력해 주세요.';
  if (!/^\d{5}$/.test(sh.zip.trim())) fields.zip = '우편번호 5자리를 입력해 주세요.';
  if (sh.address1.trim().length < 5) fields.address1 = '주소를 입력해 주세요.';
  if (sh.memo.length > 60) fields.memo = '60자 안으로 적어 주세요.';
  return fields;
}

function redeemIn(s: DemoState, user: User, reward: Reward, shipping: Shipping, idempotencyKey: string, at = now()) {
  // Retried requests with the same key return the first result instead of charging twice.
  const repeat = s.redemptions.find(r => r.idempotencyKey === idempotencyKey && r.userId === user.id);
  if (repeat) return repeat;
  const fields = validateShipping(shipping);
  if (Object.keys(fields).length) throw new ApiError('VALIDATION', '배송 정보를 확인해 주세요.', fields);
  const stock = s.stock[reward.id] ?? 0;
  if (stock <= 0) throw new ApiError('OUT_OF_STOCK', '방금 재고가 모두 소진됐어요.');
  const active = s.redemptions.filter(r => r.userId === user.id && r.rewardId === reward.id && r.status !== 'cancelled').length;
  if (active >= reward.limitPerUser) throw new ApiError('LIMIT_REACHED', `이 상품은 한 사람당 ${reward.limitPerUser}번까지 교환할 수 있어요.`);
  const { available } = balanceOf(s, user.id);
  if (available < reward.cost) throw new ApiError('INSUFFICIENT_STAMPS', `스탬프가 ${reward.cost - available}개 부족해요.`);
  const red: Redemption = {
    id: nextId(s, 'rd'), userId: user.id, rewardId: reward.id, cost: reward.cost, status: 'requested',
    shipping: { ...shipping, name: shipping.name.trim(), phone: shipping.phone.trim() }, idempotencyKey, createdAt: at, updatedAt: at,
  };
  s.redemptions.push(red);
  s.stock[reward.id] = stock - 1;
  s.ledger.push({
    id: nextId(s, 'lg'), userId: user.id, type: 'spend', amount: -reward.cost, reason: `상품 교환 · ${reward.name}`,
    refType: 'redemption', refId: red.id, idempotencyKey: 'redeem:' + red.id, createdAt: at,
  });
  return red;
}

export function redeem(rewardId: string, shipping: Shipping, idempotencyKey: string) {
  return tx(s => {
    const user = me(s);
    const reward = rewardById(rewardId);
    if (!reward) throw new ApiError('NOT_FOUND', '상품을 찾을 수 없어요.');
    return redeemIn(s, user, reward, shipping, idempotencyKey);
  });
}

function refundIn(s: DemoState, red: Redemption, reason: string, at = now()) {
  const key = 'refund:' + red.id;
  red.status = 'cancelled';
  red.updatedAt = at;
  if (s.ledger.some(l => l.idempotencyKey === key)) return;
  s.ledger.push({
    id: nextId(s, 'lg'), userId: red.userId, type: 'refund', amount: red.cost, reason,
    refType: 'redemption', refId: red.id, idempotencyKey: key, createdAt: at,
  });
  s.stock[red.rewardId] = (s.stock[red.rewardId] ?? 0) + 1;
}

export function cancelRedemption(id: string) {
  return tx(s => {
    const user = me(s);
    const red = s.redemptions.find(r => r.id === id && r.userId === user.id);
    if (!red) throw new ApiError('NOT_FOUND', '교환 내역을 찾을 수 없어요.');
    if (red.status === 'cancelled') return red;
    if (red.status !== 'requested') throw new ApiError('INVALID_STATE', '상품 준비가 시작돼 취소할 수 없어요.');
    refundIn(s, red, '교환 취소 환급');
    return red;
  });
}

// ---- Brand inquiry -------------------------------------------------------------

export function submitInquiry(form: Omit<BrandInquiry, 'id' | 'createdAt'> & { agree: boolean }) {
  return tx(s => {
    const fields: Record<string, string> = {};
    if (form.company.trim().length < 2) fields.company = '브랜드명을 입력해 주세요.';
    if (form.contact.trim().length < 2) fields.contact = '담당자 이름을 입력해 주세요.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) fields.email = '이메일 형식을 확인해 주세요.';
    if (form.message.trim().length < 10) fields.message = '문의 내용을 10자 이상 적어 주세요.';
    if (!form.agree) fields.agree = '개인정보 수집에 동의해 주세요.';
    if (Object.keys(fields).length) throw new ApiError('VALIDATION', '입력한 내용을 확인해 주세요.', fields);
    const { agree: _agree, ...rest } = form;
    void _agree;
    const inquiry: BrandInquiry = { ...rest, id: nextId(s, 'iq'), createdAt: now() };
    s.inquiries.push(inquiry);
    return inquiry;
  });
}

// ---- Admin -------------------------------------------------------------------------

export function setApplicationStatus(id: string, status: 'selected' | 'rejected' | 'applied') {
  return tx(s => {
    const actor = admin(s);
    const app = s.applications.find(a => a.id === id);
    if (!app) throw new ApiError('NOT_FOUND', '신청을 찾을 수 없어요.');
    if (!['applied', 'selected', 'rejected'].includes(app.status)) throw new ApiError('INVALID_STATE', '이 신청은 상태를 바꿀 수 없어요.');
    if (status === 'selected' && app.status !== 'selected') {
      const c = campaignById(s, app.campaignId)!;
      const selected = s.applications.filter(a => a.campaignId === c.id && (a.status === 'selected' || a.status === 'completed')).length;
      if (selected >= c.quota) throw new ApiError('QUOTA_FULL', `선정 인원 ${c.quota}명이 모두 찼어요.`);
    }
    if (app.status === 'selected' && status !== 'selected' && s.reviews.some(r => r.applicationId === id)) {
      throw new ApiError('INVALID_STATE', '리뷰가 제출된 신청은 선정을 취소할 수 없어요.');
    }
    app.status = status;
    app.updatedAt = now();
    log(s, actor, 'application.' + status, id);
    return true;
  });
}

export function decideReview(id: string, decision: Exclude<ReviewStatus, 'submitted'>, note: string) {
  return tx(s => {
    const actor = admin(s);
    const review = s.reviews.find(r => r.id === id);
    if (!review) throw new ApiError('NOT_FOUND', '리뷰를 찾을 수 없어요.');
    if (review.status !== 'submitted') throw new ApiError('INVALID_STATE', '이미 처리된 리뷰예요.');
    if (decision !== 'approved' && note.trim().length < 5) throw new ApiError('VALIDATION', '사유를 5자 이상 적어 주세요.', { note: '참여자에게 보낼 사유를 적어 주세요.' });
    if (decision === 'approved') { approveIn(s, actor, review, note.trim()); return true; }
    review.status = decision;
    review.decidedAt = now();
    review.decisionNote = note.trim();
    if (decision === 'rejected') {
      const app = s.applications.find(a => a.id === review.applicationId)!;
      app.updatedAt = now();
    }
    log(s, actor, 'review.' + decision, id, note);
    return true;
  });
}

export function setRedemptionStatus(id: string, status: RedemptionStatus) {
  return tx(s => {
    const actor = admin(s);
    const red = s.redemptions.find(r => r.id === id);
    if (!red) throw new ApiError('NOT_FOUND', '교환 신청을 찾을 수 없어요.');
    if (red.status === 'cancelled') throw new ApiError('INVALID_STATE', '취소된 신청이에요.');
    if (status === 'cancelled') refundIn(s, red, '운영자 교환 취소 환급');
    else { red.status = status; red.updatedAt = now(); }
    log(s, actor, 'redemption.' + status, id);
    return true;
  });
}

export function adjustStock(rewardId: string, delta: number) {
  return tx(s => {
    const actor = admin(s);
    const next = (s.stock[rewardId] ?? 0) + delta;
    if (next < 0) throw new ApiError('VALIDATION', '재고는 0보다 작을 수 없어요.');
    s.stock[rewardId] = next;
    log(s, actor, 'stock.adjust', rewardId, String(delta));
    return true;
  });
}

export function editCampaign(id: string, patch: Partial<Pick<Campaign, 'title' | 'summary' | 'quota' | 'stamps' | 'benefit' | 'recruitEnd'>>) {
  return tx(s => {
    const actor = admin(s);
    if (!CAMPAIGNS.some(c => c.id === id)) throw new ApiError('NOT_FOUND', '체험단을 찾을 수 없어요.');
    if (patch.title !== undefined && patch.title.trim().length < 4) throw new ApiError('VALIDATION', '제목을 4자 이상 입력해 주세요.', { title: '4자 이상' });
    if (patch.quota !== undefined && (!Number.isInteger(patch.quota) || patch.quota < 1)) throw new ApiError('VALIDATION', '선정 인원을 확인해 주세요.', { quota: '1 이상' });
    if (patch.stamps !== undefined && (!Number.isInteger(patch.stamps) || patch.stamps < 1 || patch.stamps > 10)) throw new ApiError('VALIDATION', '스탬프는 1~10개로 정해 주세요.', { stamps: '1~10' });
    s.campaignEdits[id] = { ...s.campaignEdits[id], ...patch };
    log(s, actor, 'campaign.edit', id, Object.keys(patch).join(','));
    return true;
  });
}

// ---- Sample explorer -----------------------------------------------------------

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
}

/** Builds a believable history through the same rules the live flow uses. */
function seedSample(s: DemoState, user: User) {
  const system: User = { id: 'system', nickname: '운영팀', role: 'admin', createdAt: now(), intro: '', channels: {} };
  user.channels = { blog: 'https://blog.example.com/explorer' };
  user.intro = '주말마다 새로운 가게를 찾아다녀요.';
  const bySlug = (slug: string) => campaignsOf(s).find(c => c.slug === slug)!;
  const plan = '일주일 동안 사용하며 사진과 함께 솔직하게 기록할게요.';
  const run = (slug: string, upTo: 'applied' | 'selected' | 'submitted' | 'approved', ago: number) => {
    const c = bySlug(slug);
    const app = applyIn(s, user, c, { channel: c.channels[0], channelUrl: 'https://blog.example.com/explorer', plan, agree: true }, daysAgo(ago + 14));
    if (upTo === 'applied') return;
    app.status = 'selected';
    app.updatedAt = daysAgo(ago + 10);
    if (upTo === 'selected') return;
    const review = submitIn(s, user, app, { url: 'https://blog.example.com/explorer/' + slug, memo: '', disclosure: true, experienced: true }, daysAgo(ago + 3));
    if (upTo === 'approved') approveIn(s, system, review, '미션 항목을 모두 확인했어요.', daysAgo(ago));
  };
  run('ceramic-mug', 'approved', 20);
  run('linen-kitchen-towel', 'approved', 12);
  run('basque-cheesecake', 'approved', 6);
  run('camera-strap', 'submitted', 0);
  run('pocket-hand-cream', 'selected', 0);
  run('everyday-cotton-bag', 'applied', -12);
  const reward = REWARDS.find(r => r.slug === 'travel-hand-cream')!;
  redeemIn(s, user, reward, {
    name: '탐험가', phone: '010-0000-0000', zip: '04000', address1: '서울시 마포구 데모로 1', address2: '', memo: '',
  }, 'seed-' + user.id, daysAgo(2));
  user.seenStickersAt = daysAgo(1);
  user.seenStampsAt = daysAgo(1);
}

export function stickerDefIds() {
  return STICKERS.map(s => s.id);
}
