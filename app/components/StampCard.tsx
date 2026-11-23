import type { CSSProperties } from 'react';
import { StampImprint, StampTool } from '../art/Deco';
import { useReveal } from './ui';

/** Paper stamp card. Stamps press in one by one when the card scrolls into view. */
export function StampCard({ filled, total = 10, title = 'STAMPY Stamp Card', note, animateFrom = 0 }: { filled: number; total?: number; title?: string; note?: string; animateFrom?: number }) {
  const [ref, inView] = useReveal<HTMLDivElement>({ threshold: .4 });
  const shown = Math.min(filled, total);
  return (
    <div ref={ref} className={'stamp-card' + (inView ? ' is-in' : '')}>
      <div className="stamp-card-head"><span className="en">{title}</span>{note && <span className="tiny muted">{note}</span>}</div>
      <ol className="stamp-grid" aria-label={`스탬프 ${total}칸 중 ${shown}칸`}>
        {Array.from({ length: total }, (_, i) => (
          <li key={i} className={'stamp-slot' + (i < shown ? ' is-filled' : '') + (i >= animateFrom && i < shown ? ' is-pressing' : '')}
            style={{ '--d': (Math.max(0, i - animateFrom) * .32) + 's', '--r': ((i * 37) % 24 - 12) + 'deg' } as CSSProperties}>
            {i < shown ? <StampImprint size={52} /> : <span className="num">{i + 1}</span>}
            {i === shown - 1 && shown > animateFrom && <span className="stamp-card-tool" aria-hidden="true"><StampTool size={46} /></span>}
          </li>
        ))}
      </ol>
    </div>
  );
}
