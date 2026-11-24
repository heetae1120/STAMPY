import { useEffect, useRef, useState } from 'react';
import type { CategoryId } from '../api/types';
import { CATEGORIES, REWARDS, campaignStatus, categoryById, brandById } from '../data/catalog';
import { campaignsOf } from '../api/demo';
import { useDemo } from '../api/hooks';
import { Link } from '../router';
import { TreasureMap } from '../art/TreasureMap';
import { Island } from '../art/Island';
import { Mascot } from '../art/Mascot';
import { Modal, ProductPhoto, StampIcon, dday, useTitle } from '../components/ui';
import { StampCount } from '../components/Cards';

type Cat = Exclude<CategoryId, 'etc'>;

export default function Explore() {
  useTitle('보물지도 탐험');
  const [selected, setSelected] = useState<Cat | null>(null);
  const [chest, setChest] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const data = useDemo(s => {
    const list = campaignsOf(s);
    const counts: Partial<Record<CategoryId, number>> = {};
    for (const c of list) if (campaignStatus(c) === 'open') counts[c.category] = (counts[c.category] ?? 0) + 1;
    return { list, counts, stock: s.stock };
  });
  const pick = (cat: Cat) => {
    setSelected(cat);
    requestAnimationFrame(() => {
      panel.current?.querySelector<HTMLElement>('h2')?.focus({ preventScroll: true });
      if (matchMedia('(max-width: 1000px)').matches) panel.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  const meta = selected ? categoryById(selected) : null;
  const camps = selected ? data.list.filter(c => c.category === selected).sort((a, b) => ['open', 'upcoming', 'closed'].indexOf(campaignStatus(a)) - ['open', 'upcoming', 'closed'].indexOf(campaignStatus(b))) : [];

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <div>
            <p className="eyebrow">Treasure Map</p>
            <h1 className="h1">보물지도 탐험</h1>
            <p className="lead">섬을 눌러 그 카테고리에서 모집 중인 체험단을 살펴보세요. 가운데 보물상자에는 교환할 수 있는 상품이 들어 있어요.</p>
          </div>
        </div>
      </header>
      <div className="wrap explore-grid">
        <div className="explore-map paper">
          <span className="tape" style={{ left: 30, top: -10 }} /><span className="tape tape-pink" style={{ right: 40, top: -8, rotate: '6deg' }} />
          <div className="explore-scroll" tabIndex={-1}>
            <TreasureMap counts={data.counts} selected={selected} onSelect={pick} onChest={() => setChest(true)} title="STAMPY 보물지도: 섬을 고르면 오른쪽에 체험단이 보여요" />
          </div>
          <p className="explore-swipe tiny muted" aria-hidden="true">← 지도를 옆으로 밀어 보세요 →</p>
        </div>
        <div ref={panel} className="explore-panel card" aria-live="polite">
          {meta && selected ? (
            <>
              <button className="modal-close" onClick={() => setSelected(null)} aria-label="섬 선택 해제">×</button>
              <div className="ep-head" style={{ background: meta.color }}>
                <Island cat={selected} top={meta.color} side={meta.deep} size={170} />
              </div>
              <p className="en tiny muted" style={{ margin: '12px 0 0' }}>{meta.en}</p>
              <h2 className="h2" tabIndex={-1} style={{ outline: 'none' }}>{meta.island}</h2>
              <p className="muted small">{meta.blurb}</p>
              <ul className="ep-list">
                {camps.map(c => {
                  const st = campaignStatus(c);
                  return (
                    <li key={c.id}><Link to={'/experiences/' + c.slug} className={'ep-item is-' + st}>
                      <span className="ep-photo"><ProductPhoto campaign={c} /></span>
                      <span className="ep-txt"><small>{brandById(c.brandId).name} · {st === 'open' ? dday(c.recruitEnd) : st === 'upcoming' ? '모집 예정' : '모집 마감'}</small><b>{c.title}</b></span>
                      <StampCount n={c.stamps} label={false} />
                    </Link></li>
                  );
                })}
              </ul>
              <Link to={'/experiences?category=' + selected} className="btn btn-primary btn-block">{meta.island} 체험단 모두 보기</Link>
            </>
          ) : (
            <div className="ep-empty">
              <Mascot pose="discover" size={110} />
              <h2 className="h3">어느 섬으로 갈까요?</h2>
              <p className="muted small">지도에서 섬을 누르거나 아래에서 골라 보세요.</p>
              <ul className="ep-cats">
                {CATEGORIES.filter(c => c.id !== 'etc').map(c => (
                  <li key={c.id}><button className="chip" onClick={() => pick(c.id as Cat)} style={{ background: c.color }}>{c.island} <b className="num">{data.counts[c.id] ?? 0}</b></button></li>
                ))}
              </ul>
              <Link to="/experiences?category=etc" className="link small link-solo">기타 체험단 (서비스·정보 글) 보기</Link>
            </div>
          )}
        </div>
      </div>
      {chest && (
        <Modal title="보물상자 속 리워드" onClose={() => setChest(false)}>
          <p className="small muted">상자에서 무작위로 나오지 않아요. 원하는 상품을 직접 골라 스탬프로 교환해요.</p>
          <ul className="pop-rewards">
            {REWARDS.filter(r => (data.stock[r.id] ?? 0) > 0).slice(0, 4).map(r => (
              <li key={r.id}><Link to={'/rewards/' + r.slug}><img src={r.image} alt="" /><span><small>{brandById(r.brandId).name}</small>{r.name}</span><b className="pop-cost"><StampIcon size={18} /><span className="num">{r.cost}</span></b></Link></li>
            ))}
          </ul>
          <Link to="/rewards" className="btn btn-yellow btn-block" style={{ marginTop: 14 }}>리워드샵 전체 보기</Link>
        </Modal>
      )}
    </>
  );
}
