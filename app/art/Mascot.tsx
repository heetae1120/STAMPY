// STAMPY: a red rubber stamp. Knob, neck, block body and inked pad make the silhouette
// readable even at favicon size. Poses swap arms, eyes and one prop; motion lives in CSS.
import { C, ink } from './palette';

export type Pose = 'idle' | 'walk' | 'discover' | 'joy' | 'stamp' | 'chest' | 'flag' | 'sleep';

const k = ink(2.6);
const arm = (d: string) => (
  <g fill="none" strokeLinecap="round"><path d={d} stroke={C.ink} strokeWidth="7.6" /><path d={d} stroke={C.red} strokeWidth="3.4" /></g>
);

function Eyes({ pose }: { pose: Pose }) {
  if (pose === 'joy' || pose === 'stamp') return <path d="M49 73q3.5-4 7 0M68 73q3.5-4 7 0" fill="none" {...ink(2.4)} />;
  if (pose === 'sleep') return <path d="M49 72q3.5 3 7 0M68 72q3.5 3 7 0" fill="none" {...ink(2.4)} />;
  const r = pose === 'discover' || pose === 'chest' ? 3.8 : 3.3;
  return (
    <g className="mascot-eyes">
      <ellipse cx="52.5" cy="72" rx={r} ry={r + .5} fill={C.ink} /><ellipse cx="71.5" cy="72" rx={r} ry={r + .5} fill={C.ink} />
      <circle cx="53.6" cy="70.6" r="1.1" fill="#fff" /><circle cx="72.6" cy="70.6" r="1.1" fill="#fff" />
    </g>
  );
}

function Mouth({ pose }: { pose: Pose }) {
  if (pose === 'joy' || pose === 'chest') return <path d="M57.5 80q4.5 5 9 0z" fill={C.ink} {...ink(1.8)} />;
  if (pose === 'discover') return <ellipse cx="62" cy="81.5" rx="2.2" ry="2.6" fill={C.ink} />;
  if (pose === 'sleep') return <path d="M59.5 81q2.5 1.5 5 0" fill="none" {...ink(2)} />;
  return <path d="M58.5 80q3.5 3.2 7 0" fill="none" {...ink(2.2)} />;
}

function Arms({ pose }: { pose: Pose }) {
  switch (pose) {
    case 'joy': case 'stamp':
      return <g>{arm('M34 74Q26 66 24 56')}{arm('M90 74Q98 66 100 56')}</g>;
    case 'chest':
      return <g>{arm('M34 76Q24 76 19 70')}{arm('M90 76Q100 76 105 70')}</g>;
    case 'discover':
      return <g>
        <g className="mascot-arm-l">{arm('M34 76Q27 84 28 92')}</g>
        <g className="mascot-arm-r">{arm('M90 74Q98 66 100 56')}
          <path d="M101 52l-2.5 8" {...ink(4)} />
          <circle cx="104" cy="43" r="9" fill={C.skyL} {...k} /><path d="M99 41q2.5-4 6.5-3.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        </g>
      </g>;
    case 'flag':
      return <g>
        <g className="mascot-arm-l">{arm('M34 76Q27 84 28 92')}</g>
        <path d="M99 24v64" {...ink(2.8)} />
        <path className="mascot-flag" d="M99 24c7-2 12 3 20 0v15c-8 3-13-2-20 0z" fill={C.butter} {...ink(2.2)} />
        {arm('M90 76Q96 70 99 62')}
      </g>;
    default:
      return <g><g className="mascot-arm-l">{arm('M34 76Q27 84 28 92')}</g><g className="mascot-arm-r">{arm('M90 76Q97 84 96 92')}</g></g>;
  }
}

export function Mascot({ pose = 'idle', size = 120, className = '', label }: { pose?: Pose; size?: number; className?: string; label?: string }) {
  const happy = pose === 'joy' || pose === 'chest' || pose === 'stamp';
  return (
    <svg className={`mascot mascot--${pose} ${className}`} viewBox="0 0 124 150" width={size} height={size * 150 / 124}
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <ellipse className="mascot-shadow" cx="62" cy="142" rx="28" ry="4" fill={C.ink} opacity=".1" />
      {pose === 'stamp' && <g className="mascot-mark"><rect x="34" y="136" width="56" height="8" rx="2" fill={C.red} opacity=".85" /></g>}
      <g className="mascot-body">
        <g className="mascot-legs">
          <g className="mascot-leg-l"><rect x="47" y="117" width="9" height="16" rx="4.5" fill={C.redD} {...k} /><ellipse cx="50" cy="134" rx="7" ry="3.6" fill={C.ink} /></g>
          <g className="mascot-leg-r"><rect x="68" y="117" width="9" height="16" rx="4.5" fill={C.redD} {...k} /><ellipse cx="74" cy="134" rx="7" ry="3.6" fill={C.ink} /></g>
        </g>
        {/* Inked pad */}
        <rect x="30" y="104" width="64" height="15" rx="4.5" fill={C.redD} {...k} />
        <path d="M36 109h52" stroke={C.redL} strokeWidth="1.6" strokeDasharray="3 4" strokeLinecap="round" opacity=".75" />
        {/* Block body */}
        <path d="M40 50h44q6 0 6.6 6l2.8 42q.4 6.5-6.4 6.5H37q-6.8 0-6.4-6.5l2.8-42Q34 50 40 50z" fill={C.red} {...k} />
        <path d="M38.5 58q-1.6 18-.8 36" fill="none" stroke={C.redH} strokeWidth="3.2" strokeLinecap="round" opacity=".55" />
        <Arms pose={pose} />
        {happy && <><ellipse cx="45" cy="80" rx="3.6" ry="2.2" fill={C.redH} opacity=".55" /><ellipse cx="79" cy="80" rx="3.6" ry="2.2" fill={C.redH} opacity=".55" /></>}
        <Eyes pose={pose} />
        <Mouth pose={pose} />
        {/* Neck and knob handle with a slim explorer band */}
        <rect x="53" y="37" width="18" height="15" rx="4" fill={C.redD} {...k} />
        <g className="mascot-hat">
          <ellipse cx="62" cy="25" rx="17" ry="14" fill={C.redL} {...k} />
          <path d="M45.4 29q16.6 6 33.2 0" fill="none" stroke={C.butterD} strokeWidth="3.4" />
          <ellipse cx="62" cy="25" rx="17" ry="14" fill="none" {...k} />
          <path d="M53 17q4-4 9-4.5" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" opacity=".85" />
        </g>
        {pose === 'sleep' && <text x="92" y="44" fontFamily="Pretendard, sans-serif" fontWeight="700" fontSize="14" fill={C.ink2}>z</text>}
      </g>
    </svg>
  );
}
