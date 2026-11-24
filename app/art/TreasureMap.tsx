// The STAMPY treasure map (1200×800). Islands are real links into the experience list;
// the chest opens the reward preview. Decorative pieces are aria-hidden.
import type { MouseEvent } from 'react';
import type { CategoryId } from '../api/types';
import { CATEGORIES } from '../data/catalog';
import { href, navigate } from '../router';
import { C, ink } from './palette';
import { IslandArt } from './Island';
import { Mascot } from './Mascot';
import { SvgCloud, SvgFlag, SvgSparkle, SvgStar, Chest } from './Deco';

export const MAP_W = 1200, MAP_H = 800;

type IslandCat = Exclude<CategoryId, 'etc'>;
export const ISLAND_POS: Record<IslandCat, { x: number; y: number; s: number }> = {
  beauty: { x: 96, y: 116, s: .98 },
  food: { x: 438, y: 54, s: .98 },
  living: { x: 806, y: 106, s: .98 },
  home: { x: 118, y: 466, s: .98 },
  fashion: { x: 486, y: 474, s: .98 },
  tech: { x: 850, y: 462, s: .98 },
};
export const islandCenter = (cat: IslandCat) => {
  const p = ISLAND_POS[cat];
  return { x: p.x + 120 * p.s, y: p.y + 86 * p.s };
};

export const TRAIL = 'M92 748C160 758 260 736 340 712C420 690 420 560 370 470C320 380 150 400 200 300C250 230 410 140 540 196C620 232 556 300 600 352C660 414 820 388 902 274C960 196 1086 384 984 524C920 606 726 650 612 600';
export const WALK = 'M92 748C160 758 260 736 340 712';
export const MASCOT_REST = { x: 340, y: 712 };
export const CHEST_POS = { x: 600, y: 368 };

/** Paper, sea, grid and folds: shared with the folded hero panels via <use href="#map-base">. */
export function MapBase() {
  return (
    <g id="map-base">
      <rect x="0" y="0" width={MAP_W} height={MAP_H} rx="28" fill={C.cream} />
      <path d="M40 92C30 60 70 36 120 40L1060 34C1130 30 1166 62 1160 112L1166 690C1170 740 1130 768 1076 762L132 768C70 772 34 742 38 690z" fill="#dcefff" />
      <g stroke="#c4def2" strokeWidth="1.6" strokeDasharray="2 8" strokeLinecap="round">
        {[150, 250, 350, 450, 550, 650].map(y => <path key={y} d={`M50 ${y}H1150`} />)}
        {[150, 300, 450, 600, 750, 900, 1050].map(x => <path key={x} d={`M${x} 50V750`} />)}
      </g>
      <g fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".9">
        {[[370, 420], [720, 300], [1040, 420], [300, 760 - 60], [800, 690], [70, 470], [1110, 250], [480, 330], [760, 160]].map(([x, y], i) =>
          <path key={i} d={`M${x} ${y}q8-8 16 0t16 0`} />)}
      </g>
      <path d="M40 92C30 60 70 36 120 40L1060 34C1130 30 1166 62 1160 112L1166 690C1170 740 1130 768 1076 762L132 768C70 772 34 742 38 690z" fill="none" stroke={C.skyD} strokeWidth="3" strokeDasharray="10 8" strokeLinecap="round" opacity=".55" />
      <rect x="6" y="6" width={MAP_W - 12} height={MAP_H - 12} rx="24" fill="none" stroke="#efdcc0" strokeWidth="4" />
      {/* Compass */}
      <g transform="translate(1092 700)" opacity=".9">
        <circle r="34" fill={C.ivory} {...ink(2.6)} />
        <path d="M0-28l7 26H-7zM0 28l-7-26H7z" fill={C.coral} {...ink(2)} />
        <path d="M0 28l-7-26H7z" fill={C.sky} {...ink(2)} />
        <text y="-38" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontWeight="700" fontSize="16" fill={C.ink}>N</text>
      </g>
      {/* Fold creases */}
      <g opacity=".5">
        <rect x="388" y="0" width="24" height={MAP_H} fill="url(#fold-shade)" />
        <rect x="788" y="0" width="24" height={MAP_H} fill="url(#fold-shade)" />
      </g>
    </g>
  );
}

function stop(e: MouseEvent, to: string, onSelect?: () => void) {
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault();
  if (onSelect) onSelect();
  else navigate(to);
}

interface MapProps {
  counts?: Partial<Record<CategoryId, number>>;
  interactive?: boolean;
  selected?: CategoryId | null;
  onSelect?: (cat: IslandCat) => void;
  onChest?: () => void;
  onMascot?: () => void;
  showMascot?: boolean;
  title?: string;
  className?: string;
}

export function TreasureMap({ counts = {}, interactive = true, selected, onSelect, onChest, onMascot, showMascot = true, title = 'STAMPY 보물지도', className = '' }: MapProps) {
  const tab = interactive ? 0 : -1;
  return (
    <svg className={'tmap ' + className} viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="group" aria-label={title}>
      <defs>
        <linearGradient id="fold-shade" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".45" stopColor="#fff" stopOpacity=".55" />
          <stop offset=".55" stopColor="#c9b79c" stopOpacity=".35" /><stop offset="1" stopColor="#c9b79c" stopOpacity="0" />
        </linearGradient>
        <MapBase />
        <mask id="trail-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={MAP_W} height={MAP_H}>
          <path className="trail-reveal" d={TRAIL} pathLength={1} strokeDasharray="1 1" fill="none" stroke="#fff" strokeWidth="18" strokeLinecap="round" />
        </mask>
      </defs>
      <use href="#map-base" />

      <path className="map-walk" d={WALK} fill="none" stroke="none" />
      <g className="map-trail" aria-hidden="true" mask="url(#trail-mask)">
        <path d={TRAIL} fill="none" stroke={C.ink} strokeWidth="4" strokeDasharray="2 12" strokeLinecap="round" opacity=".55" />
      </g>
      <g className="map-deco" aria-hidden="true">
        <g className="map-bridge" transform="translate(552 262) rotate(58)">
          <rect x="-34" y="-12" width="68" height="24" rx="5" fill={C.wood} {...ink(2.6)} />
          {[-22, -10, 2, 14].map(x => <path key={x} d={`M${x} -12v24`} {...ink(2)} />)}
          <path d="M-34-12h68M-34 12h68" {...ink(2.6)} />
        </g>
        <g className="map-steps" fill={C.ink} opacity=".35">
          {[[122, 752, 80], [146, 756, 80], [172, 754, 86], [198, 750, 86]].map(([x, y, r], i) =>
            <ellipse key={i} cx={x + (i % 2) * 6} cy={y} rx="4" ry="6.5" transform={`rotate(${r} ${x} ${y})`} />)}
        </g>
        <g className="map-start">
          <path d="M58 760q34-30 80-6 10 16-16 22-50 6-64-16z" fill={C.butter} {...ink(2.6)} />
          <SvgFlag x={92} y={752} s={1.1} color={C.coral} />
          <text x="62" y="790" fontFamily="Fredoka, sans-serif" fontWeight="700" fontSize="18" fill={C.ink} opacity=".7">START</text>
        </g>
        {[[340, 86, .9], [1090, 600, .8]].map(([x, y, s], i) =>
          <g key={i} className="map-cloud" style={{ animationDelay: `${-i * 3}s` }}><SvgCloud x={x} y={y} s={s} /></g>)}
        {[[740, 440], [1130, 170], [430, 720]].map(([x, y], i) =>
          <g key={i} className="map-star"><SvgStar x={x} y={y} s={.8} fill={i % 2 ? C.pink : C.butter} /></g>)}
        <g className="map-star"><SvgSparkle x={690} y={312} s={1.3} /></g>
      </g>

      {(Object.keys(ISLAND_POS) as IslandCat[]).map(cat => {
        const p = ISLAND_POS[cat];
        const meta = CATEGORIES.find(c => c.id === cat)!;
        const n = counts[cat];
        const to = '/experiences?category=' + cat;
        const label = `${meta.island}${n !== undefined ? `, 모집 중 ${n}개` : ''}: 체험단 보기`;
        const body = (
          <g className="map-island-art" transform={`translate(${p.x} ${p.y}) scale(${p.s})`}><g className="map-pop">
            <g className="map-island-lift">
              <g filter="url(#f-cutout)"><IslandArt cat={cat} top={meta.color} side={meta.deep} /></g>
              <rect className="map-focus" x="10" y="20" width="220" height="150" rx="40" fill="none" />
            </g>
            <g className="map-label" transform="translate(120 172)">
              <rect x={-(meta.island.length * 11 + 18) - (n !== undefined ? 18 : 0)} y="-18" width={meta.island.length * 22 + 36 + (n !== undefined ? 36 : 0)} height="36" rx="18" fill={C.ivory} {...ink(2.6)} />
              <text x={n !== undefined ? -18 : 0} y="7" textAnchor="middle" fontFamily="Jua, Pretendard, sans-serif" fontSize="21" fill={C.ink}>{meta.island}</text>
              {n !== undefined && <g transform={`translate(${meta.island.length * 11 + 4} 0)`}><circle r="13" fill={meta.deep} /><text y="5.5" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontWeight="700" fontSize="15" fill="#fff">{n}</text></g>}
            </g>
          </g></g>
        );
        return interactive
          ? <a key={cat} className={'map-island' + (selected === cat ? ' is-selected' : '')} data-cat={cat} href={href(to)} aria-label={label}
            onClick={e => stop(e, to, onSelect ? () => onSelect(cat) : undefined)}>{body}</a>
          : <g key={cat} className="map-island" data-cat={cat} aria-hidden="true">{body}</g>;
      })}

      <g className="map-chest-wrap" transform={`translate(${CHEST_POS.x} ${CHEST_POS.y})`}>
        <g className="map-chest" role={interactive ? 'button' : undefined} tabIndex={interactive && onChest ? tab : undefined}
          aria-label={interactive && onChest ? '보물상자: 교환할 수 있는 리워드 미리보기' : undefined} aria-hidden={interactive && onChest ? undefined : true}
          onClick={onChest} onKeyDown={e => { if (onChest && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); onChest(); } }}>
          <g filter="url(#f-cutout)">
            <path d="M-78 30c-6-26 30-40 78-38 44-2 82 12 76 36 6 22-40 30-80 28-40 2-80-6-74-26z" fill={C.butter} {...ink(3)} />
          </g>
          <path d="M44 18l14 14M58 18L44 32" stroke={C.coral} strokeWidth="5" strokeLinecap="round" />
          <g transform="translate(-52 -64) scale(.52)"><Chest size={200} /></g>
          <rect className="map-focus" x="-82" y="-70" width="164" height="110" rx="30" fill="none" />
        </g>
      </g>

      {showMascot && (
        <g className="map-mascot" transform={`translate(${MASCOT_REST.x} ${MASCOT_REST.y})`}>
          <g className="map-mascot-inner" role={onMascot ? 'img' : undefined} aria-label={onMascot ? '탐험가 STAMPY' : undefined} aria-hidden={onMascot ? undefined : true}
            onPointerEnter={onMascot} onClick={onMascot}>
            <g transform="translate(-34 -80) scale(.55)"><Mascot pose="flag" size={124} /></g>
          </g>
        </g>
      )}
    </svg>
  );
}
