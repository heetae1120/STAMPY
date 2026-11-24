import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { CategoryId } from '../api/types';
import { CATEGORIES, REWARDS, STICKERS, campaignStatus, stickerById } from '../data/catalog';
import { useDemo, useSession } from '../api/hooks';
import { balanceOf, campaignsOf } from '../api/demo';
import { Link } from '../router';
import { HomeHero } from '../components/HomeHero';
import { ExperienceCard, RewardCard } from '../components/Cards';
import { StickerBook, type BookPage, type BookSlot } from '../components/StickerBook';
import { StampCard } from '../components/StampCard';
import { Modal, Reveal, StampIcon, StickerIcon, useReveal, useTitle } from '../components/ui';
import { Mascot } from '../art/Mascot';
import { Island } from '../art/Island';
import { Sticker } from '../art/Sticker';
import { Chest, Sparkle, StampImprint, Star } from '../art/Deco';
import { TreasureMap } from '../art/TreasureMap';
import { markerHtml } from '../components/map/NaverExperienceMap';

function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

// ---- SECTION 02: the five-step trail --------------------------------------------------

const STEPS: { title: string; body: string; art: ReactNode }[] = [
  { title: '브랜드 발견하기', body: '보물지도의 섬을 돌아보며 마음에 드는 브랜드를 찾아요.', art: <><Island cat="beauty" top="#d9ccfb" side="#9b84e6" size={130} /><Mascot pose="discover" size={64} className="st-m" /></> },
  { title: '체험단 신청하기', body: '체험 방법과 기록할 채널을 적어 신청해요. 선정 결과는 알림으로 알려드려요.', art: <div className="st-post"><span className="en">APPLY</span><b>체험단 신청서</b><i /><i /><i /><StampImprint size={46} label="OK" /></div> },
  { title: '실제로 경험하기', body: '제품을 받거나 매장에 방문해 직접 써보고 맛보고 느껴요.', art: <><Sticker art="cup" size={84} tilt={-8} /><Sticker art="serum" size={70} tilt={10} /></> },
  { title: '리뷰 남기고 스탬프 받기', body: '솔직한 리뷰를 제출하면 운영팀이 미션 수행을 검수해요. 승인되면 스탬프와 스티커가 쌓여요.', art: <><Sticker art="notebook" size={80} tilt={-6} /><StampImprint size={74} className="st-press" /></> },
  { title: '스탬프로 선물 교환하기', body: '모은 스탬프로 리워드샵에서 원하는 브랜드 상품을 골라 교환해요.', art: <Chest size={130} open /> },
];

function AdventureTrail() {
  const list = useRef<HTMLOListElement>(null);
  const [reached, setReached] = useState(0);
  const [tops, setTops] = useState<number[]>([]);
  const [walking, setWalking] = useState(false);
  useLayoutEffect(() => {
    const el = list.current!;
    const measure = () => setTops(Array.from(el.querySelectorAll<HTMLElement>('.trail-node')).map(n => n.offsetTop + n.offsetHeight / 2 + (n.offsetParent as HTMLElement).offsetTop));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  useEffect(() => {
    const items = Array.from(list.current!.querySelectorAll('li'));
    const io = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) {
        const i = items.indexOf(e.target as HTMLLIElement);
        setReached(r => Math.max(r, i));
      }
    }, { rootMargin: '-40% 0px -40% 0px' });
    items.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    setWalking(true);
    const t = setTimeout(() => setWalking(false), 900);
    return () => clearTimeout(t);
  }, [reached]);
  const span = tops.length ? tops[tops.length - 1] - tops[0] : 1;
  const progress = tops.length ? (tops[reached] - tops[0]) / span : 0;
  return (
    <section className="section trail-sec" aria-labelledby="trail-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Adventure Begins</p>
          <h2 id="trail-title" className="h2">모든 보물찾기는<br />작은 발견에서 시작돼요</h2>
          <p className="lead">다섯 걸음이면 첫 번째 보물에 닿아요.</p>
        </Reveal>
        <div className="trail">
          {tops.length > 0 && (
            <svg className="trail-line" style={{ top: tops[0], height: span }} viewBox="0 0 40 1000" preserveAspectRatio="none" aria-hidden="true">
              <defs><mask id="trail-line-mask" maskUnits="userSpaceOnUse"><path d="M20 0C40 120 0 260 20 380S40 620 20 760 0 900 20 1000" stroke="#fff" strokeWidth="12" fill="none" pathLength={1} strokeDasharray="1 1" style={{ strokeDashoffset: 1 - progress, transition: 'stroke-dashoffset .9s cubic-bezier(.22,1,.36,1)' }} /></mask></defs>
              <path d="M20 0C40 120 0 260 20 380S40 620 20 760 0 900 20 1000" stroke="#e6d4b8" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
              <path d="M20 0C40 120 0 260 20 380S40 620 20 760 0 900 20 1000" stroke="#7652BA" strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" mask="url(#trail-line-mask)" />
            </svg>
          )}
          {tops.length > 0 && <div className="trail-walker" style={{ top: tops[reached] }} aria-hidden="true"><Mascot pose={walking ? 'walk' : reached === STEPS.length - 1 ? 'joy' : 'idle'} size={64} /></div>}
          <ol ref={list} className="trail-steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className={'trail-step' + (i <= reached ? ' is-reached' : '') + (i % 2 ? ' is-right' : '')}>
                <span className="trail-node num" aria-hidden="true">{i + 1}</span>
                <div className="trail-card card">
                  <div className="trail-art" aria-hidden="true">{s.art}</div>
                  <div><p className="trail-no en">STEP {i + 1}</p><h3 className="h3">{s.title}</h3><p className="muted">{s.body}</p></div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ---- SECTION 05: sticker book showcase ---------------------------------------------------

const SAMPLE_RECORDS: Record<string, { brand: string; campaign: string; note: string }> = {
  'st-cup': { brand: '달콤정류장', campaign: '창가 자리 라테와 페이스트리', note: '창가 자리 햇살과 라테 거품을 사진 다섯 장으로 남겼어요.' },
  'st-cake': { brand: '달콤정류장', campaign: '바스크 치즈케이크 택배 체험', note: '보관 방법과 단면 사진을 함께 기록했어요.' },
  'st-serum': { brand: '말랑공방', campaign: '초록빛 세럼 첫 일주일 체험', note: '아침저녁 사용감과 아쉬웠던 향도 솔직하게 적었어요.' },
  'st-candle': { brand: '숲속살림', campaign: '린넨 키친타월 한 달 사용기', note: '빨래 후 건조 시간을 재서 비교했어요.' },
  'st-chair': { brand: '집꾸미', campaign: '손에 감기는 도자기 머그', note: '머그 무게와 손잡이 크기를 손 사진과 함께 담았어요.' },
};

function BookShowcase() {
  const [ref, inView] = useReveal<HTMLDivElement>({ threshold: .35 });
  const [fresh, setFresh] = useState(false);
  const [pick, setPick] = useState<BookSlot | null>(null);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setFresh(true), 1100);
    return () => clearTimeout(t);
  }, [inView]);
  const day = (n: number) => new Date(Date.now() - n * 86400000).toISOString();
  const pages: BookPage[] = useMemo(() => [
    { key: 'a', title: '내가 모은 스티커', en: 'My Collection', color: '#fff3c9', slots: [
      { def: stickerById('st-cup'), acquiredAt: day(40) }, { def: stickerById('st-cake'), acquiredAt: day(31) },
      { def: stickerById('st-serum'), acquiredAt: day(22) }, { def: stickerById('st-candle'), acquiredAt: day(12) },
      { def: stickerById('st-chair'), acquiredAt: day(5) }, { def: stickerById('st-first'), acquiredAt: fresh ? day(0) : undefined, fresh },
    ] },
    { key: 'b', title: '다음 탐험지', en: 'Still to Find', color: '#e3f1fb', slots: ['st-vase', 'st-bag', 'st-headphones', 'st-strawberry', 'st-lamp', 'st-star'].map(id => ({ def: stickerById(id) })) },
  ], [fresh]);
  const rec = pick ? SAMPLE_RECORDS[pick.def.id] : null;
  return (
    <section className="section book-sec" aria-labelledby="book-title">
      <div className="wrap">
        <SectionHead eyebrow="Your Sticker Book" title={<span id="book-title">하나씩 모으다 보면,<br />나만의 이야기가 완성돼요</span>}
          lead="리뷰 미션이 승인되면 그 브랜드의 스티커가 붙어요. 스티커를 누르면 그때의 리뷰 기록을 다시 볼 수 있어요." />
        <div ref={ref} className="book-stage">
          <span className="book-badge"><StickerIcon size={24} /> 스티커는 교환해도 사라지지 않는 수집 기록이에요 <span className="badge badge-demo">예시</span></span>
          <StickerBook pages={pages} open={inView} onPick={setPick} label="예시 스티커북" />
          {fresh && <p className="book-toast" role="status"><Sparkle size={18} /> 새 스티커 ‘첫 번째 모험’을 모았어요!</p>}
        </div>
        <Reveal className="center-cta"><Link className="btn" to="/my/stickerbook">나의 스티커북 열기 <span className="arrow">→</span></Link></Reveal>
      </div>
      {pick && (
        <Modal title={pick.def.name} onClose={() => setPick(null)}>
          <div className="pick-card">
            <Sticker art={pick.def.art} size={110} locked={!pick.acquiredAt} />
            <div>
              <p className="tiny muted en">{pick.def.series}</p>
              {pick.acquiredAt && rec ? <>
                <p><b>{rec.brand}</b> · {rec.campaign}</p>
                <p className="muted small">“{rec.note}”</p>
                <p className="tiny"><span className="badge badge-demo">예시 기록</span></p>
              </> : pick.acquiredAt ? <p className="small">{pick.def.rule}으로 받은 스티커예요. <span className="badge badge-demo">예시</span></p>
                : <p className="small">아직 모으지 못했어요. <b>{pick.def.rule}</b> 시 받을 수 있어요.</p>}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

// ---- SECTION 07: treasure shop ------------------------------------------------------

function ShopSection({ balance }: { balance: number | null }) {
  const [ref, inView] = useReveal<HTMLDivElement>({ threshold: .3 });
  const [open, setOpen] = useState(false);
  const stock = useDemo(s => s.stock);
  useEffect(() => { if (inView) { const t = setTimeout(() => setOpen(true), 400); return () => clearTimeout(t); } }, [inView]);
  const picks = REWARDS.slice(0, 4);
  return (
    <section className="section shop-sec" aria-labelledby="shop-title">
      <div className="wrap">
        <SectionHead eyebrow="Treasure Reward Shop" title={<span id="shop-title">모험 끝에 기다리는<br />진짜 보물을 만나보세요</span>}
          lead="스탬프로 교환할 상품은 직접 골라요. 상자에서 무작위로 나오는 뽑기가 아니에요." />
        <div ref={ref} className={'shop-stage' + (open ? ' is-open' : '')}>
          <button type="button" className="shop-chest" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="shop-rewards" aria-label={open ? '보물상자 닫기' : '보물상자 열기'}>
            <Chest size={230} open={open} />
          </button>
          <ul id="shop-rewards" className="shop-rewards">
            {picks.map((r, i) => <li key={r.id} style={{ ['--i' as string]: i }}><RewardCard r={r} stock={stock[r.id] ?? 0} balance={balance} /></li>)}
          </ul>
        </div>
        <Reveal className="center-cta"><Link className="btn btn-yellow" to="/rewards">리워드샵 전체 보기 <span className="arrow">→</span></Link></Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  useTitle('');
  const user = useSession();
  const data = useDemo(s => {
    const list = campaignsOf(s);
    const counts: Partial<Record<CategoryId, number>> = {};
    for (const c of list) if (campaignStatus(c) === 'open') counts[c.category] = (counts[c.category] ?? 0) + 1;
    const featured = list.filter(c => campaignStatus(c) === 'open').sort((a, b) => Date.parse(a.recruitEnd) - Date.parse(b.recruitEnd)).slice(0, 6);
    const applied = Object.fromEntries(list.map(c => [c.id, s.applications.filter(a => a.campaignId === c.id && a.status !== 'cancelled').length]));
    const bal = user ? balanceOf(s, user.id) : null;
    return { counts, featured, applied, bal };
  });
  const balance = data.bal?.available ?? null;
  const nextReward = REWARDS.filter(r => r.cost > (balance ?? 7)).sort((a, b) => a.cost - b.cost)[0];
  const shownBalance = balance ?? 7;

  return (
    <>
      <HomeHero counts={data.counts} />

      <section className="section nearby-sec" aria-labelledby="nearby-title">
        <div className="wrap">
          <Reveal className="nearby-cta">
            <div>
              <p className="eyebrow">Nearby Experiences</p>
              <h2 id="nearby-title" className="h2">가까운 곳에서<br />새로운 경험을 찾아보세요</h2>
              <p className="lead">카페, 식당, 미용실, 공방처럼 직접 방문하는 체험단을 네이버 지도에서 위치로 찾아요. 주소와 위치를 확인한 매장만 표시돼요.</p>
              <div className="row-btns">
                <Link className="btn btn-primary" to="/experiences?view=map">내 주변 체험단 찾기 <span className="arrow" aria-hidden="true">→</span></Link>
                <Link className="btn btn-ghost" to="/explore">일러스트 보물지도 보기</Link>
              </div>
            </div>
            <div className="nearby-art" aria-hidden="true">
              <svg className="grid" viewBox="0 0 400 200" preserveAspectRatio="none"><rect width="400" height="200" fill="#edf2ea" /><path d="M0 130C90 110 150 150 240 120S350 90 400 100" fill="none" stroke="#fff" strokeWidth="14" /><path d="M110 0C120 70 90 140 130 200M300 0C280 80 310 140 290 200" fill="none" stroke="#fff" strokeWidth="9" /><path d="M0 180C70 170 140 190 190 200" fill="none" stroke="#cfe3f3" strokeWidth="20" /></svg>
              {([[18, 30, 'cafe'], [46, 48, 'restaurant'], [70, 28, 'beauty'], [60, 74, 'workshop']] as const).map(([x, y, c], i) =>
                <span key={i} className="mock-pin" style={{ left: x + '%', top: y + '%' }} dangerouslySetInnerHTML={{ __html: markerHtml({ category: c, demo: false, selected: i === 1, label: '', decorative: true }) }} />)}
              <span className="tag">실제 지도 화면의 모습</span>
            </div>
          </Reveal>
        </div>
      </section>
      <AdventureTrail />

      <section className="section islands-sec" aria-labelledby="islands-title">
        <div className="wrap">
          <SectionHead eyebrow="Explore Brand Islands" title={<span id="islands-title">오늘은 어떤 브랜드를<br />만나볼까요?</span>} lead="섬을 누르면 그 카테고리에서 모집 중인 체험단을 볼 수 있어요." />
          <ul className="island-grid">
            {CATEGORIES.filter(c => c.id !== 'etc').map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * 70}>
                <Link to={'/experiences?category=' + c.id} className="island-card" style={{ ['--c' as string]: c.color }}>
                  <Island cat={c.id} top={c.color} side={c.deep} size={210} />
                  <span className="en">{c.en}</span>
                  <b className="h3">{c.island}</b>
                  <span className="muted small">{c.blurb}</span>
                  <span className="island-count">모집 중 <b className="num">{data.counts[c.id] ?? 0}</b></span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section featured-sec" aria-labelledby="featured-title">
        <div className="wrap">
          <div className="featured-head">
            <Reveal>
              <p className="eyebrow">Featured Adventures</p>
              <h2 id="featured-title" className="h2">지금 떠날 수 있는 새로운 모험</h2>
              <p className="lead">마감이 가까운 순서로 모았어요. 모든 체험단과 상품은 데모 예시예요.</p>
            </Reveal>
            <Link className="btn btn-sm" to="/experiences">전체 체험단 보기 →</Link>
          </div>
          <ul className="xgrid xgrid-scroll">
            {data.featured.map((c, i) => <Reveal as="li" key={c.id} delay={i * 60}><ExperienceCard c={c} applied={data.applied[c.id]} /></Reveal>)}
          </ul>
        </div>
      </section>

      <BookShowcase />

      <section className="section stamps-sec" aria-labelledby="stamps-title">
        <div className="wrap stamps-grid">
          <Reveal>
            <p className="eyebrow">Collect Your Stamps</p>
            <h2 id="stamps-title" className="h2">좋은 경험을 기록할수록,<br />스탬프가 차곡차곡</h2>
            <p className="lead">스탬프는 리워드샵에서 상품으로 바꿀 수 있는 재화예요. 리뷰를 제출하면 바로 쌓이지 않고, 운영팀이 미션 수행을 확인한 뒤 지급돼요.</p>
            <ol className="flow-chips" aria-label="스탬프가 지급되는 과정">
              <li>리뷰 제출</li><li>운영팀 검수</li><li>승인</li><li className="is-final"><StampIcon size={20} /> 스탬프 지급</li>
            </ol>
            <p className="notice info small"><span><b>평점이나 칭찬은 승인 조건이 아니에요.</b> 직접 체험했는지, 미션 항목과 광고 표기를 지켰는지만 확인해요. 아쉬운 점을 적어도 똑같이 승인돼요.</span></p>
          </Reveal>
          <Reveal className="stamps-card-col">
            <StampCard filled={shownBalance} total={10} animateFrom={Math.max(0, shownBalance - 3)} note={balance === null ? '예시' : '나의 스탬프'} />
            <div className="stamps-summary card">
              <div><span className="muted small">{balance === null ? '예시 보유 스탬프' : '교환 가능 스탬프'}</span><b className="num big">{shownBalance}</b></div>
              {nextReward && <div><span className="muted small">다음 교환까지</span><b className="num big">{nextReward.cost - shownBalance}</b><span className="tiny muted">{nextReward.name} ({nextReward.cost}개)</span></div>}
              {data.bal && data.bal.pending > 0 && <div><span className="muted small">검수 중 (적립 예정)</span><b className="num big">{data.bal.pending}</b></div>}
            </div>
            {!user && <p className="tiny muted center">로그인하면 나의 실제 스탬프와 남은 수량을 보여드려요.</p>}
          </Reveal>
        </div>
      </section>

      <ShopSection balance={balance} />

      <section className="section final-sec" aria-labelledby="final-title">
        <div className="wrap">
          <Reveal className="final-card paper">
            <span className="tape" style={{ left: '50%', top: -12, marginLeft: -43 }} />
            <div className="final-art" aria-hidden="true">
              <div className="final-map"><TreasureMap interactive={false} showMascot={false} /></div>
              <Mascot pose="joy" size={120} className="final-mascot" />
              <div className="final-stickers"><Sticker art="star" size={70} tilt={-10} /><Sticker art="strawberry" size={58} tilt={12} /><Sticker art="camera" size={56} tilt={-4} /></div>
              <Star size={30} className="final-star" />
            </div>
            <h2 id="final-title" className="h1">당신의 첫 번째 보물은<br />무엇일까요?</h2>
            <p className="lead">지도를 펼치고, 마음이 가는 섬부터 들러보세요.</p>
            <Link className="btn btn-primary" to={user ? '/explore' : '/login?next=/explore'}>지금 탐험 시작하기 <span className="arrow">→</span></Link>
            <p className="tiny muted" style={{ marginTop: 12 }}>스티커 {STICKERS.length}종 · 데모 체험단과 상품으로 전체 과정을 체험해 볼 수 있어요</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
