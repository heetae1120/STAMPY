import { useId, useState } from 'react';
import type { Application, Campaign, Channel } from '../api/types';
import { CHANNEL_LABEL, KIND_LABEL, brandById, campaignStatus, categoryById, stickerById } from '../data/catalog';
import { apply, cancelApplication, getCampaign, type ApplyForm } from '../api/demo';
import { useAction, useAsync, useDemo, useSession } from '../api/hooks';
import { Link, useLocation } from '../router';
import { CategoryTag, StampCount } from '../components/Cards';
import { DemoBadge, Empty, ErrorBox, Field, Loader, Modal, ProductPhoto, StatusBadge, dday, fmtDate, fmtFull, useTitle, useToast } from '../components/ui';
import { Sticker } from '../art/Sticker';
import { Mascot } from '../art/Mascot';

function ApplyModal({ c, onClose }: { c: Campaign; onClose: () => void }) {
  const user = useSession()!;
  const id = useId();
  const [form, setForm] = useState<ApplyForm>({ channel: c.channels[0], channelUrl: user.channels[c.channels[0]] ?? '', plan: '', agree: false });
  const [done, setDone] = useState(false);
  const act = useAction(apply);
  const toast = useToast();
  const f = act.error?.fields ?? {};
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = await act.run(c.id, form);
    if (r) { setDone(true); toast('체험단 신청이 접수됐어요 (데모)'); }
  };
  if (done) {
    return (
      <Modal onClose={onClose} labelledBy={id + '-done'}>
        <div className="done-box">
          <Mascot pose="joy" size={110} />
          <h2 id={id + '-done'} className="h2">신청 완료!</h2>
          <p className="muted">{c.title} 체험단에 신청했어요.</p>
          <ol className="next-steps">
            <li><b>{fmtDate(c.announceAt)}</b> 선정 결과 발표 (마이페이지에서 확인)</li>
            <li>선정되면 제품을 받거나 방문해 직접 체험해요</li>
            <li><b>{fmtDate(c.reviewDeadline)}</b>까지 리뷰를 제출하고 검수를 받아요</li>
          </ol>
          <p className="notice small"><span><b>데모 안내</b> · 실제 신청은 접수되지 않아요. 운영 대시보드(운영자 데모 계정)에서 선정 처리를 해볼 수 있어요.</span></p>
          <div className="row-btns"><Link to="/my/experiences" className="btn btn-primary btn-sm">신청 내역 보기</Link><button className="btn btn-sm" onClick={onClose}>계속 둘러보기</button></div>
        </div>
      </Modal>
    );
  }
  return (
    <Modal title="체험단 신청하기" onClose={onClose}>
      <form className="form" onSubmit={submit} noValidate>
        <p className="muted small" style={{ marginTop: -6 }}>{c.title}</p>
        <fieldset className="field">
          <legend className="label">리뷰를 올릴 채널</legend>
          <div className="chip-row">
            {c.channels.map(ch => (
              <label key={ch} className={'chip' + (form.channel === ch ? ' is-on' : '')}>
                <input type="radio" name="channel" className="sr-only" checked={form.channel === ch} onChange={() => setForm({ ...form, channel: ch as Channel, channelUrl: user.channels[ch] ?? form.channelUrl })} />
                {CHANNEL_LABEL[ch]}
              </label>
            ))}
          </div>
          {f.channel && <span className="err">{f.channel}</span>}
        </fieldset>
        <Field id={id + '-url'} label="채널 주소" error={f.channelUrl} hint="https:// 로 시작하는 블로그·계정 주소">
          <input id={id + '-url'} className="input" type="url" inputMode="url" value={form.channelUrl} onChange={e => setForm({ ...form, channelUrl: e.target.value })} placeholder="https://blog.naver.com/..." aria-invalid={!!f.channelUrl} autoFocus />
        </Field>
        <Field id={id + '-plan'} label="어떻게 체험하고 기록할까요?" error={f.plan} hint={`${form.plan.length}/300 · 평점이나 좋은 평가를 약속할 필요는 없어요`}>
          <textarea id={id + '-plan'} className="textarea" maxLength={300} value={form.plan} onChange={e => setForm({ ...form, plan: e.target.value })} placeholder="예: 일주일 동안 아침저녁으로 사용하며 사용 전후 사진과 느낀 점을 솔직하게 기록할게요." aria-invalid={!!f.plan} />
        </Field>
        <label className="check">
          <input type="checkbox" checked={form.agree} onChange={e => setForm({ ...form, agree: e.target.checked })} />
          <span>유의사항을 확인했고, 리뷰에 광고(제공) 표기를 넣을게요.</span>
        </label>
        {f.agree && <span className="err">{f.agree}</span>}
        {act.error && !Object.keys(f).length && <p className="form-error" role="alert">{act.error.message}</p>}
        <button className="btn btn-primary btn-block" disabled={act.pending}>{act.pending ? '신청하는 중…' : '신청하기'}</button>
        <p className="tiny muted center">데모 환경이라 이 브라우저에만 저장돼요.</p>
      </form>
    </Modal>
  );
}

function ApplyPanel({ c, applied, mine }: { c: Campaign; applied: number; mine?: Application }) {
  const user = useSession();
  const status = campaignStatus(c);
  const [open, setOpen] = useState(false);
  const cancel = useAction(cancelApplication);
  const review = useDemo(s => mine ? s.reviews.filter(r => r.applicationId === mine.id).slice(-1)[0] : undefined);
  const { full } = useLocation();
  let action;
  if (mine && mine.status !== 'cancelled') {
    const msg = {
      applied: ['신청 완료', `${fmtDate(c.announceAt)}에 선정 결과를 알려드려요.`],
      selected: review?.status === 'submitted' ? ['리뷰 검수 중', '운영팀이 미션 수행을 확인하고 있어요.'] : ['선정됐어요!', `${fmtDate(c.reviewDeadline)}까지 리뷰 미션을 제출해 주세요.`],
      completed: ['미션 완료', '스탬프와 스티커가 지급됐어요.'],
      rejected: ['이번엔 선정되지 않았어요', '다른 섬의 체험단도 둘러보세요.'],
    }[mine.status as 'applied' | 'selected' | 'completed' | 'rejected'];
    action = (
      <div className={'apply-state state-' + mine.status}>
        <b>{msg[0]}</b><span className="small">{msg[1]}</span>
        {mine.status === 'applied' && <button className="btn btn-sm btn-ghost" disabled={cancel.pending} onClick={() => cancel.run(mine.id)}>신청 취소</button>}
        {mine.status === 'selected' && review?.status !== 'submitted' && <Link to="/my/reviews" className="btn btn-sm btn-primary">리뷰 미션 하러 가기</Link>}
        {mine.status === 'completed' && <Link to="/my/stickerbook" className="btn btn-sm">스티커북 보기</Link>}
        {cancel.error && <span className="err">{cancel.error.message}</span>}
      </div>
    );
  } else if (status === 'upcoming') {
    action = <button className="btn btn-block" disabled>{fmtDate(c.recruitStart)} 모집 시작</button>;
  } else if (status === 'closed') {
    action = <button className="btn btn-block" disabled>모집이 마감됐어요</button>;
  } else if (!user) {
    action = <Link to={'/login?next=' + encodeURIComponent(full)} className="btn btn-primary btn-block">로그인하고 신청하기</Link>;
  } else {
    action = <button className="btn btn-primary btn-block" onClick={() => setOpen(true)}>체험단 신청하기</button>;
  }
  return (
    <aside className="apply-panel card" aria-label="신청 정보">
      <div className="xcard-meta"><StatusBadge status={status} /><span className="badge">{KIND_LABEL[c.kind]}</span>{c.demo && <DemoBadge />}</div>
      <p className="xcard-brand">{brandById(c.brandId).name}</p>
      <h1 className="h2">{c.title}</h1>
      <p className="muted">{c.summary}</p>
      <dl className="facts">
        <div><dt>모집 기간</dt><dd>{fmtFull(c.recruitStart)} – {fmtFull(c.recruitEnd)} {status === 'open' && <b className="dd">{dday(c.recruitEnd)}</b>}</dd></div>
        <div><dt>선정 인원</dt><dd>{c.quota}명 <span className="muted small">(신청 {applied}명)</span></dd></div>
        <div><dt>선정 발표</dt><dd>{fmtFull(c.announceAt)}</dd></div>
        <div><dt>리뷰 마감</dt><dd>{fmtFull(c.reviewDeadline)}</dd></div>
        <div><dt>제공 혜택</dt><dd><b>{c.benefit}</b></dd></div>
      </dl>
      <div className="reward-line">
        <StampCount n={c.stamps} />
        <span className="small">+ 스티커 <b>{stickerById(c.stickerId).name}</b></span>
        <Sticker art={stickerById(c.stickerId).art} size={44} tilt={8} />
      </div>
      <p className="tiny muted">리뷰 미션이 검수·승인되면 지급돼요.</p>
      <div className="apply-action">{action}</div>
      {open && <ApplyModal c={c} onClose={() => setOpen(false)} />}
    </aside>
  );
}

export default function ExperienceDetail({ params }: { params: Record<string, string> }) {
  const res = useAsync(() => getCampaign(params.slug), [params.slug]);
  useTitle(res.data?.campaign.title ?? '체험단 상세');
  if (res.loading && !res.data) return <Loader />;
  if (res.error) return res.error.code === 'NOT_FOUND'
    ? <div className="wrap section"><Empty level={1} pose="discover" title="이 체험단을 찾을 수 없어요" action={<Link className="btn btn-sm" to="/experiences">체험단 목록으로</Link>}>주소가 바뀌었거나 종료된 체험단일 수 있어요.</Empty></div>
    : <div className="wrap section"><ErrorBox message={res.error.message} onRetry={res.reload} /></div>;
  const { campaign: c, applied, mine } = res.data!;
  const cat = categoryById(c.category);
  const brand = brandById(c.brandId);
  const sticker = stickerById(c.stickerId);
  const status = campaignStatus(c);
  return (
    <div className="wrap detail">
      <nav className="crumbs" aria-label="현재 위치"><Link to="/experiences">체험단</Link><span aria-hidden="true">›</span><Link to={'/experiences?category=' + c.category}>{cat.island}</Link></nav>
      <div className="detail-grid">
        <div className="detail-main">
          <div className="detail-photo">
            <ProductPhoto campaign={c} />
            <CategoryTag category={c.category} stickerArt={sticker.art} />
          </div>
          <section className="detail-sec">
            <h2 className="h3">브랜드 소개</h2>
            <div className="brand-row"><span className="brand-badge" style={{ background: cat.color }}>{brand.name.slice(0, 1)}</span><div><b>{brand.name}</b> {brand.demo && <DemoBadge />}<p className="muted small" style={{ margin: 0 }}>{brand.tagline} · {brand.intro}</p></div></div>
          </section>
          <section className="detail-sec">
            <h2 className="h3">제공 혜택</h2>
            <p><b>{c.benefit}</b>{c.location && <> · 방문 지역 {c.location}</>}</p>
          </section>
          <section className="detail-sec">
            <h2 className="h3">리뷰 미션</h2>
            <ul className="tick-list">{c.mission.map(m => <li key={m}>{m}</li>)}</ul>
            <p className="small muted">리뷰 채널: {c.channels.map(ch => CHANNEL_LABEL[ch]).join(', ')}</p>
          </section>
          <section className="detail-sec stamp-rule">
            <h2 className="h3">스탬프 지급 조건</h2>
            <ol className="rule-flow"><li>리뷰 제출</li><li>운영팀 검수</li><li>승인</li><li>스탬프 {c.stamps}개 + 스티커</li></ol>
            <p className="small">검수에서는 <b>직접 체험했는지, 미션 항목과 광고 표기를 지켰는지</b>만 확인해요. 평점이나 긍정적인 내용은 승인 조건이 아니에요. 같은 리뷰로는 한 번만 지급돼요.</p>
          </section>
          <section className="detail-sec">
            <h2 className="h3">신청 자격과 참여 조건</h2>
            <ul className="tick-list">{[...c.eligibility, ...c.conditions].map(m => <li key={m}>{m}</li>)}</ul>
          </section>
          <section className="detail-sec">
            <h2 className="h3">꼭 읽어 주세요</h2>
            <ul className="dot-list">{c.notices.map(m => <li key={m}>{m}</li>)}</ul>
          </section>
          <section className="detail-sec">
            <h2 className="h3">탐험 일정</h2>
            <ol className="timeline">
              <li className={status !== 'upcoming' ? 'is-past' : ''}><b>{fmtDate(c.recruitStart)}</b>모집 시작</li>
              <li className={status === 'closed' ? 'is-past' : ''}><b>{fmtDate(c.recruitEnd)}</b>모집 마감</li>
              <li><b>{fmtDate(c.announceAt)}</b>선정 발표</li>
              <li><b>{fmtDate(c.reviewDeadline)}</b>리뷰 제출 마감</li>
            </ol>
          </section>
        </div>
        <ApplyPanel c={c} applied={applied} mine={mine} />
      </div>
    </div>
  );
}
