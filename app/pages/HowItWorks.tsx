import { Link } from '../router';
import { Reveal, StampIcon, StickerIcon, useTitle } from '../components/ui';
import { Mascot } from '../art/Mascot';
import { Sticker } from '../art/Sticker';
import { Chest, StampImprint } from '../art/Deco';
import { StampCard } from '../components/StampCard';

const FLOW = [
  ['신청', '마음에 드는 체험단에 체험 계획과 채널을 적어 신청해요.', 'applied'],
  ['선정', '브랜드와 운영팀이 신청서를 보고 탐험가를 선정해요. 결과는 마이페이지에서 확인해요.', 'selected'],
  ['체험', '제품을 받거나 매장에 방문해 직접 경험해요.', 'exp'],
  ['리뷰 제출', '정해진 기간 안에 리뷰를 올리고 주소를 제출해요.', 'submit'],
  ['검수', '운영팀이 체험 사실, 미션 항목, 광고 표기를 확인해요.', 'check'],
  ['승인', '미션을 지켰다면 승인돼요. 보완이 필요하면 사유와 함께 다시 제출할 수 있어요.', 'ok'],
  ['스탬프 지급', '체험단마다 정해진 스탬프가 적립 기록과 함께 들어와요.', 'stamp'],
  ['스티커 획득', '그 브랜드의 스티커가 스티커북에 붙어요.', 'sticker'],
] as const;

export default function HowItWorks() {
  useTitle('이용 방법');
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <div>
            <p className="eyebrow">How It Works</p>
            <h1 className="h1">STAMPY 이용 방법</h1>
            <p className="lead">체험단 신청부터 상품 교환까지, 탐험은 이렇게 이어져요.</p>
          </div>
          <Mascot pose="flag" size={110} />
        </div>
      </header>
      <div className="wrap">
        <ol className="flow8">
          {FLOW.map(([t, d, k], i) => (
            <Reveal as="li" key={k} delay={i * 50} className={'flow8-item k-' + k}>
              <span className="flow8-no num">{i + 1}</span>
              <b className="h3">{t}</b>
              <p className="small muted">{d}</p>
            </Reveal>
          ))}
        </ol>

        <section className="section" aria-labelledby="diff-title">
          <Reveal className="section-head"><p className="eyebrow">Sticker vs Stamp</p><h2 id="diff-title" className="h2">스티커와 스탬프는 달라요</h2></Reveal>
          <div className="diff-grid">
            <Reveal className="diff-card card diff-sticker">
              <div className="diff-art"><Sticker art="cake" size={90} tilt={-8} /><Sticker art="camera" size={76} tilt={8} /></div>
              <h3 className="h3"><StickerIcon /> 스티커 = 수집 기록</h3>
              <ul className="tick-list small">
                <li>승인된 체험단의 브랜드 스티커를 하나씩 모아요</li>
                <li>스티커북에 획득 날짜와 리뷰 기록이 남아요</li>
                <li><b>교환할 때 쓰이거나 사라지지 않아요</b></li>
              </ul>
              <Link to="/my/stickerbook" className="link small">나의 스티커북 →</Link>
            </Reveal>
            <Reveal className="diff-card card diff-stamp" delay={100}>
              <div className="diff-art"><StampImprint size={86} /><StampImprint size={70} /></div>
              <h3 className="h3"><StampIcon /> 스탬프 = 교환 재화</h3>
              <ul className="tick-list small">
                <li>리뷰 미션 승인 시 체험단마다 정해진 수만큼 적립돼요</li>
                <li>리워드샵에서 상품으로 교환하면 차감돼요</li>
                <li>모든 적립·차감·환급이 내역으로 남아요</li>
              </ul>
              <Link to="/my/stamps" className="link small">스탬프 내역 →</Link>
            </Reveal>
          </div>
        </section>

        <section className="section how-fair" aria-labelledby="fair-title">
          <div className="fair-grid">
            <Reveal>
              <p className="eyebrow">Fair Review Policy</p>
              <h2 id="fair-title" className="h2">솔직한 리뷰가 기본이에요</h2>
              <p className="lead" style={{ marginTop: 12 }}>스탬프는 경험과 성실한 미션 수행에 대한 보상이에요.</p>
              <ul className="check-two">
                <li className="yes"><b>검수에서 확인하는 것</b><span>실제로 체험했는지 · 미션 항목(사진, 기간, 정보)을 지켰는지 · 광고(제공) 표기를 넣었는지</span></li>
                <li className="no"><b>검수 기준이 아닌 것</b><span>평점 · 긍정적인 표현 · 브랜드에 대한 호감 · 추천 여부</span></li>
              </ul>
            </Reveal>
            <Reveal className="fair-card"><StampCard filled={6} total={10} animateFrom={3} note="승인된 미션만 찍혀요" /></Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="ex-title">
          <Reveal className="exchange card">
            <Chest size={150} open />
            <div>
              <h2 id="ex-title" className="h2">스탬프로 상품 교환하기</h2>
              <ol className="ex-steps"><li>리워드샵에서 상품 고르기</li><li>보유 스탬프·교환 조건 확인</li><li>배송 정보 입력</li><li>최종 확인 후 신청</li><li>서버가 잔액과 재고를 다시 확인하고 차감</li><li>배송 준비 → 발송 → 도착</li></ol>
              <p className="small muted">상품 준비가 시작되기 전에는 취소할 수 있고, 스탬프는 환급 기록과 함께 돌아와요.</p>
              <Link to="/rewards" className="btn btn-yellow">리워드샵 가기</Link>
            </div>
          </Reveal>
        </section>
        <p className="center"><Link to="/faq" className="link">더 궁금한 점은 FAQ에서 →</Link></p>
      </div>
    </>
  );
}
