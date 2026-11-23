// Collectible sticker illustrations, drawn on a 100×100 grid with the shared ink outline.
// <Sticker> wraps them in the die-cut filter; locked stickers render as paper silhouettes.
import type { ReactNode } from 'react';
import { C, ink } from './palette';

const k = ink();
const k2 = ink(2.4);
const shine = { stroke: '#fff', strokeWidth: 3.4, strokeLinecap: 'round' as const, fill: 'none', opacity: .75 };
const face = (x: number, y: number, s = 1) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle cx="-6" cy="0" r="2.2" fill={C.ink} /><circle cx="6" cy="0" r="2.2" fill={C.ink} />
    <path d="M-3 4q3 3 6 0" fill="none" {...ink(1.8)} />
    <ellipse cx="-10" cy="4" rx="2.6" ry="1.6" fill={C.peachD} opacity=".55" /><ellipse cx="10" cy="4" rx="2.6" ry="1.6" fill={C.peachD} opacity=".55" />
  </g>
);
const sparkle = (x: number, y: number, s = 1, fill: string = C.butter) => (
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0 -8C1 -2 2 -1 8 0C2 1 1 2 0 8C-1 2 -2 1 -8 0C-2 -1 -1 -2 0 -8Z" fill={fill} {...ink(1.8)} />
);
/** Thick outlined stroke (handles, straps): ink under, colour on top. */
const tube = (d: string, color: string, w = 6) => (
  <g fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={d} stroke={C.ink} strokeWidth={w + 3.4} /><path d={d} stroke={color} strokeWidth={w} /></g>
);

export const STICKER_ART: Record<string, ReactNode> = {
  serum: <g>
    <rect x="30" y="44" width="40" height="46" rx="12" fill={C.mint} {...k} />
    <path d="M37 54v22" {...shine} />
    <rect x="40" y="62" width="22" height="14" rx="4" fill={C.ivory} {...k2} />
    <rect x="38" y="34" width="24" height="12" rx="3" fill={C.butter} {...k} />
    <path d="M42 34V22a8 8 0 0 1 16 0v12z" fill={C.grape} {...k} />
    <path d="M80 26c4 6 6 9 6 12a6 6 0 0 1-12 0c0-3 2-6 6-12z" fill={C.sky} {...k2} />
  </g>,
  mirror: <g>
    <ellipse cx="50" cy="80" rx="28" ry="12" fill={C.lav} {...k} />
    <ellipse cx="50" cy="78" rx="17" ry="6" fill={C.peach} {...k2} />
    <rect x="44" y="62" width="12" height="8" rx="3" fill={C.butter} {...k2} />
    <circle cx="50" cy="38" r="27" fill={C.pink} {...k} />
    <circle cx="50" cy="38" r="19" fill={C.skyL} {...k2} />
    <path d="M40 34l9-9M42 44l15-15" {...shine} />
    {sparkle(84, 18, .9)}
  </g>,
  perfume: <g>
    <rect x="26" y="42" width="48" height="46" rx="14" fill={C.lavL} {...k} />
    <path d="M30 62h40v10a12 12 0 0 1-12 12H42a12 12 0 0 1-12-12z" fill={C.lav} />
    <rect x="26" y="42" width="48" height="46" rx="14" fill="none" {...k} />
    <path d="M44 56c0-3 5-3 6 0c1-3 6-3 6 0c0 4-6 7-6 7s-6-3-6-7z" fill={C.pinkD} {...ink(1.6)} />
    <rect x="42" y="33" width="16" height="10" fill={C.ivory} {...k2} />
    <rect x="38" y="16" width="24" height="18" rx="6" fill={C.butter} {...k} />
    {tube('M62 24h10', C.peach, 3)}
    <circle cx="78" cy="24" r="6.5" fill={C.peach} {...k2} />
  </g>,
  lipstick: <g>
    <path d="M38 50V30q0-15 22-19v39z" fill={C.coral} {...k} />
    <path d="M44 46V32" {...shine} />
    <rect x="33" y="48" width="34" height="11" rx="3" fill={C.butter} {...k} />
    <rect x="33" y="57" width="34" height="33" rx="7" fill={C.grape} {...k} />
    <path d="M45 72c0-3 5-3 5 0c0-3 5-3 5 0c0 4-5 6-5 6s-5-2-5-6z" fill={C.pink} />
    {sparkle(80, 30, .8)}
  </g>,
  cup: <g>
    <ellipse cx="50" cy="84" rx="36" ry="8" fill={C.ivory} {...k} />
    {tube('M74 48c13 0 13 20 0 20', '#fff3e2', 4)}
    <path d="M22 42h52v18c0 16-10 22-26 22s-26-6-26-22z" fill="#fff3e2" {...k} />
    <path d="M23 62h50" stroke={C.peach} strokeWidth="6" />
    <path d="M22 42h52v18c0 16-10 22-26 22s-26-6-26-22z" fill="none" {...k} />
    <ellipse cx="48" cy="42" rx="26" ry="7" fill="#c98f62" {...k} />
    <path d="M44 41c0-2 4-2 4 0c0-2 4-2 4 0c0 3-4 4-4 4s-4-1-4-4z" fill="#fff" />
    {face(48, 70, .9)}
    <path d="M38 30c-3-4 3-6 0-11M52 30c-3-4 3-6 0-11" fill="none" {...ink(2)} opacity=".55" />
  </g>,
  strawberry: <g>
    <path d="M50 30c20-2 32 10 28 28C74 76 60 88 50 90 40 88 26 76 22 58c-4-18 8-30 28-28z" fill={C.coral} {...k} />
    {[[36, 48], [50, 44], [64, 48], [42, 62], [58, 62], [50, 76], [34, 68], [66, 68]].map(([x, y], i) =>
      <ellipse key={i} cx={x} cy={y} rx="1.8" ry="2.6" fill={C.butter} />)}
    <path d="M32 46c2-6 6-9 10-10" {...shine} />
    <path d="M50 34 38 22l12 4 6-11 2 12 13-3-10 10z" fill={C.mintD} {...k2} />
  </g>,
  cake: <g>
    <ellipse cx="50" cy="84" rx="38" ry="8" fill={C.ivory} {...k} />
    <rect x="22" y="50" width="56" height="32" rx="10" fill={C.butter} {...k} />
    <path d="M23 64h54" stroke="#fff" strokeWidth="6" />
    <rect x="22" y="50" width="56" height="32" rx="10" fill="none" {...k} />
    <path d="M22 56q0-12 12-12h32q12 0 12 12-4 6-8 0-4 6-10 0-4 6-10 0-6 6-10 0-4 6-10 0-4 6-6 0z" fill={C.pink} {...k} />
    <circle cx="50" cy="37" r="8" fill={C.coral} {...k2} />
    <path d="M50 29l-4-5m4 5 4-5" {...ink(2)} stroke={C.leaf} />
    {face(50, 70, .8)}
  </g>,
  noodle: <g>
    {tube('M58 46 86 14', C.peach, 3)}{tube('M64 48 92 22', C.peach, 3)}
    <path d="M14 50h72c0 22-14 36-36 36S14 72 14 50z" fill={C.sky} {...k} />
    {[26, 40, 54, 68].map(x => <circle key={x} cx={x + 2} cy="70" r="2.4" fill="#fff" />)}
    <ellipse cx="50" cy="50" rx="36" ry="9" fill="#fff3e2" {...k} />
    <path d="M26 50q4-4 8 0t8 0 8 0 8 0 8 0" fill="none" stroke={C.butterD} strokeWidth="2.6" strokeLinecap="round" />
    <ellipse cx="64" cy="49" rx="7" ry="4" fill="#fff" {...ink(1.8)} /><circle cx="64" cy="49" r="2.4" fill={C.butterD} />
  </g>,
  candle: <g>
    <path d="M50 12c8 10 8 18 0 20-8-2-8-10 0-20z" fill={C.butter} {...k2} />
    <path d="M50 22c3 4 3 7 0 8-3-1-3-4 0-8z" fill={C.coral} />
    <path d="M50 32v10" {...k2} />
    <path d="M30 22l-6-4M70 22l6-4M26 34h-7M74 34h7" {...ink(2)} opacity=".5" />
    <rect x="28" y="40" width="44" height="48" rx="12" fill={C.sky} {...k} />
    <ellipse cx="50" cy="44" rx="18" ry="4.5" fill={C.ivory} {...k2} />
    <rect x="28" y="58" width="44" height="15" fill={C.peach} {...k2} />
    <path d="M35 50v4" {...shine} />
    {sparkle(50, 65, .55, C.ivory)}
  </g>,
  plant: <g>
    <path d="M50 60C40 42 28 40 22 30c14-2 28 6 28 30z" fill={C.mintD} {...k2} />
    <path d="M50 60c2-24 12-36 24-40 0 16-10 30-24 40z" fill="#8fd0a5" {...k2} />
    <path d="M50 60c0-18-4-32 0-46 6 14 6 30 0 46z" fill={C.mint} {...k2} />
    <path d="M32 64h36l-5 24H37z" fill={C.peach} {...k} />
    <rect x="27" y="56" width="46" height="11" rx="4" fill="#ffc3b1" {...k} />
    {face(50, 76, .8)}
  </g>,
  notebook: <g>
    <rect x="26" y="14" width="50" height="72" rx="7" fill={C.butter} {...k} />
    <rect x="26" y="14" width="11" height="72" rx="5" fill={C.butterD} {...k2} />
    <path d="M64 14v72" stroke={C.peachD} strokeWidth="5" />
    <rect x="26" y="14" width="50" height="72" rx="7" fill="none" {...k} />
    <path d="M51 32l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill={C.lav} {...k2} />
    <path d="M44 86v11l4-3 4 3V86" fill={C.coral} {...k2} />
  </g>,
  vase: <g>
    <path d="M50 42c-2-12-8-18-14-24M50 42c4-12 10-16 16-22M50 42c0-12 1-20 2-28" fill="none" stroke={C.leaf} strokeWidth="3" strokeLinecap="round" />
    <circle cx="36" cy="18" r="8" fill={C.pink} {...k2} /><circle cx="36" cy="18" r="3" fill={C.butter} />
    <circle cx="66" cy="20" r="7" fill={C.butter} {...k2} /><circle cx="66" cy="20" r="2.6" fill={C.coral} />
    <circle cx="52" cy="12" r="6" fill={C.lav} {...k2} />
    <path d="M38 50c-9 9-9 30 2 38h20c11-8 11-29 2-38v-6H38z" fill={C.sky} {...k} />
    <rect x="35" y="40" width="30" height="7" rx="3.5" fill={C.skyL} {...k2} />
    <path d="M42 60c-2 6-2 14 1 19" {...shine} />
  </g>,
  chair: <g>
    <rect x="31" y="12" width="38" height="40" rx="15" fill={C.mint} {...k} />
    <path d="M42 30c0-3 4-3 4 0c0-3 4-3 4 0c0 4-4 6-4 6s-4-2-4-6z" transform="translate(4 0)" fill={C.pinkD} />
    <path d="M32 62l-4 28M68 62l4 28M42 64l-2 22M58 64l2 22" {...ink(4.2)} />
    <rect x="22" y="50" width="56" height="14" rx="7" fill="#9fd5b2" {...k} />
  </g>,
  lamp: <g>
    <path d="M30 26l-8-6M70 26l8-6" {...ink(2)} opacity=".5" />
    <rect x="46" y="44" width="8" height="36" fill={C.ivory} {...k2} />
    <ellipse cx="50" cy="84" rx="22" ry="7" fill={C.peach} {...k} />
    <path d="M28 48l10-34h24l10 34z" fill={C.butter} {...k} />
    {[[40, 28], [50, 36], [60, 26], [46, 20]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2" fill={C.peachD} />)}
    <path d="M36 56l-4 8M50 56v9M64 56l4 8" stroke={C.butterD} strokeWidth="3" strokeLinecap="round" />
  </g>,
  bag: <g>
    {tube('M36 42c0-24 28-24 28 0', C.peachD, 4)}
    <path d="M24 40h52q4 0 3 4l-5 38q-1 6-7 6H33q-6 0-7-6l-5-38q-1-4 3-4z" fill={C.peach} {...k} />
    <path d="M22 44q28 22 56 0" fill="#ff9a82" {...k} />
    <circle cx="50" cy="56" r="5.5" fill={C.butter} {...k2} />
    <path d="M30 66l2 12" {...shine} />
  </g>,
  shoe: <g>
    <path d="M12 72h74q4 0 4 6t-6 6H16q-6 0-6-6t2-6z" fill={C.ivory} {...k} />
    <path d="M14 72c0-16 10-24 22-26l12-6c6 12 18 16 38 22q4 2 2 10z" fill={C.lav} {...k} />
    <path d="M30 62c10 0 20 2 30 8" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M44 46l5 4M48 42l5 4M52 50l4 3" {...ink(2.4)} />
    <circle cx="74" cy="64" r="3" fill={C.pink} />
  </g>,
  ribbon: <g>
    <path d="M46 52 36 84l8-4 4 8 6-34z" fill={C.pinkD} {...k2} />
    <path d="M54 52l10 32-8-4-4 8-6-34z" fill={C.pinkD} {...k2} />
    <path d="M50 46C36 26 14 32 18 48c3 14 20 12 32 2z" fill={C.pink} {...k} />
    <path d="M50 46c14-20 36-14 32 2-3 14-20 12-32 2z" fill={C.pink} {...k} />
    <path d="M28 42q6-4 12 2M72 42q-6-4-12 2" {...ink(2)} opacity=".6" />
    <rect x="43" y="41" width="14" height="14" rx="5" fill={C.pinkD} {...k} />
  </g>,
  headphones: <g>
    {tube('M24 58c0-34 52-34 52 0', C.lav, 7)}
    <rect x="13" y="50" width="19" height="32" rx="8" fill={C.grape} {...k} />
    <rect x="68" y="50" width="19" height="32" rx="8" fill={C.grape} {...k} />
    <rect x="28" y="55" width="8" height="22" rx="4" fill={C.pink} {...k2} />
    <rect x="64" y="55" width="8" height="22" rx="4" fill={C.pink} {...k2} />
    <path d="M46 46v-12l10-2v12" fill="none" {...k2} /><circle cx="43" cy="47" r="3.5" fill={C.ink} /><circle cx="53" cy="45" r="3.5" fill={C.ink} />
  </g>,
  camera: <g>
    <rect x="26" y="22" width="22" height="14" rx="4" fill={C.skyD} {...k} />
    <rect x="12" y="32" width="76" height="52" rx="13" fill={C.sky} {...k} />
    <circle cx="52" cy="58" r="19" fill={C.ivory} {...k} />
    <circle cx="52" cy="58" r="11" fill={C.grape} {...k2} />
    <circle cx="48" cy="54" r="3.5" fill="#fff" />
    <rect x="70" y="38" width="11" height="8" rx="2.5" fill={C.butter} {...k2} />
    <circle cx="22" cy="44" r="3" fill={C.coral} />
  </g>,
  keyboard: <g>
    {tube('M50 30c0-10 10-8 10-16', C.ink2, 2)}
    <rect x="8" y="30" width="84" height="46" rx="11" fill={C.mint} {...k} />
    {[18, 30, 42, 54, 66, 78].map(x => <rect key={x} x={x - 4} y="38" width="10" height="9" rx="2.5" fill={C.ivory} {...ink(2)} />)}
    {[24, 36, 48, 60, 72].map(x => <rect key={x} x={x - 4} y="51" width="10" height="9" rx="2.5" fill={x === 48 ? C.butter : C.ivory} {...ink(2)} />)}
    <rect x="30" y="64" width="40" height="7" rx="3" fill={C.ivory} {...ink(2)} />
  </g>,
  letter: <g>
    <rect x="14" y="30" width="72" height="48" rx="7" fill={C.ivory} {...k} />
    <path d="M16 34l34 25 34-25" fill="none" {...k} />
    <circle cx="50" cy="58" r="8" fill={C.coral} {...k2} />
    <path d="M47 57c0-2 3-2 3 0 0-2 3-2 3 0 0 3-3 4-3 4s-3-1-3-4z" fill="#fff" />
    {tube('M70 18 86 34', C.butter, 5)}<path d="M84 36l6 4-2-7z" fill={C.ink} />
  </g>,
  medal: <g>
    <path d="M32 8h14l10 32H42z" fill={C.sky} {...k} />
    <path d="M68 8H54L44 40h14z" fill={C.pink} {...k} />
    <circle cx="50" cy="62" r="26" fill={C.butter} {...k} />
    <circle cx="50" cy="62" r="17" fill={C.butterD} {...k2} />
    <text x="50" y="71" textAnchor="middle" fontFamily="Fredoka, Jua, sans-serif" fontWeight="700" fontSize="24" fill={C.ink}>1</text>
  </g>,
  compass: <g>
    <circle cx="50" cy="52" r="36" fill={C.ivory} {...k} />
    <circle cx="50" cy="52" r="27" fill="none" {...ink(2)} strokeDasharray="2 6" />
    <path d="M50 22l9 30H41z" fill={C.coral} {...k2} />
    <path d="M50 82l-9-30h18z" fill={C.sky} {...k2} />
    <circle cx="50" cy="52" r="5" fill={C.butter} {...k2} />
    <circle cx="50" cy="12" r="6" fill={C.butter} {...k2} />
  </g>,
  star: <g>
    <path d="M50 10c3 0 5 2 6 5l7 15 17 3c6 1 8 8 3 12L71 57l3 17c1 6-6 10-11 7L50 73l-14 8c-5 3-12-1-11-7l3-17-12-12c-5-4-3-11 3-12l17-3 7-15c1-3 3-5 6-5z" fill={C.butter} {...k} />
    {face(50, 50, 1.1)}
    {sparkle(84, 16, .7, C.pink)}
  </g>,
};

interface StickerProps {
  art: string;
  size?: number;
  locked?: boolean;
  tilt?: number;
  className?: string;
  label?: string;
}

export function Sticker({ art, size = 72, locked, tilt = 0, className = '', label }: StickerProps) {
  return (
    <svg className={'sticker ' + (locked ? 'is-locked ' : '') + className} viewBox="-10 -10 120 120" width={size} height={size}
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
      style={tilt ? { rotate: tilt + 'deg' } : undefined}>
      <g filter={locked ? 'url(#f-silhouette)' : 'url(#f-sticker)'}>{STICKER_ART[art] ?? STICKER_ART.star}</g>
    </svg>
  );
}
