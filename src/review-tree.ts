import { gsap } from 'gsap';
import { reviews, reviewTypes, type Review, type ReviewType } from './review-data';
import { FACE_CYCLE, FEATURED_SLOT, LEAVES, LIMBS, SLOTS, VB, budRoute, pointOn, treeSVG, type Fruit } from './tree-scene';

const INTRO_KEY = 'stamping.tree.intro';

interface Item { review: Review; slot: (typeof SLOTS)[number]; el: SVGGElement; pop: SVGGElement; hit: HTMLButtonElement; index: number }

/** Featured review takes the featured slot; the rest fill the slots in order. */
function assign(): { review: Review; slotIndex: number }[] {
  const list = reviews.slice(0, SLOTS.length);
  const featured = list.find(r => r.featured) ?? list[0];
  const order = SLOTS.map((_, i) => i).filter(i => i !== FEATURED_SLOT);
  const out: { review: Review; slotIndex: number }[] = [];
  let k = 0;
  for (const review of list) {
    if (review === featured) out.push({ review, slotIndex: Math.min(FEATURED_SLOT, SLOTS.length - 1) });
    else out.push({ review, slotIndex: order[k++] });
  }
  return out.sort((a, b) => a.slotIndex - b.slotIndex);
}

function typeLabel(review: Review) {
  return reviewTypes[review.type].short + ' · ' + review.category;
}

function mount(hero: HTMLElement) {
  const stage = hero.querySelector<HTMLElement>('.rt-stage')!;
  const camera = stage.querySelector<HTMLElement>('.rt-camera')!;
  const svg = stage.querySelector<SVGSVGElement>('.rt-svg')!;
  const hits = stage.querySelector<HTMLElement>('.rt-hits')!;
  const bg = stage.querySelector<HTMLElement>('.rt-bg')!;
  const parallax = stage.querySelector<HTMLElement>('.rt-par')!;
  const scrim = hero.querySelector<HTMLElement>('.rt-scrim')!;
  const card = hero.querySelector<HTMLElement>('.rt-card')!;
  const cardSkin = card.querySelector<HTMLElement>('.rt-card-skin')!;
  const cardMedia = card.querySelector<HTMLElement>('.rt-card-media')!;
  const cardBody = card.querySelector<HTMLElement>('.rt-card-body')!;
  const closeBtn = card.querySelector<HTMLButtonElement>('.rt-card-close')!;
  const hint = hero.querySelector<HTMLElement>('.rt-hint')!;
  const legend = hero.querySelector<HTMLElement>('.rt-legend');
  const meta = [hint, legend].filter(Boolean) as HTMLElement[];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const narrow = matchMedia('(max-width: 760px)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');

  // ---- Build the tree -------------------------------------------------------
  const placed = assign();
  const fruits: Fruit[] = placed.map(({ review, slotIndex }, i) => ({
    slot: SLOTS[slotIndex], type: review.type,
    face: review.face ?? FACE_CYCLE[(i * 3 + 1) % FACE_CYCLE.length],
  }));
  svg.setAttribute('viewBox', `${VB.x} ${VB.y} ${VB.w} ${VB.h}`);
  svg.innerHTML = treeSVG(fruits);

  const items: Item[] = placed.map(({ review, slotIndex }, index) => {
    const slot = SLOTS[slotIndex];
    const el = svg.querySelector<SVGGElement>(`.berry[data-i="${index}"]`)!;
    const hit = document.createElement('button');
    hit.type = 'button';
    hit.className = 'rt-hit';
    hit.tabIndex = -1;
    hit.dataset.type = review.type;
    hit.style.left = (slot.x - VB.x) / VB.w * 100 + '%';
    hit.style.top = (slot.y - VB.y) / VB.h * 100 + '%';
    hit.style.width = slot.r * 2 / VB.w * 100 + '%';
    hit.setAttribute('aria-label', `${reviewTypes[review.type].label} ${review.category}${review.sample ? ' 예시' : ''} 후기: ${review.title}`);
    hit.setAttribute('aria-haspopup', 'dialog');
    const tip = document.createElement('span');
    tip.className = 'rt-tip';
    tip.setAttribute('aria-hidden', 'true');
    tip.textContent = typeLabel(review);
    hit.append(tip);
    hits.append(hit);
    return { review, slot, el, pop: el.querySelector<SVGGElement>('.berry-pop')!, hit, index };
  });
  gsap.set(items.map(it => it.pop), { transformOrigin: '50% 58%', smoothOrigin: false });
  const featured = items.find(it => it.slot === SLOTS[FEATURED_SLOT]) ?? items[0];
  let rover = featured;
  rover.hit.tabIndex = 0;

  hint.querySelector('.rt-hint-text')!.textContent = items.every(it => it.review.sample)
    ? '열매를 눌러 예시 후기를 만나보세요' : '열매를 눌러 후기를 만나보세요';

  // ---- Geometry helpers ---------------------------------------------------
  function local(it: Item) {
    const w = camera.offsetWidth, h = camera.offsetHeight;
    return { x: (it.slot.x - VB.x) / VB.w * w, y: (it.slot.y - VB.y) / VB.h * h, r: it.slot.r / VB.w * w };
  }
  /** Camera transform that scales around the fruit, so the fruit itself stays put. */
  function cameraTo(it: Item | null, scale: number) {
    if (!it) return { x: 0, y: 0, scale: 1 };
    const p = local(it);
    return { x: p.x * (1 - scale), y: p.y * (1 - scale), scale };
  }

  // ---- Card ------------------------------------------------------------------
  let open: Item | null = null;
  let mode: 'float' | 'sheet' = 'float';
  let cardTl: gsap.core.Timeline | null = null;

  function fill(it: Item) {
    const r = it.review;
    cardMedia.replaceChildren();
    if (r.thumbnail) {
      const img = new Image();
      img.alt = '';
      img.decoding = 'async';
      img.src = r.thumbnail;
      cardMedia.append(img);
    } else {
      cardMedia.append(cover(r));
    }
    card.dataset.type = r.type;
    card.querySelector('.rt-card-type')!.textContent = reviewTypes[r.type].label + ' · ' + r.category;
    card.querySelector<HTMLElement>('.rt-card-sample')!.hidden = !r.sample;
    card.querySelector('.rt-card-title')!.textContent = r.title;
    card.querySelector('.rt-card-excerpt')!.textContent = r.excerpt;
    const more = card.querySelector<HTMLDetailsElement>('.rt-card-more')!;
    more.open = false;
    more.hidden = !r.body;
    more.querySelector('p')!.textContent = r.body ?? '';
    const link = card.querySelector<HTMLAnchorElement>('.rt-card-link')!;
    const nolink = card.querySelector<HTMLElement>('.rt-card-nolink')!;
    link.hidden = !r.reviewUrl;
    nolink.hidden = !!r.reviewUrl;
    if (r.reviewUrl) link.href = r.reviewUrl;
    card.querySelector('.rt-card-count')!.textContent = String(it.index + 1).padStart(2, '0') + ' / ' + String(items.length).padStart(2, '0');
  }

  function cover(r: Review) {
    const el = document.createElement('div');
    el.className = 'rt-cover';
    el.innerHTML = `<svg viewBox="0 0 120 90" aria-hidden="true"><rect x="30" y="10" width="60" height="74" rx="8" fill="#fff"/><path d="M42 30h36M42 42h36M42 54h24" stroke="#c9b8e6" stroke-width="5" stroke-linecap="round"/><circle cx="84" cy="72" r="14" fill="#7950a4"/><path d="M78 72l4 4 8-9" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span>`;
    el.querySelector('span')!.textContent = r.category + ' 정보 글';
    return el;
  }

  function placeFloat(it: Item) {
    const p = local(it);
    const sw = stage.offsetWidth, sh = stage.offsetHeight;
    const w = card.offsetWidth, h = card.offsetHeight;
    const pad = Math.min(12, sw * .03);
    const left = gsap.utils.clamp(pad, Math.max(pad, sw - w - pad), p.x - w / 2);
    const top = gsap.utils.clamp(pad, Math.max(pad, sh - h - pad), p.y - h * .42);
    return { left, top, w, h, fx: p.x - left, fy: p.y - top, r: p.r };
  }

  function circleClip(g: { w: number; h: number; fx: number; fy: number }, r: number) {
    return `inset(${g.fy - r}px ${g.w - g.fx - r}px ${g.h - g.fy - r}px ${g.fx - r}px round ${r}px)`;
  }

  function contentParts() {
    return [cardMedia, ...Array.from(cardBody.children)].filter(el => !(el as HTMLElement).hidden);
  }

  /** Fruit → card. Returns a timeline so the intro can embed it. */
  function openTl(it: Item, as: 'float' | 'sheet', opts: { auto?: boolean } = {}) {
    mode = as;
    card.classList.toggle('is-sheet', as === 'sheet');
    card.classList.toggle('is-float', as === 'float');
    card.classList.toggle('is-auto', !!opts.auto);
    fill(it);
    gsap.set(card, { autoAlpha: 1, clipPath: 'none', y: 0, yPercent: 0 });
    if (as === 'sheet') gsap.set(card, { clearProps: 'left,top' });
    const tl = gsap.timeline();
    const zoom = as === 'sheet' ? 1.07 : 1.13;
    const parts = contentParts();
    if (reduced.matches) {
      tl.set(cardSkin, { opacity: 0 }).set(parts, { opacity: 1, y: 0 })
        .fromTo(card, { autoAlpha: 0 }, { autoAlpha: 1, duration: .15 });
      if (as === 'float') { const g = placeFloat(it); tl.set(card, { left: g.left, top: g.top }, 0); }
      else tl.set(scrim, { autoAlpha: 1 }, 0);
      if (as === 'float') tl.set(camera, { opacity: .4 }, 0).set(meta, { autoAlpha: 0 }, 0);
      return tl;
    }
    tl.to(it.pop, { scale: 1.14, duration: .26, ease: 'back.out(3)' }, 0)
      .to(it.el.querySelector('.berry-halo'), { opacity: 1, duration: .3 }, 0)
      .to(camera, { ...cameraTo(it, zoom), duration: .7, ease: 'power3.inOut' }, 0);
    if (as === 'float') {
      const g = placeFloat(it);
      const r = g.r * zoom * 1.14;
      gsap.set(card, { left: g.left, top: g.top, '--fx': g.fx + 'px', '--fy': g.fy + 'px' });
      tl.to(camera, { opacity: .4, duration: .6, ease: 'power1.inOut' }, .12)
        .to(meta, { autoAlpha: 0, duration: .3 }, 0)
        .fromTo(card, { clipPath: circleClip(g, r) }, { clipPath: `inset(0px 0px 0px 0px round 26px)`, duration: .72, ease: 'expo.inOut' }, .22)
        .fromTo(cardSkin, { opacity: 1 }, { opacity: 0, duration: .4, ease: 'power1.in' }, .5);
    } else {
      gsap.set(card, { '--fx': '50%', '--fy': '0px' });
      tl.to(scrim, { autoAlpha: 1, duration: .35 }, 0)
        .fromTo(card, { yPercent: 100 }, { yPercent: 0, duration: .62, ease: 'expo.out' }, .08)
        .fromTo(cardSkin, { opacity: 1 }, { opacity: 0, duration: .45, ease: 'power1.in' }, .18)
        .fromTo(cardMedia, { clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(75% at 50% 50%)', duration: .7, ease: 'power3.out', clearProps: 'clipPath' }, .28);
    }
    tl.fromTo(parts, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .45, stagger: .06, ease: 'power3.out' }, as === 'float' ? .58 : .34);
    return tl;
  }

  /** Card → fruit. */
  function closeTl(it: Item) {
    const tl = gsap.timeline();
    if (reduced.matches) {
      return tl.to(card, { autoAlpha: 0, duration: .12 }).set(scrim, { autoAlpha: 0 }, 0).set(meta, { autoAlpha: 1 }, 0)
        .set(camera, { x: 0, y: 0, scale: 1, opacity: 1 }).set(it.pop, { scale: 1 }).set(it.el.querySelector('.berry-halo'), { opacity: 0 });
    }
    const parts = contentParts();
    tl.to(parts, { opacity: 0, duration: .16, ease: 'power1.out' }, 0);
    if (mode === 'float') {
      const g = { w: card.offsetWidth, h: card.offsetHeight, fx: 0, fy: 0 };
      const p = local(it);
      g.fx = p.x - (gsap.getProperty(card, 'left') as number);
      g.fy = p.y - (gsap.getProperty(card, 'top') as number);
      const scale = gsap.getProperty(camera, 'scale') as number;
      tl.to(cardSkin, { opacity: 1, duration: .2 }, .06)
        .to(card, { clipPath: circleClip(g, p.r * scale * 1.14), duration: .5, ease: 'expo.inOut' }, .08)
        .to(camera, { opacity: 1, duration: .5 }, .2)
        .to(meta, { autoAlpha: 1, duration: .4 }, .55);
    } else {
      tl.to(card, { yPercent: 100, duration: .38, ease: 'power3.in' }, 0)
        .to(scrim, { autoAlpha: 0, duration: .3 }, .1);
    }
    tl.set(card, { autoAlpha: 0 })
      .to(camera, { x: 0, y: 0, scale: 1, duration: .7, ease: 'power3.inOut' }, mode === 'float' ? .38 : .1)
      .to(it.el.querySelector('.berry-halo'), { opacity: 0, duration: .4 }, .4)
      .to(it.pop, { scale: 1, duration: .7, ease: 'elastic.out(1.1,.45)' }, .5);
    return tl;
  }

  function show(it: Item) {
    finishIntro();
    stopAmbient();
    if (open === it) return;
    const as = narrow.matches ? 'sheet' : 'float';
    const prev = open;
    cardTl?.progress(1).kill();
    if (prev && as === mode && !reduced.matches) {
      cardTl = switchTl(prev, it);
    } else {
      if (prev) closeTl(prev).progress(1).kill();
      cardTl = openTl(it, as);
    }
    open = it;
    card.classList.remove('is-auto');
    card.setAttribute('aria-modal', 'true');
    items.forEach(x => x.hit.setAttribute('aria-expanded', String(x === it)));
    setRover(it);
    if (as === 'sheet') document.documentElement.classList.add('rt-lock');
    // Focus moves into the dialog; pointer users keep their place visually.
    requestAnimationFrame(() => closeBtn.focus({ preventScroll: true }));
  }

  /** Smoothly move an open card from one fruit to another. */
  function switchTl(from: Item, to: Item) {
    const parts = contentParts();
    const tl = gsap.timeline();
    tl.to(parts, { opacity: 0, y: -6, duration: .16, ease: 'power1.in' }, 0)
      .to(from.pop, { scale: 1, duration: .5, ease: 'power2.out' }, 0)
      .to(from.el.querySelector('.berry-halo'), { opacity: 0, duration: .3 }, 0)
      .to(to.pop, { scale: 1.14, duration: .3, ease: 'back.out(3)' }, .05)
      .to(to.el.querySelector('.berry-halo'), { opacity: 1, duration: .3 }, .05)
      .to(camera, { ...cameraTo(to, mode === 'sheet' ? 1.07 : 1.13), duration: .65, ease: 'power3.inOut' }, 0)
      .add(() => {
        fill(to);
        const fresh = contentParts();
        gsap.fromTo(fresh, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .4, stagger: .05, ease: 'power3.out' });
        if (mode === 'float') {
          const g = placeFloat(to);
          gsap.to(card, { left: g.left, top: g.top, duration: .5, ease: 'power3.inOut' });
        }
      }, .17);
    return tl;
  }

  function hide(restoreFocus: boolean) {
    if (!open) return;
    const it = open;
    cardTl?.progress(1).kill();
    cardTl = closeTl(it);
    open = null;
    items.forEach(x => x.hit.setAttribute('aria-expanded', 'false'));
    document.documentElement.classList.remove('rt-lock');
    if (restoreFocus) it.hit.focus({ preventScroll: true });
    cardTl.eventCallback('onComplete', () => startAmbient(1800));
  }

  // Swinging pivots on the top of the stem; set once so the origin never shifts.
  const swings = new Map<Item, SVGGElement>();
  function swing(it: Item) {
    let el = swings.get(it);
    if (!el) {
      el = it.el.querySelector<SVGGElement>('.berry-swing')!;
      gsap.set(el, { transformOrigin: '50% 0%', smoothOrigin: false });
      swings.set(it, el);
    }
    return el;
  }

  // ---- Intro -----------------------------------------------------------------
  const full = document.documentElement.classList.contains('rt-intro');
  let introTl: gsap.core.Timeline | null = null;
  let closingIntro: gsap.core.Timeline | null = null;
  const wood = svg.querySelector<SVGGElement>('.wood')!;

  /** Jump to the finished tree. Any interaction calls this first. */
  function finishIntro() {
    if (!introTl && !closingIntro) return;
    const tl = introTl;
    introTl = null;
    tl?.progress(1).kill();
    closingIntro?.progress(1).kill();
    closingIntro = null;
    if (!open) {
      gsap.set(card, { autoAlpha: 0 });
      gsap.set(scrim, { autoAlpha: 0 });
      gsap.set(meta, { autoAlpha: 1 });
      gsap.set(camera, { x: 0, y: 0, scale: 1, opacity: 1 });
      gsap.set(items.map(it => it.pop), { scale: 1, rotation: 0 });
      gsap.set(svg.querySelectorAll('.berry-halo'), { opacity: 0 });
    }
    cleanupIntro();
  }

  function cleanupIntro() {
    wood.removeAttribute('mask');
    svg.querySelector('.bud')?.remove();
    card.classList.remove('is-auto');
    card.removeAttribute('aria-hidden');
    hero.classList.add('is-ready');
    document.documentElement.classList.remove('rt-intro');
    try { sessionStorage.setItem(INTRO_KEY, 'seen'); } catch { /* storage is optional */ }
    startAmbient(1600);
  }

  function buildIntro(withReveal: boolean) {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' }, onComplete: () => { introTl = null; cleanupIntro(); } });
    const grow = (id: string) => svg.querySelector(`.grow[data-limb="${id}"]`)!;
    const puffs = gsap.utils.toArray<SVGCircleElement>(svg.querySelectorAll('.canopy circle'));
    const leaves = gsap.utils.toArray<SVGGElement>(svg.querySelectorAll('.leaf'));
    const bud = svg.querySelector<SVGGElement>('.bud')!;

    // SCENE 01 — seed to tree
    gsap.set(svg.querySelectorAll('.grow'), { attr: { 'stroke-dashoffset': 1 } });
    gsap.set(puffs, { scale: .2, opacity: 0, transformOrigin: '50% 80%' });
    gsap.set(leaves, { scale: 0, rotation: -40, transformOrigin: '0% 50%' });
    gsap.set(items.map(it => it.pop), { scale: 0 });
    gsap.set(svg.querySelector('.ground'), { scaleX: 0, opacity: 0, transformOrigin: '50% 50%' });
    gsap.set(bud, { x: 500, y: 892, scale: 0, transformOrigin: '0px 0px' });
    tl.to(svg.querySelector('.ground'), { scaleX: 1, opacity: 1, duration: .5, ease: 'power3.out' }, 0)
      .to(bud, { scale: 1.3, duration: .35, ease: 'back.out(2.5)' }, .05)
      .fromTo(bg, { y: 26 }, { y: 0, duration: 2.4, ease: 'power2.out' }, 0);
    for (const limb of LIMBS) {
      tl.to(grow(limb.id), { attr: { 'stroke-dashoffset': 0 }, duration: limb.dur, ease: limb.id === 'trunk' ? 'power2.in' : 'power2.out' }, limb.at);
    }
    // The bud rides the growing tip up the trunk and leader, then unfolds.
    const route = budRoute();
    const trunk = LIMBS.find(l => l.id === 'trunk')!, leader = LIMBS.find(l => l.id === 'leader')!;
    const ride = { t: 0 };
    const placeBud = (seg: 0 | 1, t: number) => {
      const p = pointOn(route[seg], t);
      gsap.set(bud, { x: p.x, y: p.y, rotation: p.angle + 90 });
    };
    tl.to(ride, { t: 1, duration: trunk.dur, ease: 'power2.in', onUpdate: () => placeBud(0, ride.t) }, trunk.at)
      .to(ride, { t: 2, duration: leader.dur, ease: 'power2.out', onUpdate: () => placeBud(1, ride.t - 1) }, leader.at)
      .to(bud, { scale: 0, duration: .3, ease: 'power2.in' }, leader.at + leader.dur - .1);
    puffs.forEach((p, i) => {
      tl.to(p, { scale: 1, opacity: 1, duration: .75, ease: 'back.out(1.5)' }, .68 + i * .06 + (i % 3) * .03);
    });
    tl.to(svg.querySelector('.canopy-shadow'), { opacity: 1, duration: .6 }, .7);
    leaves.forEach((leaf, i) => {
      const base = LEAVES[i];
      const lateStart = base[1] > 600 ? .62 : .95;
      tl.to(leaf, { scale: 1, rotation: 0, duration: .9 + (i % 4) * .08, ease: 'elastic.out(1, .55)' }, lateStart + ((i * 7) % 11) * .065);
    });

    // SCENE 02 — review fruits bloom, irregular order, each with its own gesture
    const order = items.map((it, i) => ({ it, k: (i * 7 + 3) % items.length })).sort((a, b) => a.k - b.k).map(o => o.it);
    order.forEach((it, n) => {
      const at = 1.5 + n * .072 + ((n * 5) % 4) * .03;
      const face = it.el.querySelector('.berry-face')!;
      const gleam = it.el.querySelector('.berry-gleam')!;
      const r = it.slot.r;
      switch (n % 5) {
        case 0: // swell past full size, settle back
          tl.to(it.pop, { keyframes: [{ scale: 1.2, duration: .3, ease: 'power2.out' }, { scale: .95, duration: .14 }, { scale: 1, duration: .18 }] }, at);
          break;
        case 1: // drop in and sway from the stem
          tl.to(it.pop, { scale: 1, duration: .35, ease: 'back.out(2)' }, at)
            .fromTo(swing(it), { rotation: -18 }, { rotation: 0, duration: 1.1, ease: 'elastic.out(1.2, .35)' }, at);
          break;
        case 2: // spin into place
          tl.fromTo(it.pop, { rotation: -160 }, { rotation: 0, scale: 1, duration: .6, ease: 'back.out(1.6)' }, at);
          break;
        case 3: // appears blank, then smiles
          tl.to(it.pop, { scale: 1, duration: .42, ease: 'back.out(2.2)' }, at)
            .fromTo(face, { opacity: 0, scaleY: .3, transformOrigin: '50% 50%' }, { opacity: 1, scaleY: 1, duration: .5, ease: 'back.out(3)' }, at + .3);
          break;
        default: // a glint crosses the skin
          tl.to(it.pop, { scale: 1, duration: .45, ease: 'back.out(2)' }, at)
            .fromTo(gleam, { x: -r * 2 }, { x: r * 2, duration: .7, ease: 'power2.inOut' }, at + .2);
      }
    });
    if (!withReveal) return tl;

    // SCENE 03 — the review reveal: glow, camera push, fruit morphs into card
    const halo = featured.el.querySelector('.berry-halo')!;
    tl.to(halo, { opacity: 1, duration: .4, yoyo: true, repeat: 1 }, 3.0)
      .to(featured.el.querySelector('.berry-gleam'), { x: featured.slot.r * 2, startAt: { x: -featured.slot.r * 2 }, duration: .6 }, 3.0)
      .to(featured.el.querySelector('.berry-eyes'), { scaleY: .1, duration: .07, yoyo: true, repeat: 1, transformOrigin: '50% 50%' }, 3.28);
    // Measure with the card laid out, then embed the same open/close used for clicks.
    const open1 = openTl(featured, 'float', { auto: true });
    gsap.set(card, { autoAlpha: 0 });
    tl.add(open1, 3.15).set(card, { autoAlpha: 1 }, 3.36);
    tl.add(() => {
      if (!introTl) return;
      // Closing is measured at the moment it starts.
      introTl.pause();
      const close1 = closeTl(featured);
      close1.eventCallback('onComplete', () => introTl?.play());
      closingIntro = close1;
    }, 4.75);
    tl.to({}, { duration: 1.05 }, 4.75);
    return tl;
  }

  function runIntro() {
    if (reduced.matches) { cleanupIntro(); return; }
    if (full) {
      hero.classList.add('rt-live');
      const lines = hero.querySelectorAll('.rt-line > span');
      const copy = gsap.timeline();
      copy.fromTo(lines, { yPercent: 110 }, { yPercent: 0, duration: .9, stagger: .12, ease: 'expo.out' }, .1)
        .fromTo(hero.querySelectorAll('.rt-reveal'), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .7, stagger: .08, ease: 'power3.out' }, .25)
        .fromTo(hero.querySelector('.rt-underline path'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: .9, ease: 'power2.inOut' }, 1.6);
      card.setAttribute('aria-hidden', 'true');
    }
    // Only stage the review reveal when the whole tree is on screen (phones often aren't).
    const box = stage.getBoundingClientRect();
    const inView = box.top >= -20 && box.bottom <= innerHeight + 40;
    introTl = buildIntro(full && inView);
    if (!full) introTl.timeScale(2.2);
  }

  // ---- Ambient life (cheap: one short tween every few seconds) ------------
  let ambientTimer = 0;
  let visible = true;
  function startAmbient(delay = 2600) {
    stopAmbient();
    if (reduced.matches || !visible || document.hidden || open || introTl) return;
    hero.classList.add('is-alive');
    ambientTimer = window.setTimeout(() => {
      const pool = items.filter(it => it !== open);
      const it = pool[Math.floor(Math.random() * pool.length)];
      const pick = Math.random();
      if (pick < .4) {
        gsap.to(it.el.querySelector('.berry-eyes'), { scaleY: .1, duration: .08, yoyo: true, repeat: 1, transformOrigin: '50% 50%' });
      } else if (pick < .72) {
        gsap.fromTo(it.el.querySelector('.berry-gleam'), { x: -it.slot.r * 2 }, { x: it.slot.r * 2, duration: .9, ease: 'power2.inOut' });
      } else {
        gsap.fromTo(swing(it), { rotation: 0 }, { keyframes: [{ rotation: 7, duration: .18 }, { rotation: -5, duration: .22 }, { rotation: 0, duration: .5, ease: 'elastic.out(1,.4)' }] });
      }
      startAmbient(2200 + Math.random() * 2400);
    }, delay);
  }
  function stopAmbient() {
    clearTimeout(ambientTimer);
  }
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    hero.classList.toggle('is-offscreen', !visible);
    if (visible) startAmbient(1200); else stopAmbient();
  }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopAmbient(); else startAmbient(1500); });

  // ---- Interaction -------------------------------------------------------------
  function setRover(it: Item) {
    rover.hit.tabIndex = -1;
    rover = it;
    it.hit.tabIndex = 0;
  }

  function hot(it: Item, on: boolean) {
    it.el.classList.toggle('is-hot', on);
    stage.classList.toggle('has-hot', on);
    if (on && !reduced.matches && !introTl) {
      gsap.fromTo(it.el.querySelector('.berry-face'), { scaleX: 1.1, scaleY: .86 }, { scaleX: 1, scaleY: 1, duration: .6, ease: 'elastic.out(1.2,.4)', transformOrigin: '50% 60%', overwrite: true });
      const r = it.review;
      if (r.thumbnail) { const pre = new Image(); pre.src = r.thumbnail; }
    }
  }

  for (const it of items) {
    it.hit.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hot(it, true); });
    it.hit.addEventListener('pointerleave', () => hot(it, false));
    it.hit.addEventListener('focus', () => { if (it.hit.matches(':focus-visible')) hot(it, true); });
    it.hit.addEventListener('blur', () => hot(it, false));
    it.hit.addEventListener('click', () => {
      if (open === it) hide(true);
      else show(it);
    });
    it.hit.addEventListener('keydown', e => {
      const next = navigate(it, e.key);
      if (!next) return;
      e.preventDefault();
      setRover(next);
      next.hit.focus();
    });
  }

  /** Arrow keys move between neighbouring fruit; only one fruit sits in the tab order. */
  function navigate(it: Item, key: string): Item | undefined {
    const i = items.indexOf(it);
    if (key === 'Home') return items[0];
    if (key === 'End') return items[items.length - 1];
    if (key === 'ArrowRight' || key === 'ArrowLeft') {
      const dx = key === 'ArrowRight' ? 1 : -1;
      return nearest(it, (a, b) => (b.slot.x - a.slot.x) * dx > 10) ?? items[(i + dx + items.length) % items.length];
    }
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      const dy = key === 'ArrowDown' ? 1 : -1;
      return nearest(it, (a, b) => (b.slot.y - a.slot.y) * dy > 30);
    }
  }
  function nearest(it: Item, ok: (a: Item, b: Item) => boolean) {
    let best: Item | undefined, d = Infinity;
    for (const other of items) {
      if (other === it || !ok(it, other)) continue;
      const dist = Math.hypot(other.slot.x - it.slot.x, (other.slot.y - it.slot.y) * 1.6);
      if (dist < d) { d = dist; best = other; }
    }
    return best;
  }

  closeBtn.addEventListener('click', () => hide(true));
  card.querySelector('.rt-card-prev')!.addEventListener('click', () => step(-1));
  card.querySelector('.rt-card-next')!.addEventListener('click', () => step(1));
  function step(d: number) {
    if (!open) return;
    const next = items[(items.indexOf(open) + d + items.length) % items.length];
    show(next);
  }

  // Focus stays inside the open card; Escape closes it.
  card.addEventListener('keydown', e => {
    if (e.key !== 'Tab' || !open) return;
    const focusables = Array.from(card.querySelectorAll<HTMLElement>('button, a[href], summary'))
      .filter(el => !el.closest('[hidden]') && el.offsetParent !== null);
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (open) { e.preventDefault(); hide(true); }
    else finishIntro();
  });
  document.addEventListener('pointerdown', e => {
    const t = e.target as Element | null;
    if (!t || t.closest('.rt-card, .rt-hit, .rt-legend')) return;
    if (introTl && t.closest('.rt-stage')) finishIntro();
    if (open) hide(false);
  });
  scrim.addEventListener('click', () => hide(true));

  // Drag the sheet down to dismiss it.
  const grip = card.querySelector<HTMLElement>('.rt-card-grip')!;
  let dragY: number | null = null;
  grip.addEventListener('pointerdown', e => {
    if (mode !== 'sheet' || !open) return;
    dragY = e.clientY;
    grip.setPointerCapture(e.pointerId);
  });
  grip.addEventListener('pointermove', e => {
    if (dragY === null) return;
    gsap.set(card, { y: Math.max(0, e.clientY - dragY) });
  });
  const endDrag = (e: PointerEvent) => {
    if (dragY === null) return;
    const dy = e.clientY - dragY;
    dragY = null;
    if (dy > 70) { gsap.set(card, { y: 0, yPercent: dy / card.offsetHeight * 100 }); hide(true); }
    else gsap.to(card, { y: 0, duration: .4, ease: 'back.out(2)' });
  };
  grip.addEventListener('pointerup', endDrag);
  grip.addEventListener('pointercancel', endDrag);

  // Legend: highlight one kind of review.
  legend?.querySelectorAll<HTMLButtonElement>('button[data-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      finishIntro();
      const type = btn.dataset.type as ReviewType;
      const on = btn.getAttribute('aria-pressed') !== 'true';
      legend.querySelectorAll('button[data-type]').forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', String(on));
      if (on) stage.dataset.filter = type; else delete stage.dataset.filter;
      if (on && !reduced.matches) {
        const picked = items.filter(it => it.review.type === type).map(it => it.pop);
        gsap.fromTo(picked, { y: 0 }, { keyframes: [{ y: -10, duration: .18, ease: 'power2.out' }, { y: 0, duration: .5, ease: 'bounce.out' }], stagger: .04 });
      }
    });
  });

  // Gentle parallax with the pointer: background drifts more than the tree.
  if (fine.matches && !reduced.matches) {
    const bx = gsap.quickTo(bg, 'x', { duration: 1.2, ease: 'power3.out' });
    const by = gsap.quickTo(bg, 'y', { duration: 1.2, ease: 'power3.out' });
    const tx = gsap.quickTo(parallax, 'x', { duration: 1.4, ease: 'power3.out' });
    const ty = gsap.quickTo(parallax, 'y', { duration: 1.4, ease: 'power3.out' });
    hero.addEventListener('pointermove', e => {
      if (reduced.matches) return;
      const box = hero.getBoundingClientRect();
      const nx = (e.clientX - box.left) / box.width - .5, ny = (e.clientY - box.top) / box.height - .5;
      bx(-nx * 22); by(-ny * 16); tx(nx * 7); ty(ny * 5);
    });
  }

  // Layout changes while a card is open: re-anchor it.
  let lastNarrow = narrow.matches;
  window.addEventListener('resize', () => {
    if (!open) return;
    if (narrow.matches !== lastNarrow) { lastNarrow = narrow.matches; const it = open; hide(false); cardTl?.progress(1); show(it); return; }
    if (mode === 'float') {
      const g = placeFloat(open);
      gsap.set(card, { left: g.left, top: g.top });
      gsap.set(camera, cameraTo(open, 1.13));
    }
  });
  reduced.addEventListener('change', () => { finishIntro(); closingIntro?.progress(1); if (reduced.matches) stopAmbient(); });

  runIntro();
}

const hero = document.querySelector<HTMLElement>('.rt');
if (hero) {
  try { mount(hero); }
  catch (error) {
    // Never leave the headline hidden if something goes wrong.
    document.documentElement.classList.remove('rt-intro');
    throw error;
  }
}
