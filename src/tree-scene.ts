// Drawing of the review tree: geometry, SVG markup and the fruit faces.
// Everything is authored in one coordinate system (VB) so the animation and the
// HTML hit targets can share positions.

import type { Face, ReviewType } from './review-data';

export const VB = { x: 80, y: 40, w: 840, h: 880 };

type P = [number, number];
export interface Slot { x: number; y: number; r: number }

// Hand-placed like a bunch of grapes: four loose rows, never perfectly aligned.
export const SLOTS: Slot[] = [
  { x: 446, y: 172, r: 47 }, { x: 556, y: 165, r: 50 },
  { x: 282, y: 282, r: 46 }, { x: 390, y: 262, r: 52 }, { x: 500, y: 266, r: 47 }, { x: 612, y: 258, r: 56 }, { x: 730, y: 278, r: 47 },
  { x: 222, y: 384, r: 45 }, { x: 334, y: 366, r: 50 }, { x: 446, y: 360, r: 48 }, { x: 556, y: 368, r: 52 }, { x: 668, y: 362, r: 49 }, { x: 780, y: 386, r: 44 },
  { x: 288, y: 470, r: 47 }, { x: 396, y: 462, r: 50 }, { x: 504, y: 462, r: 46 }, { x: 614, y: 468, r: 50 }, { x: 718, y: 474, r: 45 },
];
export const FEATURED_SLOT = 5;

interface Limb { id: string; pts: [P, P, P, P]; w: [number, number]; at: number; dur: number }

// Limbs grow in this order; `at`/`dur` are seconds on the intro timeline.
export const LIMBS: Limb[] = [
  { id: 'root-l', pts: [[478, 884], [452, 893], [420, 897], [392, 899]], w: [20, 3], at: .32, dur: .45 },
  { id: 'root-r', pts: [[522, 882], [556, 892], [590, 896], [618, 899]], w: [20, 3], at: .36, dur: .45 },
  { id: 'trunk', pts: [[500, 900], [508, 770], [480, 660], [498, 548]], w: [76, 44], at: .22, dur: .62 },
  { id: 'arm-l', pts: [[494, 586], [444, 528], [362, 506], [300, 436]], w: [32, 12], at: .6, dur: .55 },
  { id: 'arm-r', pts: [[504, 580], [560, 524], [642, 502], [706, 432]], w: [32, 12], at: .64, dur: .55 },
  { id: 'leader', pts: [[498, 560], [492, 470], [514, 380], [500, 222]], w: [36, 10], at: .8, dur: .58 },
  { id: 'twig-l1', pts: [[376, 508], [302, 486], [246, 446], [214, 398]], w: [14, 5], at: .92, dur: .45 },
  { id: 'twig-l2', pts: [[322, 458], [300, 394], [318, 326], [352, 262]], w: [14, 5], at: .98, dur: .45 },
  { id: 'twig-r1', pts: [[628, 506], [700, 484], [760, 444], [786, 396]], w: [14, 5], at: .95, dur: .45 },
  { id: 'twig-r2', pts: [[684, 456], [704, 392], [684, 324], [652, 262]], w: [14, 5], at: 1.0, dur: .45 },
  { id: 'twig-t1', pts: [[503, 392], [462, 352], [432, 300], [424, 190]], w: [13, 5], at: 1.08, dur: .4 },
  { id: 'twig-t2', pts: [[502, 364], [546, 330], [576, 290], [586, 186]], w: [13, 5], at: 1.12, dur: .4 },
];

// Soft canopy mass behind the fruit. [x, y, r]
export const PUFFS: [number, number, number][] = [
  [500, 380, 150], [500, 250, 150], [345, 300, 135], [655, 296, 140], [390, 432, 126], [610, 434, 126],
  [255, 396, 106], [745, 396, 106], [468, 158, 96], [562, 152, 96],
];

// Leaves around the canopy edge and a few tucked between fruit. [x, y, angle, scale, tone]
export const LEAVES: [number, number, number, number, number][] = [
  [196, 336, -158, .95, 0], [176, 432, 170, .86, 1], [238, 252, -132, .86, 2], [314, 182, -114, .95, 0],
  [416, 114, -98, .78, 1], [604, 106, -76, .88, 2], [692, 176, -56, .95, 0], [774, 254, -38, .84, 1],
  [826, 356, -12, .95, 2], [812, 452, 16, .86, 0], [272, 520, 148, .76, 2], [734, 524, 34, .78, 1],
  [452, 424, -64, .52, 0], [560, 420, -116, .5, 2], [338, 418, -96, .46, 1], [668, 414, -84, .48, 0],
  [480, 702, -158, .62, 1], [520, 648, -24, .56, 0],
];

const LEAF_TONES = [['#4f956b', '#3d7d57'], ['#7db58e', '#5e9a72'], ['#3b7a55', '#2f6546']];

function bez(p: [P, P, P, P], t: number): P {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [a * p[0][0] + b * p[1][0] + c * p[2][0] + d * p[3][0], a * p[0][1] + b * p[1][1] + c * p[2][1] + d * p[3][1]];
}

function bezTangent(p: [P, P, P, P], t: number): P {
  const u = 1 - t;
  const x = 3 * u * u * (p[1][0] - p[0][0]) + 6 * u * t * (p[2][0] - p[1][0]) + 3 * t * t * (p[3][0] - p[2][0]);
  const y = 3 * u * u * (p[1][1] - p[0][1]) + 6 * u * t * (p[2][1] - p[1][1]) + 3 * t * t * (p[3][1] - p[2][1]);
  const len = Math.hypot(x, y) || 1;
  return [x / len, y / len];
}

const f = (n: number) => Math.round(n * 10) / 10;

/** A tapered limb outline around a cubic centreline, offset sideways for highlights. */
function taper(p: [P, P, P, P], w0: number, w1: number, offset = 0, scale = 1) {
  const left: P[] = [], right: P[] = [];
  const steps = 26;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const [x, y] = bez(p, t);
    const [tx, ty] = bezTangent(p, t);
    const nx = -ty, ny = tx;
    // Ease the taper so limbs keep their weight before thinning out.
    const w = (w0 + (w1 - w0) * Math.pow(t, .8)) * scale / 2;
    const o = offset * (w0 + (w1 - w0) * t);
    left.push([x + nx * (w + o), y + ny * (w + o)]);
    right.push([x - nx * (w - o), y - ny * (w - o)]);
  }
  const tip = right[right.length - 1];
  const tipW = Math.max(w1 * scale / 2, 1);
  return 'M' + left.map(q => f(q[0]) + ' ' + f(q[1])).join('L')
    + 'A' + f(tipW) + ' ' + f(tipW) + ' 0 0 1 ' + f(tip[0]) + ' ' + f(tip[1])
    + 'L' + right.reverse().slice(1).map(q => f(q[0]) + ' ' + f(q[1])).join('L') + 'Z';
}

function centreline(p: [P, P, P, P]) {
  return `M${p[0]}C${p[1]} ${p[2]} ${p[3]}`;
}

const INK = '#2a1840';

/** Face drawn for a radius-50 fruit, centred on the fruit. */
const FACES: Record<Face, { eyes: string; mouth: string }> = {
  smile: {
    eyes: dotEyes(4.4),
    mouth: `<path d="M-9 9Q0 18 9 9" fill="none" stroke="${INK}" stroke-width="3.4" stroke-linecap="round"/>`,
  },
  joy: {
    eyes: `<path d="M-20 0Q-14 -9 -8 0M8 0Q14 -9 20 0" fill="none" stroke="${INK}" stroke-width="3.6" stroke-linecap="round"/>`,
    mouth: `<path d="M-10 7Q0 24 10 7Z" fill="${INK}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><path d="M-5 14.5Q0 19.5 5 14.5Q0 11.5 -5 14.5Z" fill="#ff8fb4"/>`,
  },
  wink: {
    eyes: `<circle cx="-13" cy="-2" r="4.4" fill="${INK}"/><circle cx="-11.6" cy="-3.6" r="1.4" fill="#fff"/><path d="M8 -1Q14 -8 20 -1" fill="none" stroke="${INK}" stroke-width="3.6" stroke-linecap="round"/>`,
    mouth: `<path d="M-8 9Q2 18 11 7" fill="none" stroke="${INK}" stroke-width="3.4" stroke-linecap="round"/>`,
  },
  calm: {
    eyes: `<path d="M-19 -3Q-13 3 -7 -3M7 -3Q13 3 19 -3" fill="none" stroke="${INK}" stroke-width="3.4" stroke-linecap="round"/>`,
    mouth: `<path d="M-5 10Q0 14 5 10" fill="none" stroke="${INK}" stroke-width="3.2" stroke-linecap="round"/>`,
  },
  wow: {
    eyes: dotEyes(5.2),
    mouth: `<ellipse cx="0" cy="12" rx="4.2" ry="5.2" fill="${INK}"/>`,
  },
  cheeky: {
    eyes: dotEyes(4.2),
    mouth: `<path d="M-9 8Q0 17 9 8" fill="none" stroke="${INK}" stroke-width="3.4" stroke-linecap="round"/><path d="M2 11.5Q4 18 8 16Q9 12 7 10Z" fill="#ff8fb4"/>`,
  },
  sparkle: {
    eyes: `<circle cx="-13" cy="-2" r="6" fill="${INK}"/><circle cx="13" cy="-2" r="6" fill="${INK}"/><circle cx="-11" cy="-4.4" r="2" fill="#fff"/><circle cx="15" cy="-4.4" r="2" fill="#fff"/><circle cx="-14.6" cy="0" r=".9" fill="#fff"/><circle cx="11.4" cy="0" r=".9" fill="#fff"/>`,
    mouth: `<path d="M-6 11Q0 16 6 11" fill="none" stroke="${INK}" stroke-width="3.2" stroke-linecap="round"/>`,
  },
};

function dotEyes(r: number) {
  return `<circle cx="-13" cy="-2" r="${r}" fill="${INK}"/><circle cx="13" cy="-2" r="${r}" fill="${INK}"/><circle cx="${-13 + r * .35}" cy="${-2 - r * .4}" r="${f(r * .34)}" fill="#fff"/><circle cx="${13 + r * .35}" cy="${-2 - r * .4}" r="${f(r * .34)}" fill="#fff"/>`;
}

export const FACE_CYCLE: Face[] = ['smile', 'calm', 'wink', 'sparkle', 'cheeky', 'wow', 'smile', 'joy'];

const BERRY_STOPS: Record<ReviewType, string[]> = {
  visit: ['#d9c1f4', '#a67fd6', '#7950a4', '#4d2a73'],
  delivery: ['#ecc3ea', '#b77cc8', '#8a4f98', '#58275f'],
  editorial: ['#cfc8f6', '#9084d9', '#6550a8', '#3a2a73'],
};

function berry(i: number, s: Slot, type: ReviewType, face: Face) {
  const r = s.r;
  // Stems lean towards the trunk so the bunch reads as hanging from it.
  const lean = s.x < 500 ? 1 : -1;
  const stem = `M0 ${f(-r * .9)}q${f(lean * r * .06)} ${f(-r * .24)} ${f(lean * r * .2)} ${f(-r * .36)}`;
  const stemLeaf = i % 3 === 1
    ? `<path class="berry-leaf" d="M${f(lean * r * .2)} ${f(-r * 1.24)}c${f(-lean * r * .1)} ${f(-r * .3)} ${f(-lean * r * .52)} ${f(-r * .34)} ${f(-lean * r * .62)} ${f(-r * .18)}c${f(lean * r * .18)} ${f(r * .2)} ${f(lean * r * .5)} ${f(r * .22)} ${f(lean * r * .62)} ${f(r * .18)}Z" fill="#5f9e72"/>`
    : '';
  const ff = FACES[face];
  return `<g class="berry" data-i="${i}" data-type="${type}" transform="translate(${s.x} ${s.y})">
<g class="berry-pop"><g class="berry-swing">
<path class="berry-stem" d="${stem}" fill="none" stroke="#5c7a4c" stroke-width="${f(r * .09)}" stroke-linecap="round"/>${stemLeaf}
<g class="berry-hover">
<circle class="berry-halo" r="${f(r * 1.22)}" fill="url(#rt-halo)"/>
<circle r="${r}" cx="${f(r * .07)}" cy="${f(r * .13)}" fill="#2e1846" opacity=".2"/>
<circle class="berry-body" r="${r}" fill="url(#rt-berry-${type})"/>
<path d="M${f(-r * .58)} ${f(r * .6)}A${f(r * .84)} ${f(r * .84)} 0 0 0 ${f(r * .8)} ${f(r * .16)}" fill="none" stroke="#d6b9f5" stroke-opacity=".5" stroke-width="${f(r * .07)}" stroke-linecap="round"/>
<g clip-path="url(#rt-clip-${i})"><rect class="berry-gleam" x="${f(-r * .2)}" y="${f(-r * 1.6)}" width="${f(r * .32)}" height="${f(r * 3.2)}" fill="#fff" opacity=".55" transform="translate(${f(-r * 2)} 0) rotate(24)"/></g>
<ellipse class="berry-hl" cx="${f(-r * .36)}" cy="${f(-r * .42)}" rx="${f(r * .25)}" ry="${f(r * .14)}" transform="rotate(-34 ${f(-r * .36)} ${f(-r * .42)})" fill="#fff" opacity=".78"/>
<circle class="berry-hl" cx="${f(-r * .06)}" cy="${f(-r * .62)}" r="${f(r * .065)}" fill="#fff" opacity=".8"/>
<g transform="translate(0 ${f(r * .1)}) scale(${f(r / 50 * 100) / 100})"><g class="berry-face">
<ellipse cx="-24" cy="9" rx="7" ry="4" fill="#ff9cc4" opacity=".5"/><ellipse cx="24" cy="9" rx="7" ry="4" fill="#ff9cc4" opacity=".5"/>
<g class="berry-eyes">${ff.eyes}</g><g class="berry-mouth">${ff.mouth}</g>
</g></g>
<circle class="berry-dim" r="${r + .5}"/>
</g></g></g></g>`;
}

export interface Fruit { slot: Slot; type: ReviewType; face: Face }

export function treeSVG(fruits: Fruit[]) {
  const grads = (Object.keys(BERRY_STOPS) as ReviewType[]).map(type => {
    const c = BERRY_STOPS[type];
    return `<radialGradient id="rt-berry-${type}" cx=".4" cy=".36" fx=".34" fy=".28" r=".7"><stop offset="0" stop-color="${c[0]}"/><stop offset=".3" stop-color="${c[1]}"/><stop offset=".72" stop-color="${c[2]}"/><stop offset="1" stop-color="${c[3]}"/></radialGradient>`;
  }).join('');
  const clips = fruits.map((fr, i) => `<clipPath id="rt-clip-${i}"><circle r="${fr.slot.r}"/></clipPath>`).join('');
  const masks = LIMBS.map(l => `<path class="grow" data-limb="${l.id}" d="${centreline(l.pts)}" pathLength="1" stroke-dasharray="1 1" fill="none" stroke="#fff" stroke-width="${l.w[0] + 18}"/>`).join('');
  const wood = LIMBS.map(l => `<path d="${taper(l.pts, l.w[0], l.w[1])}"/>`).join('');
  const woodShade = LIMBS.map(l => `<path d="${taper(l.pts, l.w[0], l.w[1], .2, .5)}"/>`).join('');
  const woodLight = LIMBS.filter(l => l.w[0] > 13).map(l => `<path d="${taper(l.pts, l.w[0], l.w[1], -.24, .28)}"/>`).join('');
  const puffs = PUFFS.map(([x, y, r]) => `<circle class="puff" cx="${x}" cy="${y}" r="${r}"/>`).join('');
  const puffShadow = PUFFS.map(([x, y, r]) => `<circle cx="${x}" cy="${y + 16}" r="${r}"/>`).join('');
  const leaves = LEAVES.map(([x, y, a, s, tone]) => {
    const [c, v] = LEAF_TONES[tone];
    return `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})"><g class="leaf"><path d="M0 0C14 -20 52 -26 76 0C52 24 14 20 0 0Z" fill="${c}"/><path d="M4 0C26 -2 48 -1 66 1" fill="none" stroke="${v}" stroke-width="3" stroke-linecap="round"/><path d="M20 -12C26 -9 30 -10 36 -16" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="3" stroke-linecap="round"/></g></g>`;
  }).join('');
  const tufts = [[408, 892, -18], [436, 886, 12], [574, 886, -8], [602, 892, 20], [356, 899, 4], [648, 899, -6]]
    .map(([x, y, a]) => `<path d="M0 0C-3 -10 -1 -20 4 -26C5 -16 4 -8 3 0Z" fill="#7db58e" transform="translate(${x} ${y}) rotate(${a})"/>`).join('');

  return `<defs>${grads}
<radialGradient id="rt-puff" cx=".38" cy=".3" r=".75"><stop offset="0" stop-color="#eef6ea"/><stop offset=".62" stop-color="#d7eacf"/><stop offset="1" stop-color="#c4dfbd"/></radialGradient>
<radialGradient id="rt-halo"><stop offset=".6" stop-color="#e9dcff" stop-opacity=".9"/><stop offset="1" stop-color="#e9dcff" stop-opacity="0"/></radialGradient>
<linearGradient id="rt-wood" x1="0" x2="1"><stop offset="0" stop-color="#9a7a57"/><stop offset="1" stop-color="#7a5d42"/></linearGradient>
<mask id="rt-grow" maskUnits="userSpaceOnUse" x="${VB.x}" y="${VB.y}" width="${VB.w}" height="${VB.h}">${masks}</mask>
${clips}</defs>
<g class="ground"><ellipse cx="500" cy="900" rx="232" ry="20" fill="#e6f0de"/><ellipse class="ground-mound" cx="500" cy="896" rx="150" ry="14" fill="#cfe3c6"/>${tufts}</g>
<g class="canopy"><g class="canopy-shadow" fill="#c2dcbb">${puffShadow}</g><g fill="url(#rt-puff)">${puffs}</g></g>
<g class="wood" mask="url(#rt-grow)"><g fill="url(#rt-wood)">${wood}</g><g fill="#5f462f" opacity=".26">${woodShade}</g><g fill="#d9bc94" opacity=".4">${woodLight}</g><g fill="none" stroke="#6b4f36" stroke-opacity=".35" stroke-width="3" stroke-linecap="round"><path d="M486 820c6-14 4-30-2-42"/><path d="M512 740c-5-12-4-24 2-34"/><path d="M490 640c4-10 4-20 0-28"/></g></g>
<g class="bud"><path d="M0 0C-6 -10 -20 -14 -26 -8C-18 -2 -8 -1 0 0Z" fill="#7db58e"/><path d="M0 0C6 -12 20 -16 26 -10C18 -3 8 -1 0 0Z" fill="#4f956b"/></g>
<g class="leaves">${leaves}</g>
<g class="fruits">${fruits.map((fr, i) => berry(i, fr.slot, fr.type, fr.face)).join('')}</g>`;
}

/** The trunk + leader path used to carry the growing bud. */
export function budRoute(): [P, P, P, P][] {
  const trunk = LIMBS.find(l => l.id === 'trunk')!.pts;
  const leader = LIMBS.find(l => l.id === 'leader')!.pts;
  return [trunk, leader];
}

export function pointOn(p: [P, P, P, P], t: number) {
  const [x, y] = bez(p, t);
  const [tx, ty] = bezTangent(p, t);
  return { x, y, angle: Math.atan2(ty, tx) * 180 / Math.PI };
}
