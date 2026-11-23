// Category islands, each a little paper-cut world on a 240×180 grid.
import type { ReactNode } from 'react';
import type { CategoryId } from '../api/types';
import { C, ink } from './palette';
import { SvgSparkle, SvgStar } from './Deco';

const k = ink(3);
const k2 = ink(2.4);
const LAND = 'M30 100c-8-26 22-42 54-42 22-16 64-18 88-4 34-2 58 20 46 44 10 22-22 34-56 30-30 12-70 10-92 0-30 2-48-12-40-28z';

const tree = (x: number, y: number, r: number, color: string = C.mintD) => (
  <g key={`${x}-${y}`}>
    <rect x={x - 3} y={y} width="6" height={r * .9} rx="2" fill={C.wood} {...ink(2.2)} />
    <circle cx={x} cy={y - r * .3} r={r} fill={color} {...k} />
    <path d={`M${x - r * .5} ${y - r * .6}q${r * .3}-${r * .35} ${r * .6}-${r * .3}`} fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" opacity=".55" />
  </g>
);
const house = (x: number, y: number, w: number, h: number, wall: string, roof: string) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="3" fill={wall} {...k} />
    <path d={`M${x - 6} ${y + 2}L${x + w / 2} ${y - h * .62}L${x + w + 6} ${y + 2}z`} fill={roof} {...k} />
    <path d={`M${x + w / 2 - 6} ${y + h}v-14a6 6 0 0 1 12 0v14`} fill={C.butterD} {...k2} />
  </g>
);

const ART: Record<Exclude<CategoryId, 'etc'>, (top: string, side: string) => ReactNode> = {
  beauty: () => <g>
    {tree(186, 86, 13, C.pink)}
    <path d="M64 96V72q0-24 24-24t24 24v24z" fill={C.pink} {...k} />
    <path d="M80 96V82a8 8 0 0 1 16 0v14" fill={C.ivory} {...k2} />
    <path d="M82 64c0-3 6-3 6 0 0-3 6-3 6 0 0 5-6 8-6 8s-6-3-6-8z" fill={C.coral} {...ink(1.8)} />
    <rect x="128" y="54" width="28" height="42" rx="5" fill={C.grape} {...k} />
    <rect x="126" y="46" width="32" height="10" rx="3" fill={C.butter} {...k} />
    <path d="M131 46V28q0-14 22-18l3 1v35z" fill={C.coral} {...k} />
    <path d="M137 42V30" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7" />
    <SvgSparkle x={172} y={40} s={.9} /><SvgSparkle x={54} y={56} s={.7} fill={C.ivory} />
  </g>,
  food: () => <g>
    {tree(182, 84, 15)}
    {[176, 186, 190].map((x, i) => <circle key={x} cx={x} cy={[70, 76, 66][i]} r="3" fill={C.coral} {...ink(1.4)} />)}
    {house(58, 62, 62, 34, C.ivory, C.coral)}
    <rect x="58" y="62" width="62" height="11" fill={C.butter} {...k2} />
    {[64, 76, 88, 100, 112].map(x => <path key={x} d={`M${x} 62v11`} stroke={C.coral} strokeWidth="5" />)}
    <path d="M58 73q6 6 12 0t12 0 12 0 12 0 14 0" fill="none" {...k2} />
    <path d="M140 96V58" {...ink(3.4)} />
    <path d="M128 40h24v10c0 8-5 12-12 12s-12-4-12-12z" fill="#fff3e2" {...k} />
    <ellipse cx="140" cy="40" rx="12" ry="3.6" fill="#c98f62" {...k2} />
    <path d="M152 44c6 0 6 8 0 8" fill="none" {...k2} />
  </g>,
  living: () => <g>
    {tree(64, 80, 18)}
    {tree(150, 70, 22, '#8fd0a5')}
    {house(92, 70, 36, 26, C.peach, C.grape)}
    <rect x="100" y="76" width="9" height="9" rx="2" fill={C.butter} {...ink(2)} />
    {tree(190, 86, 14, C.mint)}
    <path d="M118 104q0-12 10-12t10 12z" fill={C.coral} {...k2} /><path d="M126 104v6h4v-6" fill={C.ivory} {...ink(2)} />
    <circle cx="124" cy="98" r="1.8" fill="#fff" /><circle cx="132" cy="97" r="1.6" fill="#fff" />
  </g>,
  home: () => <g>
    {tree(182, 80, 15, '#8fd0a5')}
    <rect x="132" y="28" width="10" height="20" fill={C.peach} {...k2} />
    {house(90, 56, 58, 40, C.ivory, C.lav)}
    <rect x="98" y="66" width="12" height="11" rx="2" fill={C.sky} {...ink(2)} /><rect x="128" y="66" width="12" height="11" rx="2" fill={C.sky} {...ink(2)} />
    {[54, 62, 70, 78].map(x => <path key={x} d={`M${x} 104v-16l3-4 3 4v16z`} fill={C.ivory} {...ink(2)} />)}
    <path d="M52 94h32" {...ink(2)} />
    {[[56, 80, C.pink], [72, 76, C.butter], [196, 100, C.coral], [62, 72, C.lav]].map(([x, y, c], i) =>
      <circle key={i} cx={x as number} cy={y as number} r="4.5" fill={c as string} {...ink(1.8)} />)}
  </g>,
  fashion: () => <g>
    <rect x="58" y="52" width="42" height="46" rx="3" fill={C.lav} {...k} />
    <path d="M54 54h50l-4 12q-5 5-10 0-5 5-10 0-5 5-10 0-5 5-10 0z" fill={C.pink} {...k2} />
    <path d="M70 98V80h18v18" fill={C.ivory} {...k2} />
    <rect x="106" y="40" width="48" height="58" rx="3" fill={C.ivory} {...k} />
    <path d="M102 44h56v12h-56z" fill="#fff" {...k2} />
    {[106, 120, 134, 148].map(x => <rect key={x} x={x} y="44" width="7" height="12" fill={C.pinkD} />)}
    <path d="M102 44h56v12h-56z" fill="none" {...k2} />
    <rect x="114" y="64" width="32" height="20" rx="3" fill={C.skyL} {...ink(2)} />
    <path d="M130 36c-8-10-20-6-18 2 2 6 12 4 18-2zm0 0c8-10 20-6 18 2-2 6-12 4-18-2z" fill={C.pinkD} {...ink(2)} />
    <circle cx="130" cy="36" r="4" fill={C.coral} {...ink(2)} />
    <path d="M178 98V62" {...k} /><circle cx="178" cy="58" r="6" fill={C.butter} {...k2} />
  </g>,
  tech: () => <g>
    <path d="M60 100h56" stroke={C.wood} strokeWidth="9" strokeLinecap="round" />
    <path d="M60 100h56" fill="none" {...ink(2)} />
    <path d="M30 116h50l-8 14H38z" fill={C.ivory} {...k} />
    <path d="M54 116V86" {...k2} /><path d="M56 88q16 10 0 26z" fill={C.butter} {...k2} />
    <path d="M140 98l6-54h20l6 54z" fill={C.ivory} {...k} />
    <path d="M143 74h26l-1 10h-24zM145 56h22l-1 9h-20z" fill={C.coral} {...ink(2)} />
    <rect x="144" y="30" width="24" height="16" rx="3" fill={C.butter} {...k} />
    <path d="M140 32l16-14 16 14z" fill={C.grape} {...k} />
    <path d="M130 30l-10-4M182 30l10-4M128 40h-10M184 40h10" stroke={C.butterD} strokeWidth="3" strokeLinecap="round" />
    <path d="M96 76a14 14 0 0 1 24-10" fill="none" {...k2} /><circle cx="108" cy="80" r="5" fill={C.sky} {...k2} />
  </g>,
};

export function IslandArt({ cat, top, side }: { cat: Exclude<CategoryId, 'etc'>; top: string; side: string }) {
  return (
    <g>
      <ellipse cx="124" cy="146" rx="104" ry="14" fill={C.skyD} opacity=".28" />
      <path d={LAND} transform="translate(0 14)" fill={side} {...k} />
      <path d={LAND} fill={top} {...k} />
      <path d="M48 108q30 10 70 8" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".45" />
      {ART[cat](top, side)}
    </g>
  );
}

export function Island({ cat, top, side, size = 220, className = '' }: { cat: CategoryId; top: string; side: string; size?: number; className?: string }) {
  return (
    <svg className={'island ' + className} viewBox="0 0 240 180" width={size} height={size * .75} aria-hidden="true">
      <g filter="url(#f-cutout)">
        {cat === 'etc'
          ? <g><ellipse cx="120" cy="140" rx="70" ry="12" fill={C.skyD} opacity=".25" /><path d={LAND} transform="translate(30 30) scale(.75)" fill={top} {...k} />
            <SvgStar x={120} y={70} s={2} /></g>
          : <IslandArt cat={cat} top={top} side={side} />}
      </g>
    </svg>
  );
}
