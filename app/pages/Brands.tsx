import { useId, useState } from 'react';
import type { CategoryId } from '../api/types';
import { CATEGORIES } from '../data/catalog';
import { submitInquiry } from '../api/demo';
import { useAction } from '../api/hooks';
import { Field, Reveal, StampIcon, useTitle } from '../components/ui';
import { Mascot } from '../art/Mascot';
import { Island } from '../art/Island';
import { Sticker } from '../art/Sticker';
import { SvgFlag } from '../art/Deco';

const BENEFITS = [
  ['새로운 고객의 첫 체험', '아직 브랜드를 모르는 사람들이 제품과 공간을 직접 경험해요.', 'cup'],
  ['구체적이고 솔직한 리뷰', '사진, 사용 기간, 아쉬운 점까지 담긴 리뷰가 쌓여요.', 'notebook'],
  ['고객 피드백 수집', '리뷰와 미션 기록에서 제품 개선 힌트를 모을 수 있어요.', 'letter'],
  ['다시 찾게 하는 스탬프', '스탬프로 브랜드 상품을 교환하며 재방문과 재참여가 이어져요.', 'medal'],
  ['경험을 남기는 컬렉션', '브랜드 전용 스티커가 탐험가의 스티커북에 오래 남아요.', 'star'],
] as const;

export default function Brands() {
  useTitle('브랜드 제휴');
  const id = useId();
  const [form, setForm] = useState({ company: '', contact: '', email: '', category: 'beauty' as CategoryId, message: '', agree: false });
  const [done, setDone] = useState(false);
  const act = useAction(submitInquiry);
  const f = act.error?.fields ?? {};
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await act.run(form)) setDone(true);
  };
  return (
    <>
      <section className="brands-hero">
        <div className="wrap brands-hero-grid">
          <div>
            <p className="eyebrow">For Brands</p>
            <h1 className="h-display">당신의 브랜드를<br />새로운 탐험지로.</h1>
            <p className="lead">실제 소비자의 경험이 쌓여 더 깊은 브랜드 관계로 이어집니다.</p>
            <div className="row-btns" style={{ marginTop: 24 }}><a className="btn btn-primary" href="#inquiry" onClick={e => { e.preventDefault(); document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById(id + 'c')?.focus({ preventScroll: true }); }}>제휴 문의하기</a></div>
          </div>
          <div className="brands-art" aria-hidden="true">
            <svg viewBox="0 0 80 60" width="80" className="brands-flag"><SvgFlag x={20} y={56} s={1.2} color="#7652BA" /></svg>
            <Island cat="tech" top="#c3e2f6" side="#79b5df" size={300} />
            <Mascot pose="flag" size={110} className="brands-m" />
          </div>
        </div>
      </section>
      <div className="wrap">
        <section className="section" aria-labelledby="ben-title">
          <Reveal className="section-head"><p className="eyebrow">Why STAMPY</p><h2 id="ben-title" className="h2">브랜드가 얻는 것</h2></Reveal>
          <ul className="benefit-grid">
            {BENEFITS.map(([t, d, art], i) => (
              <Reveal as="li" key={t} delay={i * 60} className="benefit card"><Sticker art={art} size={64} tilt={i % 2 ? 6 : -6} /><b className="h3">{t}</b><p className="small muted">{d}</p></Reveal>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="ops-title">
          <Reveal className="section-head"><p className="eyebrow">How It Runs</p><h2 id="ops-title" className="h2">체험단은 이렇게 운영돼요</h2></Reveal>
          <ol className="ops-steps">
            {[['상담과 구성', '제품, 모집 인원, 채널, 일정, 스탬프 수를 함께 정해요.'], ['탐험지 등록', '보물지도의 섬과 체험단 목록에 브랜드가 소개돼요.'], ['신청과 선정', '신청서와 채널을 보고 함께 탐험가를 선정해요.'], ['체험과 리뷰', '탐험가가 직접 체험하고 리뷰를 올려요.'], ['검수와 지급', '운영팀이 미션 수행을 확인하고 스탬프를 지급해요.'], ['결과 리포트', '리뷰 링크와 피드백을 모아 전달해요.']].map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 50}><span className="num">{String(i + 1).padStart(2, '0')}</span><b>{t}</b><p className="small muted">{d}</p></Reveal>
            ))}
          </ol>
          <Reveal className="notice info" ><span><b>약속드릴 수 없는 것</b> · STAMPY는 높은 평점이나 긍정적인 리뷰를 보장하지 않아요. 리뷰 내용은 탐험가에게 맡기고, 모든 리뷰에는 광고(제공) 표기가 들어가요.</span></Reveal>
        </section>

        <section id="inquiry" className="section inquiry" aria-labelledby="iq-title">
          <div className="inquiry-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="iq-title" className="h2">제휴 문의</h2>
              <p className="lead" style={{ marginTop: 10 }}>브랜드 정보를 남겨 주시면 담당자가 체험단 구성을 제안드려요.</p>
              <ul className="dot-list small muted" style={{ marginTop: 16 }}><li>답변까지 영업일 기준 [N]일이 걸려요.</li><li>스탬프 1개의 상품 교환 기준과 비용은 상담에서 안내해요.</li></ul>
              <div className="inq-stamps" aria-hidden="true"><StampIcon size={44} /><StampIcon size={36} /><StampIcon size={30} /></div>
            </div>
            <div className="card inquiry-card">
              {done ? (
                <div className="done-box"><Mascot pose="joy" size={100} /><h3 className="h2">문의가 접수됐어요</h3><p className="muted">데모 환경이라 실제로 전송되지 않았어요. 운영 시에는 담당자에게 전달돼요.</p><button className="btn btn-sm" onClick={() => { setDone(false); setForm({ ...form, message: '' }); }}>새 문의 작성</button></div>
              ) : (
                <form className="form" onSubmit={submit} noValidate>
                  <div className="form-2">
                    <Field id={id + 'c'} label="브랜드명" error={f.company}><input id={id + 'c'} className="input" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} autoComplete="organization" /></Field>
                    <Field id={id + 'p'} label="담당자" error={f.contact}><input id={id + 'p'} className="input" value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} autoComplete="name" /></Field>
                  </div>
                  <Field id={id + 'e'} label="이메일" error={f.email}><input id={id + 'e'} className="input" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} autoComplete="email" /></Field>
                  <Field id={id + 'k'} label="카테고리"><select id={id + 'k'} className="select" value={form.category} onChange={e => setForm({ ...form, category: e.target.value as CategoryId })}>{CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></Field>
                  <Field id={id + 'm'} label="문의 내용" error={f.message} hint="제품, 원하는 인원과 일정 등을 자유롭게 적어 주세요."><textarea id={id + 'm'} className="textarea" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} maxLength={1000} /></Field>
                  <label className="check"><input type="checkbox" checked={form.agree} onChange={e => setForm({ ...form, agree: e.target.checked })} /><span>문의 응대를 위한 개인정보(이름, 이메일) 수집에 동의해요. 상담 종료 후 [보관 기간] 뒤 파기돼요.</span></label>
                  {f.agree && <span className="err">{f.agree}</span>}
                  <button className="btn btn-primary btn-block" disabled={act.pending}>{act.pending ? '보내는 중…' : '문의 보내기'}</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
