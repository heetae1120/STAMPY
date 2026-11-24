// For brands & store owners. Upgraded in place from the original brand page:
// same submitInquiry flow (demo storage), now with offline-store fields.
import { useId, useRef, useState } from 'react';
import type { BusinessType, CampaignKind } from '../api/types';
import { submitInquiry, type InquiryForm } from '../api/demo';
import { useAction } from '../api/hooks';
import { Link } from '../router';
import { DemoBadge, Field, Reveal, newKey, useTitle } from '../components/ui';
import { Mascot } from '../art/Mascot';
import { Sticker } from '../art/Sticker';
import { markerHtml } from '../components/map/NaverExperienceMap';

const BUSINESS: { id: BusinessType; label: string; art: string; example: string }[] = [
  { id: 'cafe', label: '카페', art: 'cup', example: '신메뉴 음료 2잔 + 디저트 1개, 공간과 메뉴를 함께 소개' },
  { id: 'restaurant', label: '식당', art: 'noodle', example: '점심 대표 메뉴 2인분, 메뉴판·주차 정보까지 기록' },
  { id: 'bakery', label: '베이커리', art: 'bread', example: '오늘의 빵 바구니, 굽는 시간과 대표 메뉴 소개' },
  { id: 'beauty', label: '뷰티·미용', art: 'scissors', example: '커트·드라이 1회, 상담 과정과 시술 전후 사진' },
  { id: 'workshop', label: '공방·클래스', art: 'bowl', example: '원데이 클래스 1인, 수업 과정과 완성품 기록' },
  { id: 'local', label: '지역 서비스', art: 'letter', example: '세탁·청소 서비스 이용권, 예약부터 이용까지 정리' },
];
const PRODUCT: { id: BusinessType; label: string } = { id: 'product', label: '제품 브랜드(배송형)' };
const KINDS: [CampaignKind, string][] = [['visit', '방문형 (매장 방문)'], ['delivery', '배송형 (제품 배송)'], ['editorial', '기자단 (정보형 글)']];

const BENEFITS = [
  ['처음 오는 손님의 실제 방문', '아직 가게를 모르는 손님이 직접 방문해 메뉴와 공간을 경험해요.'],
  ['지역 기반 체험단 탐색', '검증된 매장은 리뷰어의 ‘내 주변 지도’에 위치와 함께 표시돼요.'],
  ['리뷰어 모집과 선정', '신청서와 채널을 보고 매장에 맞는 리뷰어를 함께 고를 수 있어요.'],
  ['체험 일정과 미션 관리', '방문 기간·시간·예약 방법과 리뷰 미션을 한 페이지에 안내해요.'],
  ['솔직한 후기와 피드백', '사진, 이용 과정, 아쉬운 점까지 담긴 실제 경험이 쌓여요.'],
  ['리뷰 제출 현황 확인', '누가 언제 리뷰를 제출했는지, 검수 상태와 함께 확인해요.'],
];

const STEPS = [
  ['제휴 문의', '아래 문의 폼에 매장 정보와 원하는 체험단을 남겨요.'],
  ['매장·캠페인 등록', '주소와 위치를 확인하고 제공 메뉴, 인원, 방문 일정을 정해요.'],
  ['체험단 모집', '체험단 목록과 내 주변 지도에 모집 공고가 올라가요.'],
  ['리뷰어 선정', '신청자의 채널과 체험 계획을 보고 선정해요.'],
  ['방문과 체험', '선정된 리뷰어가 예약한 날짜에 매장을 방문해요.'],
  ['리뷰 제출과 결과 확인', '제출된 리뷰를 검수하고 링크를 모아 확인해요.'],
];

const OPS: [string, 'now' | 'demo' | 'later', string][] = [
  ['모집 공고 노출 (목록·상세)', 'now', '체험단 목록과 상세 페이지에 노출'],
  ['내 주변 지도 노출', 'demo', '주소·좌표 검증과 노출 승인 후 표시. 운영 환경에는 유효한 네이버 지도 키가 필요해요'],
  ['신청자 확인과 선정', 'demo', '운영 콘솔에서 선정·미선정 처리'],
  ['방문 일정·예약 안내', 'demo', '상세 페이지에 기간·시간·예약 방법 안내 (예약 시스템 연동은 예정)'],
  ['리뷰 제출 현황과 검수', 'demo', '제출 링크 확인, 미션 기준 검수, 스탬프 지급'],
  ['사장님 전용 대시보드', 'later', '내 매장 체험단만 보는 화면'],
  ['비용 결제·정산', 'later', '운영 정책 확정 후 제공'],
];

const FAQ: [string, string][] = [
  ['어떤 매장이 신청할 수 있나요?', '카페, 식당, 베이커리, 미용실, 공방처럼 손님이 직접 방문하는 매장과 지역 서비스, 제품 브랜드 모두 문의할 수 있어요. 실제로 운영 중인지와 주소를 확인한 뒤 진행해요.'],
  ['체험단은 몇 명까지 모집할 수 있나요?', '매장 규모와 제공 메뉴에 맞춰 상담에서 정해요. 아직 최소·최대 인원 기준은 확정되지 않았어요.'],
  ['제공 메뉴는 직접 정하나요?', '네. 제공할 메뉴나 서비스, 동반 가능 여부, 방문 가능한 요일과 시간은 사장님이 정하고 함께 다듬어요.'],
  ['리뷰어 선정은 어떻게 진행하나요?', '신청서의 체험 계획과 리뷰 채널을 보고 선정해요. 직접 고르거나 운영팀에 맡길 수 있도록 준비하고 있어요.'],
  ['방문 일정은 어떻게 조율하나요?', '공고에 방문 기간, 시간, 예약 방법을 적어 두고 선정된 리뷰어가 그 안에서 예약해요. 예약 시스템 연동은 아직 제공하지 않아요.'],
  ['체험단 운영 비용은 얼마인가요?', '비용 정책이 아직 확정되지 않았어요. 상담에서 안내해 드려요.'],
  ['모집 후 리뷰는 어떻게 확인하나요?', '제출된 리뷰 링크와 검수 상태를 확인할 수 있어요. 지금은 운영 콘솔에서 데모로 제공되고, 사장님 전용 화면은 준비 중이에요.'],
  ['네이버 지도에는 어떻게 표시되나요?', '매장 주소와 실제 위치가 일치하는지 확인하고 노출을 승인한 매장만 ‘내 주변 지도’에 빨간 도장 마커로 표시돼요. 네이버 지도 서비스 자체의 장소 정보나 검색 순위와는 관계가 없어요.'],
];

const emptyForm: InquiryForm = { company: '', contact: '', phone: '', email: '', businessType: '', location: '', campaignKind: '', message: '', agree: false, naverPlaceUrl: '', instagramUrl: '', offerMenu: '', headcount: '', period: '' };

function MapMock() {
  const pins: [number, number, string][] = [[22, 38, 'cafe'], [48, 30, 'restaurant'], [64, 58, 'beauty'], [36, 66, 'workshop']];
  return (
    <div className="brand-mapmock" aria-hidden="true">
      <svg className="grid" viewBox="0 0 400 260" preserveAspectRatio="none">
        <rect width="400" height="260" fill="#eef3ec" />
        <path d="M0 170C80 150 140 190 220 160S340 120 400 140" fill="none" stroke="#fff" strokeWidth="16" />
        <path d="M120 0C130 80 100 160 140 260M290 0C270 90 300 170 280 260" fill="none" stroke="#fff" strokeWidth="10" />
        <path d="M0 220C60 210 120 230 170 260" fill="none" stroke="#cfe3f3" strokeWidth="22" />
        <rect x="30" y="20" width="60" height="40" rx="6" fill="#e3ecdf" /><rect x="310" y="40" width="70" height="50" rx="6" fill="#e3ecdf" />
      </svg>
      {pins.map(([x, y, cat], i) => <span key={i} className="mock-pin" style={{ left: x + '%', top: y + '%' }} dangerouslySetInnerHTML={{ __html: markerHtml({ category: cat, demo: false, selected: i === 1, label: '', decorative: true }) }} />)}
      <div className="mock-card"><b>우리 매장 이름</b><span>망원동 · 카페 · 모집 중 D-5</span><span className="mock-btn">상세 보기</span></div>
      <span className="mock-tag">화면 예시</span>
    </div>
  );
}

export default function Brands() {
  useTitle('사장님·브랜드 제휴');
  const id = useId();
  const [form, setForm] = useState<InquiryForm>(emptyForm);
  const [done, setDone] = useState(false);
  const key = useRef(newKey());
  const act = useAction(submitInquiry);
  const f = act.error?.fields ?? {};
  const set = (k: keyof InquiryForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (act.pending) return;
    if (await act.run(form, key.current)) setDone(true);
    else requestAnimationFrame(() => document.querySelector<HTMLElement>('.inquiry-card .has-err input, .inquiry-card .has-err select, .inquiry-card .has-err textarea')?.focus());
  };
  const toForm = (e?: React.MouseEvent) => {
    e?.preventDefault();
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById(id + 'c')?.focus({ preventScroll: true });
  };

  return (
    <>
      <section className="brands-hero">
        <div className="wrap brands-hero-grid">
          <div>
            <p className="eyebrow">For Store Owners & Brands</p>
            <h1 className="h-display">리뷰어가 매장에 와서<br />사진과 후기를 남겨요</h1>
            <p className="lead">제공할 메뉴와 방문 기간을 정해 체험단을 모집하면,<br />선정된 블로그·인스타그램 리뷰어가 방문하고 리뷰 링크를 제출해요.</p>
            <div className="row-btns" style={{ marginTop: 24 }}>
              <a className="btn btn-primary" href="#inquiry" onClick={toForm}>우리 매장 체험단 문의하기</a>
              <a className="btn" href="#how" onClick={e => { e.preventDefault(); document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' }); }}>진행 방식 보기</a>
            </div>
            <ul className="audience" aria-label="이런 분께 맞아요">
              {['카페', '식당', '베이커리', '미용실', '공방', '지역 서비스', '제품 브랜드'].map(a => <li key={a}>{a}</li>)}
            </ul>
          </div>
          <div className="brands-visual" aria-hidden="true">
            <img src="assets/hero-03/cafe.jpg" alt="" className="bv-photo" />
            <div className="bv-review"><span className="badge badge-demo">예시 리뷰</span><b>창가 자리가 예쁜 동네 카페</b><span>라테 거품이 고왔고, 주말엔 자리가 금방 차요. 디저트는 조금 달았어요.</span></div>
            <span className="bv-pin" dangerouslySetInnerHTML={{ __html: markerHtml({ category: 'cafe', demo: false, selected: true, label: '', decorative: true }) }} />
            <Mascot pose="flag" size={92} className="bv-m" />
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="section" aria-labelledby="ben-title">
          <div className="ben-split">
            <Reveal>
              <h2 id="ben-title" className="h2">STAMPY로 할 수 있는 일</h2>
              <p className="lead" style={{ marginTop: 12 }}>매출 상승이나 검색 상위 노출은 약속하지 않아요. 실제 방문과 솔직한 기록을 만드는 데 집중해요.</p>
            </Reveal>
            <dl className="ben-list">
              {BENEFITS.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}
            </dl>
          </div>
        </section>

        <section id="how" className="section" aria-labelledby="ops-title">
          <h2 id="ops-title" className="h2 ops-title">문의부터 결과 확인까지 6단계</h2>
          <ol className="ops-line">
            {STEPS.map(([t, d], i) => <li key={t}><span className="num" aria-hidden="true">{i + 1}</span><b>{t}</b><p>{d}</p></li>)}
          </ol>
        </section>

        <section className="section" aria-labelledby="biz-title">
          <div className="biz-head">
            <h2 id="biz-title" className="h2">업종별 체험단 구성 예시</h2>
            <p className="small muted">실제 제휴 사례가 아니라 구성을 가늠해 보는 예시예요. <DemoBadge text="예시" /></p>
          </div>
          <table className="biz-table">
            <thead><tr><th scope="col">업종</th><th scope="col">제공 예시와 리뷰에 담기는 내용</th></tr></thead>
            <tbody>{BUSINESS.map(b => <tr key={b.id}><th scope="row"><Sticker art={b.art} size={32} />{b.label}</th><td>{b.example}</td></tr>)}</tbody>
          </table>
        </section>

        <section className="section loc-sec" aria-labelledby="loc-title">
          <div className="loc-grid">
            <Reveal>
              <h2 id="loc-title" className="h2">근처 리뷰어의 지도에 매장이 표시돼요</h2>
              <p className="lead" style={{ marginTop: 12 }}>방문형 체험단은 리뷰어가 보는 ‘내 주변 지도’(네이버 지도)에 매장 위치와 함께 나타나요.</p>
              <ul className="tick-list small" style={{ marginTop: 16 }}>
                <li>매장 주소와 지도 위치가 일치하는지 운영팀이 확인한 뒤 노출해요.</li>
                <li>마커를 누르면 매장명, 제공 혜택, 마감일, 상세 보기가 나타나요.</li>
                <li>지역·업종·모집 상태로 필터링되고, 리뷰어는 현재 위치 주변도 검색할 수 있어요.</li>
              </ul>
              <Link to="/experiences?view=map" className="btn btn-sm" style={{ marginTop: 18 }}>내 주변 지도 화면 보기</Link>
            </Reveal>
            <Reveal><MapMock /></Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="op-title">
          <div className="biz-head">
            <h2 id="op-title" className="h2">지금 되는 기능, 준비 중인 기능</h2>
            <p className="small muted">데모로 체험할 수 있는 기능과 서버 연결 후 열리는 기능을 나눠 적었어요.</p>
          </div>
          <div className="table-wrap"><table className="adm-table ops-table">
            <thead><tr><th>기능</th><th>상태</th><th>내용</th></tr></thead>
            <tbody>{OPS.map(([t, st, d]) => <tr key={t}><td><b>{t}</b></td><td><span className={'badge ' + (st === 'now' ? 'badge-open' : st === 'demo' ? 'badge-demo' : 'badge-closed')}>{st === 'now' ? '제공 중' : st === 'demo' ? '데모로 체험 가능' : '연동 예정'}</span></td><td className="small">{d}</td></tr>)}</tbody>
          </table></div>
        </section>

        <section className="section" aria-labelledby="bfaq-title">
          <h2 id="bfaq-title" className="h2 faq-narrow-title">사장님들이 자주 묻는 질문</h2>
          <div className="faq-narrow">
            {FAQ.map(([q, a]) => <details key={q} className="faq-item"><summary>{q}<span aria-hidden="true" /></summary><p>{a}</p></details>)}
          </div>
        </section>

        <section id="inquiry" className="section inquiry" aria-labelledby="iq-title">
          <div className="inquiry-grid">
            <div>
              <h2 id="iq-title" className="h2">우리 매장 체험단 문의</h2>
              <p className="lead" style={{ marginTop: 10 }}>매장 정보와 원하는 체험단을 남겨 주세요. 담당자가 구성과 일정을 제안드려요.</p>
              <p className="notice small" style={{ marginTop: 16 }}><span><b>데모 안내</b> · 지금은 문의가 이 브라우저에만 저장되고 담당자에게 전송되지 않아요. 실제 접수는 서버 연동 후 열려요.</span></p>
              <ul className="dot-list small muted" style={{ marginTop: 14 }}><li>답변 기간과 비용 정책은 확정 후 안내해요.</li><li>사업자 정보 확인은 상담 단계에서 진행해요.</li></ul>
            </div>
            <div className="card inquiry-card">
              {done ? (
                <div className="done-box" role="status">
                  <Mascot pose="stamp" size={96} />
                  <h3 className="h2">데모 문의가 저장됐어요</h3>
                  <p className="muted">실제로 전송되지는 않았어요. 운영자 데모 계정의 운영 콘솔 ‘제휴 문의’에서 저장된 내용을 확인할 수 있어요.</p>
                  <button className="btn btn-sm" onClick={() => { setDone(false); setForm(emptyForm); act.setError(null); key.current = newKey(); }}>새 문의 작성</button>
                </div>
              ) : (
                <form className="form" onSubmit={submit} noValidate aria-busy={act.pending}>
                  <div className="form-2">
                    <Field id={id + 'c'} label="매장명 또는 브랜드명 *" error={f.company}><input id={id + 'c'} className="input" value={form.company} onChange={set('company')} autoComplete="organization" /></Field>
                    <Field id={id + 'p'} label="담당자명 *" error={f.contact}><input id={id + 'p'} className="input" value={form.contact} onChange={set('contact')} autoComplete="name" /></Field>
                  </div>
                  <div className="form-2">
                    <Field id={id + 't'} label="연락처 *" error={f.phone}><input id={id + 't'} className="input" value={form.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" /></Field>
                    <Field id={id + 'e'} label="이메일 *" error={f.email}><input id={id + 'e'} className="input" type="email" value={form.email} onChange={set('email')} autoComplete="email" /></Field>
                  </div>
                  <div className="form-2">
                    <Field id={id + 'b'} label="업종 *" error={f.businessType}>
                      <select id={id + 'b'} className="select" value={form.businessType} onChange={set('businessType')}>
                        <option value="">선택해 주세요</option>
                        {[...BUSINESS, PRODUCT].map(b => <option key={b.id} value={b.id}>{b.label}</option>)}
                      </select>
                    </Field>
                    <Field id={id + 'l'} label="매장 위치 또는 주소 *" error={f.location} hint="예: 서울 마포구 망원동 / 온라인"><input id={id + 'l'} className="input" value={form.location} onChange={set('location')} autoComplete="street-address" /></Field>
                  </div>
                  <fieldset className="field">
                    <legend className="label">체험단 유형 *</legend>
                    <div className="chip-row wrap-chips">{KINDS.map(([v, l]) => <label key={v} className={'chip' + (form.campaignKind === v ? ' is-on' : '')}><input type="radio" className="sr-only" name="kind" checked={form.campaignKind === v} onChange={() => setForm({ ...form, campaignKind: v })} />{l}</label>)}</div>
                    {f.campaignKind && <span className="err">{f.campaignKind}</span>}
                  </fieldset>
                  <Field id={id + 'm'} label="문의 내용 *" error={f.message} hint={`${form.message.length}/1000 · 원하는 체험단 구성, 궁금한 점을 자유롭게 적어 주세요.`}><textarea id={id + 'm'} className="textarea" value={form.message} onChange={set('message')} maxLength={1000} /></Field>
                  <details className="optional">
                    <summary>선택 정보 더 입력하기</summary>
                    <div className="form">
                      <div className="form-2">
                        <Field id={id + 'np'} label="네이버 플레이스 링크" error={f.naverPlaceUrl}><input id={id + 'np'} className="input" type="url" value={form.naverPlaceUrl} onChange={set('naverPlaceUrl')} placeholder="https://naver.me/..." /></Field>
                        <Field id={id + 'ig'} label="인스타그램 URL" error={f.instagramUrl}><input id={id + 'ig'} className="input" type="url" value={form.instagramUrl} onChange={set('instagramUrl')} placeholder="https://www.instagram.com/..." /></Field>
                      </div>
                      <Field id={id + 'om'} label="제공 희망 메뉴·서비스"><input id={id + 'om'} className="input" value={form.offerMenu} onChange={set('offerMenu')} /></Field>
                      <div className="form-2">
                        <Field id={id + 'hc'} label="모집 희망 인원" error={f.headcount}><input id={id + 'hc'} className="input" inputMode="numeric" value={form.headcount} onChange={set('headcount')} placeholder="예: 5" /></Field>
                        <Field id={id + 'pd'} label="희망 진행 시기"><input id={id + 'pd'} className="input" value={form.period} onChange={set('period')} placeholder="예: 다음 달 둘째 주" /></Field>
                      </div>
                    </div>
                  </details>
                  <label className="check"><input type="checkbox" checked={form.agree} onChange={e => setForm({ ...form, agree: e.target.checked })} /><span>문의 응대를 위한 개인정보(담당자명, 연락처, 이메일) 수집·이용에 동의해요. 보관 기간은 [보관 기간 확정 필요]이에요. *</span></label>
                  {f.agree && <span className="err">{f.agree}</span>}
                  {act.error && !Object.keys(f).length && <p className="form-error" role="alert">{act.error.message}</p>}
                  <button className="btn btn-primary btn-block" disabled={act.pending}>{act.pending ? '저장하는 중…' : '문의 보내기 (데모)'}</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
