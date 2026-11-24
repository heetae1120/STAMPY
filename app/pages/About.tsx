import type { ReactNode } from 'react';
import { Link } from '../router';
import { Reveal, StampIcon, useTitle } from '../components/ui';
import { Mascot } from '../art/Mascot';
import { Island } from '../art/Island';
import { Sticker } from '../art/Sticker';
import { Chest, Sparkle, StampImprint, Star } from '../art/Deco';
import { CATEGORIES } from '../data/catalog';

const CHAPTERS: { no: string; title: string; sub: string; body: string; how: string; art: ReactNode; color: string }[] = [
  { no: '01', title: '작은 발견', sub: '새로운 브랜드를 알아가는 즐거움', color: '#e3f1fb',
    body: '지도 위에는 아직 가보지 않은 섬이 많아요. 동네 카페, 작은 공방, 처음 보는 스킨케어 브랜드까지. STAMPY는 낯선 브랜드를 만나는 일을 탐험처럼 즐겁게 만들고 싶었어요.',
    how: '보물지도와 체험단 목록에서 카테고리별로 브랜드를 둘러봐요.',
    art: <div className="ch-art ch1"><Island cat="food" top="#ffc9b8" side="#f08f74" size={200} /><Island cat="living" top="#c4e6cf" side="#7dbd94" size={150} /><Mascot pose="discover" size={96} /></div> },
  { no: '02', title: '특별한 경험', sub: '직접 사용하고 체험하는 순간', color: '#fff3c9',
    body: '광고 문구보다 손에 닿는 감촉, 매장의 공기, 첫 한 모금이 더 많은 걸 알려줘요. 체험단은 그 순간을 직접 만나는 초대장이에요.',
    how: '신청서에 체험 계획을 적어 보내면, 선정된 탐험가에게 제품이 가거나 방문 일정이 잡혀요.',
    art: <div className="ch-art ch2"><Sticker art="cup" size={110} tilt={-8} /><Sticker art="serum" size={90} tilt={10} /><Sticker art="bag" size={84} tilt={-4} /><Sparkle size={30} /></div> },
  { no: '03', title: '나만의 이야기', sub: '솔직한 리뷰로 경험을 기록하는 과정', color: '#ffe1d8',
    body: '좋았던 점도, 아쉬웠던 점도 그대로. STAMPY는 평점이나 칭찬에 보상을 주지 않아요. 직접 경험하고 성실하게 기록하는 것 자체가 미션이에요.',
    how: '블로그·인스타그램·유튜브에 리뷰를 올리고 주소를 제출하면 운영팀이 미션 수행을 확인해요.',
    art: <div className="ch-art ch3"><Sticker art="notebook" size={120} tilt={-6} /><Mascot pose="idle" size={100} /><Sticker art="letter" size={80} tilt={8} /></div> },
  { no: '04', title: '차곡차곡 수집', sub: '스티커와 스탬프가 쌓이는 과정', color: '#ece5fe',
    body: '승인된 경험마다 두 가지가 남아요. 그 브랜드를 경험했다는 기념 스티커, 그리고 선물로 바꿀 수 있는 스탬프. 스티커는 영원히 스티커북에 남고, 스탬프는 쓰면 줄어드는 재화예요.',
    how: '마이페이지의 스티커북과 스탬프 내역에서 모은 것들을 확인해요.',
    art: <div className="ch-art ch4"><Sticker art="cake" size={84} tilt={-10} /><Sticker art="vase" size={84} tilt={6} /><StampImprint size={90} /><StampImprint size={70} /><Mascot pose="stamp" size={96} /></div> },
  { no: '05', title: '새로운 선물', sub: '모은 스탬프로 다음 경험을 얻는 순간', color: '#e2f3e7',
    body: '모은 스탬프로 리워드샵에서 브랜드 상품을 직접 골라요. 그 선물이 또 다른 브랜드와의 첫 만남이 되고, 탐험은 다시 시작돼요.',
    how: '리워드샵에서 상품을 고르고 배송 정보를 입력해 교환 신청해요.',
    art: <div className="ch-art ch5"><Chest size={190} open /><Mascot pose="chest" size={96} /><Star size={34} /></div> },
];

export default function About() {
  useTitle('STAMPY 소개');
  return (
    <>
      <section className="about-hero">
        <div className="wrap about-hero-grid">
          <div>
            <p className="eyebrow">A Tiny World of Brand Adventures</p>
            <h1 className="h-display">경험을 모으는<br />가장 즐거운 모험</h1>
            <p className="lead">STAMPY는 브랜드를 탐험하고, 직접 경험하고, 솔직한 이야기를 남기는 작은 세계예요. 다섯 개의 챕터로 STAMPY를 소개할게요.</p>
          </div>
          <div className="about-world" aria-hidden="true">
            {CATEGORIES.filter(c => c.id !== 'etc').map((c, i) => <span key={c.id} className={'aw aw' + i}><Island cat={c.id} top={c.color} side={c.deep} size={150} /></span>)}
            <span className="aw-m"><Mascot pose="flag" size={120} /></span>
          </div>
        </div>
      </section>
      <div className="wrap chapters">
        {CHAPTERS.map((ch, i) => (
          <Reveal as="section" key={ch.no} className={'chapter' + (i % 2 ? ' is-flip' : '')}>
            <div className="chapter-art" style={{ background: ch.color }}>{ch.art}</div>
            <div className="chapter-text">
              <p className="chapter-no en">Chapter {ch.no}</p>
              <h2 className="h1">{ch.title}</h2>
              <p className="chapter-sub">{ch.sub}</p>
              <p>{ch.body}</p>
              <p className="chapter-how"><b>STAMPY에서는</b> {ch.how}</p>
            </div>
          </Reveal>
        ))}
        <Reveal className="about-promise card">
          <h2 className="h2">STAMPY가 지키는 약속</h2>
          <ul className="promise-list">
            <li><StampIcon size={34} /><b>보상은 평가가 아니라 경험에</b><span>평점이나 긍정적인 내용으로 승인 여부를 정하지 않아요.</span></li>
            <li><Sticker art="medal" size={40} /><b>광고 표기는 꼭</b><span>모든 리뷰에 제공받았다는 사실을 밝혀요.</span></li>
            <li><Chest size={44} /><b>직접 고르는 선물</b><span>뽑기나 무작위 지급 없이 원하는 상품을 교환해요.</span></li>
          </ul>
          <div className="row-btns" style={{ justifyContent: 'center' }}><Link to="/how-it-works" className="btn btn-primary">이용 방법 자세히 보기</Link><Link to="/experiences" className="btn">체험단 둘러보기</Link></div>
        </Reveal>
      </div>
    </>
  );
}
