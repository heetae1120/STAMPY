// Data model shared by the UI, the demo server and a future real API.
// Field names follow docs/SERVICE_DESIGN.md.

export type CategoryId = 'beauty' | 'food' | 'living' | 'home' | 'fashion' | 'tech' | 'etc';
export type Channel = 'blog' | 'instagram' | 'youtube' | 'shortform';
export type CampaignKind = 'delivery' | 'visit' | 'editorial';
export type CampaignStatus = 'upcoming' | 'open' | 'closed';

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  intro: string;
  /** Demo brands are placeholders, not real partners. */
  demo: boolean;
}

export interface Campaign {
  id: string;
  slug: string;
  brandId: string;
  category: CategoryId;
  kind: CampaignKind;
  title: string;
  summary: string;
  /** Product photo. Missing photos show a labelled placeholder. */
  image?: string;
  channels: Channel[];
  quota: number;
  recruitStart: string; // ISO date
  recruitEnd: string;
  announceAt: string;
  reviewDeadline: string;
  /** Stamps granted after the review mission is approved. */
  stamps: number;
  stickerId: string;
  benefit: string;
  conditions: string[];
  mission: string[];
  eligibility: string[];
  notices: string[];
  location?: string;
  demo: boolean;
}

export type ApplicationStatus = 'applied' | 'selected' | 'rejected' | 'cancelled' | 'completed';

export interface Application {
  id: string;
  campaignId: string;
  userId: string;
  status: ApplicationStatus;
  channel: Channel;
  channelUrl: string;
  plan: string;
  createdAt: string;
  updatedAt: string;
}

export type ReviewStatus = 'submitted' | 'approved' | 'changes_requested' | 'rejected';

export interface Review {
  id: string;
  applicationId: string;
  campaignId: string;
  userId: string;
  url: string;
  channel: Channel;
  memo: string;
  status: ReviewStatus;
  submittedAt: string;
  decidedAt?: string;
  decisionNote?: string;
}

export interface StickerDef {
  id: string;
  name: string;
  category: CategoryId | 'special';
  art: string;
  series: string;
  /** How the sticker is earned. */
  rule: string;
}

export interface UserSticker {
  id: string;
  userId: string;
  stickerId: string;
  campaignId?: string;
  reviewId?: string;
  acquiredAt: string;
}

export type LedgerType = 'earn' | 'spend' | 'refund' | 'adjust';

/** Append-only stamp ledger. Balances are always derived from these rows. */
export interface LedgerEntry {
  id: string;
  userId: string;
  type: LedgerType;
  amount: number; // positive for earn/refund, negative for spend
  reason: string;
  refType: 'review' | 'redemption' | 'admin';
  refId: string;
  idempotencyKey: string;
  createdAt: string;
}

export interface Reward {
  id: string;
  slug: string;
  brandId: string;
  name: string;
  intro: string;
  image: string;
  cost: number;
  initialStock: number;
  limitPerUser: number;
  shipping: string;
  conditions: string[];
  notices: string[];
  demo: boolean;
}

export type RedemptionStatus = 'requested' | 'preparing' | 'shipped' | 'delivered' | 'cancelled';

export interface Shipping {
  name: string;
  phone: string;
  zip: string;
  address1: string;
  address2: string;
  memo: string;
}

export interface Redemption {
  id: string;
  userId: string;
  rewardId: string;
  cost: number;
  status: RedemptionStatus;
  shipping: Shipping;
  idempotencyKey: string;
  createdAt: string;
  updatedAt: string;
}

export type Role = 'member' | 'admin';

export interface User {
  id: string;
  nickname: string;
  role: Role;
  createdAt: string;
  intro: string;
  channels: Partial<Record<Channel, string>>;
  /** Last time the user looked at their sticker book / stamps, for "new" animations. */
  seenStickersAt?: string;
  seenStampsAt?: string;
}

export interface AdminAction {
  id: string;
  actorId: string;
  action: string;
  target: string;
  note?: string;
  at: string;
}

export interface BrandInquiry {
  id: string;
  company: string;
  contact: string;
  email: string;
  category: CategoryId;
  message: string;
  createdAt: string;
}

export class ApiError extends Error {
  constructor(public code: string, message: string, public fields: Record<string, string> = {}) {
    super(message);
  }
}
