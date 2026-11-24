import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import type { CategoryId } from '../api/types';
import { CATEGORIES, REWARDS, brandById } from '../data/catalog';
import { Link } from '../router';
import { useDemo } from '../api/hooks';
import { TreasureMap, MAP_W, MAP_H, MASCOT_REST } from '../art/TreasureMap';
import { Mascot } from '../art/Mascot';
import { Sticker } from '../art/Sticker';
import { Chest, InkBurst, Sparkle, StampImprint, StampTool } from '../art/Deco';
import { Island } from '../art/Island';
import { StampIcon, reducedMotion } from './ui';

const INTRO_KEY = 'stampy.hero.seen';

function Fold() {
  const panel = (x: number) => (
    <svg viewBox={`${x} 0 400 ${MAP_H}`} preserveAspectRatio="none"><use href="#map-base" /></svg>
  );
  return (
    <div className="fold" aria-hidden="true">
      <div className="fold-wrap">
        <div className="fold-panel fold-l"><div className="fold-face">{panel(0)}</div><div className="fold-back"><span className="en">STAMPY</span></div></div>
        <div className="fold-panel fold-c"><div className="fold-face">{panel(400)}</div></div>
        <div className="fold-panel fold-r"><div className="fold-face">{panel(800)}</div><div className="fold-back"><span className="en">MAP</span></div></div>
      </div>
    </div>
  );
}

function HeroPop({ kind, onClose }: { kind: 'chest' | 'sticker'; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const stock = useDemo(s => s.stock);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.querySelector<HTMLElement>('h2')?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); prev?.focus?.(); };
  }, [onClose]);
  const picks = REWARDS.filter(r => (stock[r.id] ?? 0) > 0).slice(0, 3);
  return (
    <div ref={ref} className={'hero-pop hero-pop-' + kind} role="dialog" aria-label={kind === 'chest' ? '리워드 미리보기' : '스티커북 소개'}>
      <button className="modal-close" onClick={onClose} aria-label="닫기">×</button>
      {kind === 'chest' ? <>
        <h2 className="h3" tabIndex={-1}>보물상자 속 진짜 선물</h2>
        <p className="small muted">무작위 뽑기가 아니에요. 리워드샵에서 <b>직접 고른 상품</b>을 스탬프로 교환해요.</p>
        <ul className="pop-rewards">
          {picks.map(r => (
            <li key={r.id}><Link to={'/rewards/' + r.slug}>
              <img src={r.image} alt="" loading="lazy" /><span><small>{brandById(r.brandId).name}</small>{r.name}</span>
              <b className="pop-cost"><StampIcon size={18} /><span className="num">{r.cost}</span></b>
            </Link></li>
          ))}
        </ul>
        <Link to="/rewards" className="btn btn-sm btn-yellow">리워드샵 둘러보기</Link>
      </> : <>
        <h2 className="h3" tabIndex={-1}>경험이 스티커로 남아요</h2>
        <p className="small">리뷰 미션이 승인되면 그 브랜드의 스티커가 스티커북에 붙어요. 스티커는 <b>나만의 수집 기록</b>이라 교환할 때 사라지지 않아요.</p>
        <p className="small muted">상품 교환에는 스티커가 아니라 <b>스탬프</b>를 써요.</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Link to="/my/stickerbook" className="btn btn-sm btn-primary">스티커북 열기</Link>
          <Link to="/how-it-works" className="btn btn-sm">스티커와 스탬프 차이</Link>
        </div>
      </>}
    </div>
  );
}

export function HomeHero({ counts }: { counts: Partial<Record<CategoryId, number>> }) {
  const stage = useRef<HTMLDivElement>(null);
  const [pop, setPop] = useState<null | 'chest' | 'sticker'>(null);
  const [ready, setReady] = useState(false);
  const skipRef = useRef<() => void>(() => {});

  useEffect(() => {
    const root = stage.current!;
    const $ = <T extends Element>(s: string) => root.querySelector<T>(s)!;
    const $$ = (s: string) => Array.from(root.querySelectorAll(s));
    const finish = () => {
      root.classList.add('is-ready');
      root.classList.remove('is-intro');
      setReady(true);
      try { sessionStorage.setItem(INTRO_KEY, '1'); } catch { /* optional */ }
    };
    let seen = false;
    try { seen = sessionStorage.getItem(INTRO_KEY) === '1'; } catch { /* optional */ }
    if (reducedMotion()) { finish(); return; }

    const mobile = matchMedia('(max-width: 760px)').matches;
    const svg = $<SVGSVGElement>('.tmap');
    const walk = $<SVGPathElement>('.map-walk');
    const mascot = $<SVGGElement>('.map-mascot');
    const toStage = (x: number, y: number) => {
      const m = svg.getBoundingClientRect(), s = root.getBoundingClientRect();
      return { x: m.left - s.left + x / MAP_W * m.width, y: m.top - s.top + y / MAP_H * m.height };
    };
    const center = (el: Element) => {
      const r = el.getBoundingClientRect(), s = root.getBoundingClientRect();
      return { x: r.left - s.left + r.width / 2, y: r.top - s.top + r.height / 2, w: r.width };
    };

    root.classList.add('is-intro');
    const tl = gsap.timeline({ onComplete: finish });
    // SCENE 01 — folded map, explorer arrives
    gsap.set(svg, { autoAlpha: 0 });
    gsap.set($('.fold'), { autoAlpha: 1 });
    gsap.set($('.fold-l'), { rotationY: 178, transformOrigin: '100% 50%' });
    gsap.set($('.fold-r'), { rotationY: -178, transformOrigin: '0% 50%' });
    gsap.set($('.fold-wrap'), { scale: .9, rotation: -5, y: 18 });
    gsap.set($('.hero-mascot'), { autoAlpha: 1 });
    tl.from($('.hero-mascot'), { scale: 0, y: 30, duration: .45, ease: 'back.out(2.2)' }, .1)
      // SCENE 02 — the map unfolds
      .to($('.fold-l'), { rotationY: 0, duration: .75, ease: 'power3.inOut' }, .45)
      .to($('.fold-r'), { rotationY: 0, duration: .75, ease: 'power3.inOut' }, .66)
      .to($('.fold-wrap'), { scale: 1, rotation: 0, y: 0, duration: 1, ease: 'power3.out' }, .4)
      .set(svg, { autoAlpha: 1 }, 1.42).set($('.fold'), { autoAlpha: 0 }, 1.45)
      .call(() => root.classList.add('is-unfolded'), [], 1.2)
      .to($('.hero-mascot'), { autoAlpha: 0, scale: .5, y: 20, duration: .3 }, 1.45)
      // SCENE 03 — the world appears
      .from($$('.map-pop'), { scale: .2, opacity: 0, y: 40, transformOrigin: '50% 100%', stagger: .08, duration: .6, ease: 'back.out(1.7)' }, 1.48)
      .fromTo($('.trail-reveal'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.3, ease: 'power1.inOut' }, 1.55)
      .from($$('.map-cloud, .map-star, .map-bridge, .map-start, .map-steps'), { opacity: 0, stagger: .05, duration: .5 }, 1.7)
      .from($('.map-chest-wrap'), { scale: 0, rotation: -18, transformOrigin: '50% 80%', duration: .6, ease: 'back.out(2.2)' }, 2.05);

    // SCENE 04 — the explorer walks the dotted trail
    const len = walk.getTotalLength();
    const step = { t: 0 };
    const place = () => {
      const p = walk.getPointAtLength(step.t * len);
      gsap.set(mascot, { x: p.x, y: p.y - Math.abs(Math.sin(step.t * Math.PI * 7)) * 6 });
    };
    gsap.set(mascot, { x: 92, y: 748, opacity: 0 });
    tl.to(mascot, { opacity: 1, duration: .25 }, 2.25)
      .call(() => mascot.classList.add('is-walking'), [], 2.3)
      .to(step, { t: 1, duration: 1.1, ease: 'sine.inOut', onUpdate: place }, 2.3)
      .call(() => mascot.classList.remove('is-walking'), [], 3.4);

    if (!mobile) {
      // Discovery: sparkle burst and a brand sticker appears
      const fly = $<HTMLElement>('.fly-sticker');
      const burst = $<HTMLElement>('.burst');
      const slot = $('.tray-slot.is-target');
      const slotSticker = $('.tray-slot.is-target .sticker');
      const stamp = $<HTMLElement>('.stamp-press');
      const imprint = $('.tray-stamp.is-target .stamp-imprint');
      gsap.set([slotSticker, imprint], { autoAlpha: 0 });
      tl.call(() => {
        const at = toStage(MASCOT_REST.x + 10, MASCOT_REST.y - 120);
        gsap.set(burst, { left: at.x, top: at.y + 30 });
        gsap.set(fly, { left: at.x, top: at.y, xPercent: -50, yPercent: -50 });
      }, [], 3.38)
        .fromTo(burst.children, { scale: 0, x: 0, y: 0, opacity: 1 }, {
          scale: 1, opacity: 0, duration: .7, ease: 'power2.out', stagger: .02,
          x: i => Math.cos(i * 1.05) * 46, y: i => Math.sin(i * 1.05) * 46,
        }, 3.42)
        .fromTo(fly, { autoAlpha: 0, scale: 0, rotation: -30 }, { autoAlpha: 1, scale: 1, rotation: 0, duration: .5, ease: 'back.out(2.4)' }, 3.45)
        // SCENE 05 — the sticker peels up and flies into the sticker book
        .to(fly, { rotation: -14, scale: 1.18, y: -16, filter: 'drop-shadow(0 16px 10px rgba(74,58,66,.28))', duration: .35, ease: 'power2.out' }, 3.95)
        .add(() => {
          const to = center(slot);
          gsap.to(fly, { left: to.x, top: to.y, y: 0, rotation: 6, scale: to.w / fly.offsetWidth, duration: .7, ease: 'power3.inOut' });
        }, 4.3)
        .to(fly, { scale: '-=0.08', filter: 'drop-shadow(0 2px 1px rgba(74,58,66,.2))', duration: .12, ease: 'power2.in' }, 5.0)
        .set(fly, { autoAlpha: 0 }, 5.12).set(slotSticker, { autoAlpha: 1 }, 5.12)
        .fromTo(slot, { scale: .92 }, { scale: 1, duration: .4, ease: 'back.out(3)' }, 5.12)
        // Stamp press
        .call(() => {
          const t = center($('.tray-stamp.is-target'));
          gsap.set(stamp, { left: t.x, top: t.y, xPercent: -50, yPercent: -100 });
        }, [], 5.1)
        .fromTo(stamp, { autoAlpha: 0, y: -50 }, { autoAlpha: 1, y: -34, duration: .25, ease: 'power2.out' }, 5.15)
        .to(stamp, { y: 6, scaleY: .9, duration: .14, ease: 'power3.in' }, 5.42)
        .set(imprint, { autoAlpha: 1 }, 5.55)
        .fromTo(imprint, { scale: 1.2, rotation: -12 }, { scale: 1, rotation: -8, duration: .25, ease: 'power2.out' }, 5.55)
        .call(() => { const t = center($('.tray-stamp.is-target')); gsap.set($('.ink-press'), { left: t.x, top: t.y, xPercent: -50, yPercent: -50 }); }, [], 5.5)
        .fromTo($('.ink-press'), { autoAlpha: .9, scale: .5 }, { autoAlpha: 0, scale: 1.25, duration: .45, ease: 'power2.out' }, 5.55)
        .to(stamp, { y: -60, scaleY: 1, autoAlpha: 0, duration: .35, ease: 'power2.out' }, 5.62)
        .fromTo($('.tray-plus'), { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: .3 }, 5.65);
    }
    // First visit runs about four seconds; repeat visits are quicker still.
    tl.timeScale(seen ? 2.6 : 1.4);

    const skip = () => {
      if (tl.progress() === 1) return;
      tl.progress(1);
      $$('.fly-sticker, .burst, .stamp-press, .ink-press').forEach(el => gsap.set(el, { autoAlpha: 0 }));
      mascot.classList.remove('is-walking');
      finish();
    };
    skipRef.current = skip;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' || e.key === 'Tab') skip(); };
    root.addEventListener('pointerdown', skip);
    document.addEventListener('keydown', onKey);
    const io = new IntersectionObserver(([e]) => root.classList.toggle('is-paused', !e.isIntersecting));
    io.observe(root);
    return () => { tl.kill(); root.removeEventListener('pointerdown', skip); document.removeEventListener('keydown', onKey); io.disconnect(); };
  }, []);

  const poke = () => {
    const el = stage.current?.querySelector('.map-mascot-inner');
    if (!el || el.classList.contains('is-poked')) return;
    el.classList.add('is-poked');
    setTimeout(() => el.classList.remove('is-poked'), 800);
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <Sparkle className="hb hb3" size={20} color="#B7DBF3" />
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkle size={18} /> Treasure Map × Sticker Collection</p>
          <h1 id="hero-title" className="h-display">리뷰로 떠나는<br /><span className="hl">작은 보물찾기</span></h1>
          <p className="lead">새로운 브랜드를 발견하고,{' '}<br />직접 경험한 이야기를 남겨보세요.{' '}<br />차곡차곡 모은 스탬프가 진짜 선물이 됩니다.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" to="/explore">보물지도 펼쳐보기 <span className="arrow" aria-hidden="true">→</span></Link>
            <Link className="btn" to="/experiences">체험단 둘러보기</Link>
          </div>
          <ol className="hero-how" aria-label="STAMPY 이용 순서">
            <li><span className="hh-ico"><Sticker art="cup" size={40} /></span><b>체험단 참여</b><span>브랜드 제품과 공간을 직접 경험해요</span></li>
            <li><span className="hh-ico"><StampIcon size={34} /></span><b>리뷰 승인 → 스탬프</b><span>미션을 검수받으면 적립돼요</span></li>
            <li><span className="hh-ico"><Chest size={42} /></span><b>상품으로 교환</b><span>모은 스탬프로 직접 고른 선물</span></li>
          </ol>
        </div>

        <div className={'hero-stage' + (ready ? ' is-ready' : '')} ref={stage}>
          <div className="hero-map paper">
            <span className="tape" style={{ left: -18, top: 18 }} /><span className="tape tape-mint" style={{ right: -14, bottom: 30, rotate: '12deg' }} />
            <div className="hero-map-inner">
              <TreasureMap counts={counts} onChest={() => setPop('chest')} onMascot={poke} title="STAMPY 보물지도: 섬을 누르면 그 카테고리의 체험단을 볼 수 있어요" />
              <Fold />
            </div>
          </div>
          <div className="hero-mascot" aria-hidden="true"><Mascot pose="flag" size={104} /></div>
          <div className="tray">
            <button type="button" className="tray-book" onClick={() => setPop('sticker')} aria-label="스티커북 소개 보기">
              <span className="tray-title en">Sticker Book</span>
              <span className="tray-slots">
                <span className="tray-slot"><Sticker art="cake" size={46} /></span>
                <span className="tray-slot"><Sticker art="serum" size={46} tilt={-6} /></span>
                <span className="tray-slot is-target"><Sticker art="vase" size={46} tilt={6} /></span>
                <span className="tray-slot is-empty" />
              </span>
            </button>
            <div className="tray-card" aria-label="스탬프 카드 예시">
              <span className="tray-title en">Stamp Card</span>
              <span className="tray-stamps">
                {[0, 1, 2, 3].map(i => <span key={i} className="tray-stamp"><StampImprint size={34} /></span>)}
                <span className="tray-stamp is-target"><StampImprint size={34} /></span>
                <span className="tray-stamp is-empty" />
              </span>
              <span className="tray-plus">+1 스탬프</span>
            </div>
          </div>
          <div className="fly-sticker" aria-hidden="true"><Sticker art="vase" size={70} /></div>
          <div className="burst" aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <Sparkle key={i} size={18} color={['#FFE39A', '#F7BBD0', '#B7DBF3'][i % 3]} />)}</div>
          <div className="stamp-press" aria-hidden="true"><StampTool size={50} /></div>
          <div className="ink-press" aria-hidden="true"><InkBurst size={70} /></div>
          {pop && <HeroPop kind={pop} onClose={() => setPop(null)} />}
          <p className="hero-hint" aria-hidden="true">섬을 눌러 탐험을 시작해 보세요</p>
        </div>
      </div>

      <div className="wrap hero-cats">
        <p className="hero-cats-title">어느 섬으로 떠나볼까요?</p>
        <ul>
          {CATEGORIES.filter(c => c.id !== 'etc').map(c => (
            <li key={c.id}><Link to={'/experiences?category=' + c.id} style={{ background: c.color }}>
              <Island cat={c.id} top={c.color} side={c.deep} size={96} />
              <b>{c.island}</b><span>모집 중 {counts[c.id] ?? 0}</span>
            </Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
