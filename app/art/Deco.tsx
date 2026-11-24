import { C, ink } from './palette';

export const sparklePath = 'M0 -10C1.4 -2.6 2.6 -1.4 10 0C2.6 1.4 1.4 2.6 0 10C-1.4 2.6 -2.6 1.4 -10 0C-2.6 -1.4 -1.4 -2.6 0 -10Z';
export const starPath = 'M0 -12c1.6 0 2.6 1 3.2 2.6l2.4 5 5.4.8c3 .4 4 4 1.8 6l-4 3.8 1 5.4c.5 3-2.6 5.2-5.2 3.8L0 12.8l-4.8 2.6c-2.6 1.4-5.8-.8-5.2-3.8l1-5.4-4-3.8c-2.2-2-1.2-5.6 1.8-6l5.4-.8 2.4-5C-2.6-11-1.6-12 0-12z';

export function SvgSparkle({ x, y, s = 1, fill = C.butter, className = '' }: { x: number; y: number; s?: number; fill?: string; className?: string }) {
  return <path className={className} transform={`translate(${x} ${y}) scale(${s})`} d={sparklePath} fill={fill} {...ink(2 / s)} />;
}

export function SvgStar({ x, y, s = 1, fill = C.butter, className = '' }: { x: number; y: number; s?: number; fill?: string; className?: string }) {
  return <path className={className} transform={`translate(${x} ${y}) scale(${s})`} d={starPath} fill={fill} {...ink(2.4 / s)} />;
}

export function SvgCloud({ x, y, s = 1, className = '' }: { x: number; y: number; s?: number; className?: string }) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-36 10q-12 0-12-11t13-11q2-16 20-16 12 0 18 10 6-6 15-4 13 3 13 16 12 1 12 11T21 10z" fill="#fff" {...ink(2.6 / s)} />
      <path d="M-20 -6q4-6 10-6" fill="none" stroke={C.skyL} strokeWidth={3 / s} strokeLinecap="round" />
    </g>
  );
}

export function SvgFlag({ x, y, s = 1, color = C.coral, className = '' }: { x: number; y: number; s?: number; color?: string; className?: string }) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 0v-40" {...ink(3 / s)} />
      <path className="flag-cloth" d="M0-40c8-3 14 4 24 0v16c-10 4-16-3-24 0z" fill={color} {...ink(2.4 / s)} />
      <ellipse cx="0" cy="1" rx="5" ry="2" fill={C.ink} opacity=".2" />
    </g>
  );
}

/** Standalone small sparkle for HTML layouts. */
export function Sparkle({ size = 22, color = C.butter, className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg className={'deco-sparkle ' + className} viewBox="-12 -12 24 24" width={size} height={size} aria-hidden="true">
      <path d={sparklePath} fill={color} {...ink(1.8)} />
    </svg>
  );
}

export function Star({ size = 26, color = C.butter, className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg className={'deco-star ' + className} viewBox="-15 -15 30 30" width={size} height={size} aria-hidden="true">
      <path d={starPath} fill={color} {...ink(2)} />
    </svg>
  );
}

/** Round rubber-stamp imprint used on stamp cards. */
export function StampImprint({ size = 56, label = 'STAMPY', className = '', color = C.grape }: { size?: number; label?: string; className?: string; color?: string }) {
  const id = 'arc-' + label;
  return (
    <svg className={'stamp-imprint ' + className} viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <defs><path id={id} d="M20 50a30 30 0 0 1 60 0" /></defs>
      <g fill="none" stroke={color} strokeWidth="4.5" opacity=".92">
        <path d="M50 6c6 0 8 4 13 5s9-2 13 2 1 8 4 12 8 5 8 11-5 7-6 12 3 9 0 13-8 2-11 6-2 9-7 11-9-2-14-1-8 5-13 3-6-6-11-8-9 0-11-5 2-9 0-13-7-6-6-11 7-7 8-12-4-8 0-12 9 0 13-3 4-8 8-9" strokeLinejoin="round" />
        <circle cx="50" cy="50" r="24" strokeWidth="3" />
      </g>
      <text fontFamily="Fredoka, sans-serif" fontWeight="700" fontSize="11" letterSpacing="2" fill={color}>
        <textPath href={'#' + id} startOffset="50%" textAnchor="middle">{label}</textPath>
      </text>
      <path transform="translate(50 58) scale(1.2)" d={starPath} fill={color} />
    </svg>
  );
}

/** Rubber stamp tool that presses down in Motion E. */
export function StampTool({ size = 70, className = '' }: { size?: number; className?: string }) {
  return (
    <svg className={'stamp-tool ' + className} viewBox="0 0 80 100" width={size} height={size * 1.25} aria-hidden="true">
      <circle cx="40" cy="20" r="15" fill={C.butter} {...ink(3)} />
      <path d="M34 14q4-4 9-4" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <rect x="31" y="32" width="18" height="22" rx="5" fill={C.butterD} {...ink(3)} />
      <rect x="12" y="52" width="56" height="26" rx="9" fill={C.lav} {...ink(3)} />
      <rect x="10" y="76" width="60" height="12" rx="5" fill={C.grape} {...ink(3)} />
    </svg>
  );
}

/** Paper-cut treasure chest. The lid opens with .is-open. */
export function Chest({ size = 180, open = false, className = '' }: { size?: number; open?: boolean; className?: string }) {
  return (
    <svg className={`chest ${open ? 'is-open' : ''} ${className}`} viewBox="0 -24 200 194" width={size} height={size * .97} aria-hidden="true">
      <defs>
        <radialGradient id="chest-glow" cx=".5" cy=".6" r=".6"><stop offset="0" stopColor="#fff6c9" /><stop offset=".6" stopColor="#ffe39a" stopOpacity=".6" /><stop offset="1" stopColor="#ffe39a" stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="100" cy="160" rx="78" ry="8" fill={C.ink} opacity=".12" />
      <g className="chest-glow"><ellipse cx="100" cy="66" rx="92" ry="64" fill="url(#chest-glow)" />
        <SvgSparkle x={40} y={30} s={1.2} /><SvgSparkle x={160} y={24} s={1} fill={C.pink} /><SvgSparkle x={100} y={8} s={.9} fill={C.sky} />
      </g>
      <path className="chest-inside" d="M36 78q64-14 128 0v8H36z" fill={C.grapeD} {...ink(3)} />
      <g className="chest-body">
        <path d="M32 80h136v62q0 10-10 10H42q-10 0-10-10z" fill={C.peach} {...ink(3.4)} />
        <path d="M32 104h136" {...ink(3)} />
        <rect x="52" y="80" width="14" height="72" fill={C.butter} {...ink(3)} />
        <rect x="134" y="80" width="14" height="72" fill={C.butter} {...ink(3)} />
        <rect x="86" y="94" width="28" height="30" rx="7" fill={C.butter} {...ink(3)} />
        <path d="M100 104a4 4 0 0 1 2 7.4V116h-4v-4.6A4 4 0 0 1 100 104z" fill={C.ink} />
        <path d="M40 118v18" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".5" />
      </g>
      <g className="chest-lid">
        <path d="M28 80q0-46 72-46t72 46z" fill="#ffc0ad" {...ink(3.4)} />
        <path d="M52 78q0-38 7-42M134 78q0-38-7-42" fill="none" />
        <path d="M54 80V42q6-4 14-5v43zM132 80V42q-6-4-14-5v43z" fill={C.butter} {...ink(3)} />
        <path d="M44 62q8-16 22-20" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".6" />
      </g>
    </svg>
  );
}
