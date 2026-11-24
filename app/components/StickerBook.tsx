import { useEffect, useState, type CSSProperties } from 'react';
import type { StickerDef } from '../api/types';
import { Sticker } from '../art/Sticker';
import { Sparkle, Star } from '../art/Deco';
import { fmtDate, reducedMotion } from './ui';

export interface BookSlot { def: StickerDef; acquiredAt?: string; fresh?: boolean }
export interface BookPage { key: string; title: string; en: string; color: string; slots: BookSlot[] }

const TILTS = [-7, 5, -3, 8, -5, 3, -8, 6];

function Page({ page, onPick, side }: { page?: BookPage; onPick?: (s: BookSlot) => void; side: 'l' | 'r' }) {
  if (!page) return <div className={'sb-page sb-blank sb-' + side} />;
  const owned = page.slots.filter(s => s.acquiredAt).length;
  return (
    <div className={'sb-page sb-' + side} style={{ '--theme': page.color } as CSSProperties}>
      <header className="sb-head">
        <span className="en">{page.en}</span>
        <b>{page.title}</b>
        <span className="sb-count num">{owned}/{page.slots.length}</span>
      </header>
      <ul className="sb-slots">
        {page.slots.map((s, i) => (
          <li key={s.def.id} className={'sb-slot' + (s.acquiredAt ? ' is-owned' : ' is-locked') + (s.fresh ? ' is-new' : '')} style={{ '--tilt': TILTS[i % TILTS.length] + 'deg', '--i': i } as CSSProperties}>
            <button type="button" className="sticker-btn" onClick={() => onPick?.(s)}
              aria-label={s.acquiredAt ? `${s.def.name} 스티커, ${fmtDate(s.acquiredAt)} 획득. 기록 보기` : `아직 모으지 못한 스티커: ${s.def.name}. 얻는 방법 보기`}>
              <Sticker art={s.def.art} size={76} locked={!s.acquiredAt} />
              {!s.acquiredAt && <span className="sb-q" aria-hidden="true">?</span>}
            </button>
            {s.acquiredAt ? <span className="sb-date num">{fmtDate(s.acquiredAt)}</span> : <span className="sb-name">{s.def.name}</span>}
            {s.fresh && <span className="sb-new en" aria-hidden="true">NEW!</span>}
          </li>
        ))}
      </ul>
      <span className="sb-doodle" aria-hidden="true">{side === 'l' ? <Star size={22} /> : <Sparkle size={20} color="#F7BBD0" />}</span>
    </div>
  );
}

/** A two-page sticker book (one page on phones) with 3D page turns. */
export function StickerBook({ pages, onPick, open = true, label = '스티커북' }: { pages: BookPage[]; onPick?: (s: BookSlot) => void; open?: boolean; label?: string }) {
  const [single, setSingle] = useState(() => matchMedia('(max-width: 760px)').matches);
  const [index, setIndex] = useState(0);
  const [turn, setTurn] = useState<null | 'next' | 'prev'>(null);
  const per = single ? 1 : 2;
  useEffect(() => {
    const mq = matchMedia('(max-width: 760px)');
    const on = () => { setSingle(mq.matches); setIndex(0); };
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  const last = Math.max(0, Math.ceil(pages.length / per) * per - per);
  const go = (dir: 'next' | 'prev') => {
    if (turn) return;
    const target = dir === 'next' ? index + per : index - per;
    if (target < 0 || target > last) return;
    if (reducedMotion()) { setIndex(target); return; }
    setTurn(dir);
    setTimeout(() => { setIndex(target); setTurn(null); }, 680);
  };
  // Swipe on touch screens.
  const [touchX, setTouchX] = useState<number | null>(null);

  let left: BookPage | undefined, right: BookPage | undefined, front: BookPage | undefined, back: BookPage | undefined;
  if (single) {
    left = turn === 'next' ? pages[index + 1] : turn === 'prev' ? pages[index] : pages[index];
    front = turn === 'next' ? pages[index] : turn === 'prev' ? pages[index - 1] : undefined;
  } else {
    left = turn === 'prev' ? pages[index - 2] : pages[index];
    right = turn === 'next' ? pages[index + 3] : pages[index + 1];
    front = turn === 'next' ? pages[index + 1] : turn === 'prev' ? pages[index] : undefined;
    back = turn === 'next' ? pages[index + 2] : turn === 'prev' ? pages[index - 1] : undefined;
  }
  const pageNo = Math.floor(index / per) + 1, pageCount = Math.ceil(pages.length / per);

  return (
    <div className={`sbook ${single ? 'is-single' : ''} ${open ? 'is-open' : ''}`} role="region" aria-label={label}
      onTouchStart={e => setTouchX(e.touches[0].clientX)}
      onTouchEnd={e => { if (touchX === null) return; const dx = e.changedTouches[0].clientX - touchX; setTouchX(null); if (Math.abs(dx) > 50) go(dx < 0 ? 'next' : 'prev'); }}>
      <div className="sb-spread">
        <Page page={left} onPick={onPick} side={single ? 'r' : 'l'} />
        {!single && <Page page={right} onPick={onPick} side="r" />}
        {turn && (
          <div className={`sb-leaf leaf-${turn} ${single ? 'leaf-single' : ''}`} aria-hidden="true">
            <div className="sb-leaf-front"><Page page={front} side={turn === 'next' ? 'r' : 'l'} /></div>
            <div className="sb-leaf-back">{single ? <div className="sb-page sb-blank" /> : <Page page={back} side={turn === 'next' ? 'l' : 'r'} />}</div>
          </div>
        )}
        {!single && <div className="sb-spine" aria-hidden="true" />}
        <div className="sb-cover" aria-hidden="true"><span className="en">STAMPY</span><b>Sticker Book</b><Star size={40} /></div>
      </div>
      {pageCount > 1 && (
        <div className="sb-nav">
          <button className="btn btn-sm" onClick={() => go('prev')} disabled={index === 0 || !!turn} aria-label="이전 페이지">← 이전</button>
          <span className="num" aria-live="polite">{pageNo} / {pageCount}</span>
          <button className="btn btn-sm" onClick={() => go('next')} disabled={index >= last || !!turn} aria-label="다음 페이지">다음 →</button>
        </div>
      )}
    </div>
  );
}
