// STAMPY: a chubby rubber stamp explorer. The knob is its explorer hat, the purple pad
// is the stamping face. Poses swap arms, eyes and props; motion lives in CSS (.mascot--*).
import { C, ink } from './palette';

export type Pose = 'idle' | 'walk' | 'discover' | 'joy' | 'stamp' | 'chest' | 'flag' | 'sleep';

const k = ink(3);
const arm = (d: string) => (
  <g fill="none" strokeLinecap="round"><path d={d} stroke={C.ink} strokeWidth="10.5" /><path d={d} stroke={C.lav} strokeWidth="5.5" /></g>
);

function Eyes({ pose }: { pose: Pose }) {
  if (pose === 'joy' || pose === 'stamp') {
    return <path d="M43 72q5-7 10 0M67 72q5-7 10 0" fill="none" {...ink(3)} />;
  }
  if (pose === 'sleep') {
    return <path d="M43 71q5 4 10 0M67 71q5 4 10 0" fill="none" {...ink(3)} />;
  }
  const r = pose === 'discover' || pose === 'chest' ? 5.4 : 4.6;
  return (
    <g className="mascot-eyes">
      <ellipse cx="48" cy="71" rx={r} ry={r + .6} fill={C.ink} /><ellipse cx="72" cy="71" rx={r} ry={r + .6} fill={C.ink} />
      <circle cx="49.6" cy="68.8" r="1.8" fill="#fff" /><circle cx="73.6" cy="68.8" r="1.8" fill="#fff" />
      {pose === 'chest' && <><circle cx="46" cy="73" r="1" fill="#fff" /><circle cx="70" cy="73" r="1" fill="#fff" /></>}
    </g>
  );
}

function Mouth({ pose }: { pose: Pose }) {
  if (pose === 'joy' || pose === 'chest') {
    return <g><path d="M53 80q7 11 14 0z" fill={C.ink} {...ink(2.4)} /><path d="M56.5 84q3.5 3 7 0q-3.5-2-7 0z" fill={C.coral} /></g>;
  }
  if (pose === 'discover') return <ellipse cx="60" cy="83" rx="3.6" ry="4.2" fill={C.ink} />;
  if (pose === 'sleep') return <path d="M57 82q3 2 6 0" fill="none" {...ink(2.4)} />;
  return <path d="M54 80q6 6 12 0" fill="none" {...ink(2.8)} />;
}

function Arms({ pose }: { pose: Pose }) {
  switch (pose) {
    case 'joy': case 'stamp':
      return <g>{arm('M31 70Q20 60 17 46')}{arm('M89 70Q100 60 103 46')}</g>;
    case 'chest':
      return <g>{arm('M31 72Q18 72 12 64')}{arm('M89 72Q102 72 108 64')}</g>;
    case 'discover':
      return <g>
        <g className="mascot-arm-l">{arm('M31 72Q22 82 24 92')}</g>
        <g className="mascot-arm-r">{arm('M89 70Q101 62 104 50')}
          <path d="M104 46l-3 10" {...ink(5)} />
          <circle cx="107" cy="36" r="11" fill={C.skyL} {...k} /><path d="M101 33q3-5 8-4" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
        </g>
      </g>;
    case 'flag':
      return <g>
        <g className="mascot-arm-l">{arm('M31 72Q22 82 24 92')}</g>
        <path d="M100 20v62" {...ink(3.4)} />
        <path className="mascot-flag" d="M100 20c8-2 14 4 24 0v18c-10 4-16-2-24 0z" fill={C.coral} {...ink(2.6)} />
        {arm('M89 72Q97 66 100 58')}
      </g>;
    default:
      return <g><g className="mascot-arm-l">{arm('M31 72Q22 82 24 92')}</g><g className="mascot-arm-r">{arm('M89 72Q98 82 96 92')}</g></g>;
  }
}

export function Mascot({ pose = 'idle', size = 120, className = '', label }: { pose?: Pose; size?: number; className?: string; label?: string }) {
  return (
    <svg className={`mascot mascot--${pose} ${className}`} viewBox="0 0 124 150" width={size} height={size * 150 / 124}
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <ellipse className="mascot-shadow" cx="62" cy="142" rx="34" ry="5" fill={C.ink} opacity=".12" />
      <g className="mascot-body">
        <g className="mascot-legs">
          <g className="mascot-leg-l"><rect x="42" y="112" width="12" height="18" rx="6" fill={C.grapeD} {...k} /><ellipse cx="46" cy="132" rx="10" ry="5.6" fill={C.peach} {...k} /></g>
          <g className="mascot-leg-r"><rect x="68" y="112" width="12" height="18" rx="6" fill={C.grapeD} {...k} /><ellipse cx="76" cy="132" rx="10" ry="5.6" fill={C.peach} {...k} /></g>
        </g>
        {/* Stamp pad */}
        <rect x="22" y="100" width="80" height="17" rx="7.5" fill={C.grape} {...k} />
        <path d="M58 104l2 4 4.4.6-3.2 3 .8 4.4-4-2-4 2 .8-4.4-3.2-3 4.4-.6z" fill={C.lav} />
        {/* Body */}
        <path d="M33 46h58q6 0 6 7l3 44q0 8-8 8H32q-8 0-8-8l3-44q0-7 6-7z" fill={C.lav} {...k} />
        <path d="M33 54q-2 18 0 40" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" opacity=".45" />
        <Arms pose={pose} />
        {/* Satchel */}
        <path d="M36 50q-6 20-1 38" fill="none" stroke={C.peachD} strokeWidth="4" strokeLinecap="round" />
        <rect x="25" y="86" width="23" height="18" rx="6" fill={C.peach} {...k} />
        <path d="M25 92q11.5 7 23 0" fill="none" {...ink(2.4)} /><circle cx="36.5" cy="95" r="2.2" fill={C.butter} {...ink(1.6)} />
        {/* Face */}
        <ellipse cx="40" cy="81" rx="5.4" ry="3.4" fill={C.peachD} opacity=".55" />
        <ellipse cx="80" cy="81" rx="5.4" ry="3.4" fill={C.peachD} opacity=".55" />
        <Eyes pose={pose} />
        <Mouth pose={pose} />
        {/* Neck + explorer-hat knob */}
        <rect x="50" y="34" width="24" height="14" rx="5" fill={C.butterD} {...k} />
        <g className="mascot-hat">
          <path d="M34 34q0-26 28-26t28 26z" fill={C.butter} {...k} />
          <path d="M30 34h64q4 0 4 4t-4 4H30q-4 0-4-4t4-4z" fill={C.butter} {...k} />
          <path d="M37 30h50" stroke={C.mintD} strokeWidth="6" />
          <path d="M34 34q0-26 28-26t28 26" fill="none" {...k} />
          <path d="M46 16q5-5 12-6" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" opacity=".8" />
          <path d="M84 26q8-12 2-20 4 10-6 16z" fill={C.mintD} {...ink(2)} />
        </g>
        {pose === 'sleep' && <text x="96" y="40" fontFamily="Fredoka, sans-serif" fontWeight="600" fontSize="16" fill={C.grape}>z</text>}
      </g>
      {pose === 'stamp' && <g className="mascot-mark"><path d="M30 146h64" stroke={C.grape} strokeWidth="3" strokeDasharray="1 7" strokeLinecap="round" /></g>}
    </svg>
  );
}
