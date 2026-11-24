import { useEffect, useMemo, useRef, useState } from 'react';
import type { CategoryId, UserSticker } from '../../api/types';
import { STICKERS, CAMPAIGNS, brandById } from '../../data/catalog';

const CAMPAIGN_BY_STICKER: Record<string, string> = Object.fromEntries(CAMPAIGNS.map(c => [c.stickerId, c.id]));
import { campaignById, markSeen } from '../../api/demo';
import { useDemo, useDemoState } from '../../api/hooks';
import { Link } from '../../router';
import { Modal, fmtFull, useTitle } from '../../components/ui';
import { StickerBook, type BookPage, type BookSlot } from '../../components/StickerBook';
import { Sticker } from '../../art/Sticker';
import { Sparkle } from '../../art/Deco';
import { MyFrame } from './shared';

const PAGES: { key: string; title: string; en: string; color: string; cats: (CategoryId | 'special')[] }[] = [
  { key: 'beauty', title: '뷰티 컬렉션', en: 'Beauty Collection', color: '#f1ebff', cats: ['beauty'] },
  { key: 'food', title: '푸드 컬렉션', en: 'Food Collection', color: '#ffe9e1', cats: ['food'] },
  { key: 'living', title: '라이프스타일 컬렉션', en: 'Lifestyle Collection', color: '#e5f4ea', cats: ['living'] },
  { key: 'home', title: '홈 컬렉션', en: 'Home Collection', color: '#fff4cc', cats: ['home'] },
  { key: 'ft', title: '패션 & 테크', en: 'Fashion & Tech', color: '#e5f2fb', cats: ['fashion', 'tech'] },
  { key: 'special', title: '스페셜 컬렉션', en: 'Special Collection', color: '#fde8ef', cats: ['special', 'etc'] },
];

function Book({ userId, seenAt }: { userId: string; seenAt?: string }) {
  const s = useDemoState();
  const mine = useMemo(() => new Map(s.userStickers.filter(x => x.userId === userId).map(x => [x.stickerId, x])), [s, userId]);
  // Freeze "new" at first render so the attach animation plays once per visit.
  const freshIds = useRef<Set<string> | null>(null);
  if (!freshIds.current) freshIds.current = new Set([...mine.values()].filter(x => !seenAt || x.acquiredAt > seenAt).map(x => x.stickerId));
  const [pick, setPick] = useState<{ slot: BookSlot; rec?: UserSticker } | null>(null);
  useEffect(() => {
    if (freshIds.current?.size) { const t = setTimeout(() => markSeen('stickers'), 1500); return () => clearTimeout(t); }
    if (!seenAt) markSeen('stickers');
  }, [seenAt]);

  const pages: BookPage[] = PAGES.map(p => ({
    key: p.key, title: p.title, en: p.en, color: p.color,
    slots: STICKERS.filter(d => p.cats.includes(d.category as CategoryId)).map(def => {
      const rec = mine.get(def.id);
      return { def, acquiredAt: rec?.acquiredAt, fresh: freshIds.current!.has(def.id) };
    }),
  }));
  const total = STICKERS.length, owned = mine.size;
  const fresh = freshIds.current.size;
  const rec = pick?.rec;
  const camp = rec?.campaignId ? campaignById(s, rec.campaignId) : undefined;
  const review = rec?.reviewId ? s.reviews.find(r => r.id === rec.reviewId) : undefined;
  const howId = pick && !pick.slot.acquiredAt ? CAMPAIGN_BY_STICKER[pick.slot.def.id] : undefined;
  const howCamp = howId ? campaignById(s, howId) : undefined;
  return (
    <>
      <div className="collection-bar card">
        <div><span className="small muted">전체 컬렉션</span><b className="num big">{owned}<small> / {total}</small></b></div>
        <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={owned} aria-label="스티커 수집률"><i style={{ width: (owned / total * 100) + '%' }} /></div>
        <p className="small muted" style={{ margin: 0 }}>스티커는 상품 교환에 쓰이지 않는 수집 기록이에요.</p>
      </div>
      {fresh > 0 && <p className="notice ok" role="status"><Sparkle size={20} /><span><b>새 스티커 {fresh}장</b>이 스티커북에 붙었어요!</span></p>}
      <StickerBook pages={pages} onPick={slot => setPick({ slot, rec: mine.get(slot.def.id) })} />
      {pick && (
        <Modal title={pick.slot.def.name} onClose={() => setPick(null)}>
          <div className="pick-card">
            <Sticker art={pick.slot.def.art} size={120} locked={!pick.slot.acquiredAt} />
            <div>
              <p className="tiny muted en">{pick.slot.def.series}</p>
              {rec ? (
                <dl className="facts">
                  <div><dt>획득 날짜</dt><dd>{fmtFull(rec.acquiredAt)}</dd></div>
                  {camp && <div><dt>체험단</dt><dd><Link className="link" to={'/experiences/' + camp.slug}>{camp.title}</Link></dd></div>}
                  {camp && <div><dt>브랜드</dt><dd>{brandById(camp.brandId).name}</dd></div>}
                  {review && <div><dt>나의 리뷰</dt><dd><a className="link" href={review.url} target="_blank" rel="noopener noreferrer">리뷰 열기 ↗</a></dd></div>}
                  <div><dt>획득 조건</dt><dd>{pick.slot.def.rule}</dd></div>
                </dl>
              ) : (
                <>
                  <p className="small">아직 모으지 못한 스티커예요.</p>
                  <p className="small"><b>얻는 방법</b> · {pick.slot.def.rule}</p>
                  {howCamp && <Link className="btn btn-sm" to={'/experiences/' + howCamp.slug}>관련 체험단 보기</Link>}
                </>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default function StickerbookPage() {
  useTitle('나의 스티커북');
  const seen = useDemo(s => s.users.find(u => u.id === s.sessionUserId)?.seenStickersAt);
  const [seenAt] = useState(seen);
  return (
    <MyFrame eyebrow="My Sticker Book" title="나의 스티커북" lead="승인된 경험마다 한 장씩. 스티커를 누르면 그때의 기록을 볼 수 있어요.">
      {user => <Book userId={user.id} seenAt={seenAt} />}
    </MyFrame>
  );
}
