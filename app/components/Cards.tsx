import type { Campaign, Reward } from '../api/types';
import { CHANNEL_LABEL, KIND_LABEL, brandById, campaignStatus, categoryById, stickerById } from '../data/catalog';
import { Link } from '../router';
import { Sticker } from '../art/Sticker';
import { DemoBadge, ProductPhoto, StampIcon, StatusBadge, dday, fmtDate } from './ui';

export function CategoryTag({ category, stickerArt }: { category: string; stickerArt?: string }) {
  const cat = categoryById(category);
  return (
    <span className="cat-tag" style={{ background: cat.color }}>
      {stickerArt && <Sticker art={stickerArt} size={26} />}
      {cat.name}
    </span>
  );
}

export function StampCount({ n, label = true }: { n: number; label?: boolean }) {
  return (
    <span className="stamp-count" aria-label={`스탬프 ${n}개`}>
      <StampIcon size={20} /><b className="num">{n}</b>{label && <span>스탬프</span>}
    </span>
  );
}

/** Postcard-style campaign card. Product photo first, decoration kept small. */
export function ExperienceCard({ c, applied }: { c: Campaign; applied?: number }) {
  const status = campaignStatus(c);
  const brand = brandById(c.brandId);
  const sticker = stickerById(c.stickerId);
  return (
    <article className={'xcard is-' + status}>
      <div className="xcard-photo">
        <ProductPhoto campaign={c} />
        <CategoryTag category={c.category} stickerArt={sticker.art} />
        {status === 'open' && <span className="postmark"><span className="num">{dday(c.recruitEnd)}</span></span>}
      </div>
      <div className="xcard-body">
        <div className="xcard-meta"><StatusBadge status={status} /><span className="badge">{KIND_LABEL[c.kind]}</span>{c.demo && <DemoBadge />}</div>
        <p className="xcard-brand">{brand.name}</p>
        <h3 className="xcard-title"><Link to={'/experiences/' + c.slug} className="stretched">{c.title}</Link></h3>
        <p className="xcard-benefit"><b>제공</b> {c.benefit}</p>
        <dl className="xcard-facts">
          <div><dt>모집</dt><dd>{fmtDate(c.recruitStart)} – {fmtDate(c.recruitEnd)}</dd></div>
          <div><dt>채널</dt><dd>{c.channels.map(ch => CHANNEL_LABEL[ch]).join(' · ')}</dd></div>
          <div><dt>인원</dt><dd>{c.quota}명{applied !== undefined ? ` · 신청 ${applied}` : ''}</dd></div>
        </dl>
        <div className="xcard-foot">
          <StampCount n={c.stamps} />
          <span className="xcard-more" aria-hidden="true">상세 보기 →</span>
        </div>
      </div>
    </article>
  );
}

export function RewardCard({ r, stock, balance }: { r: Reward; stock: number; balance: number | null }) {
  const brand = brandById(r.brandId);
  const short = balance === null ? null : Math.max(0, r.cost - balance);
  const state = stock <= 0 ? 'soldout' : short === null ? 'guest' : short === 0 ? 'ready' : 'short';
  return (
    <article className={'rcard is-' + state}>
      <div className="rcard-photo">
        <img src={r.image} alt={r.name + ' 상품 사진 (예시)'} loading="lazy" decoding="async" />
        <span className="rcard-cost"><StampIcon size={22} /><b className="num">{r.cost}</b></span>
        {stock <= 0 && <span className="rcard-soldout">품절</span>}
      </div>
      <div className="rcard-body">
        <p className="xcard-brand">{brand.name} {r.demo && <DemoBadge />}</p>
        <h3 className="xcard-title"><Link to={'/rewards/' + r.slug} className="stretched">{r.name}</Link></h3>
        <p className="rcard-stock">{stock > 0 ? <>남은 수량 <b className="num">{stock}</b>개</> : '재입고를 기다리고 있어요'}</p>
        <p className={'rcard-state state-' + state}>
          {state === 'ready' && '지금 교환할 수 있어요'}
          {state === 'short' && <>스탬프 <b className="num">{short}</b>개가 더 필요해요</>}
          {state === 'guest' && '로그인하면 교환 가능 여부를 알려드려요'}
          {state === 'soldout' && '지금은 교환할 수 없어요'}
        </p>
      </div>
    </article>
  );
}
