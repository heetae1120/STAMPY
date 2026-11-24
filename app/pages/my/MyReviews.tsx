import { useId, useState } from 'react';
import type { Application, Campaign, Review } from '../../api/types';
import { campaignById, submitReview, type ReviewForm } from '../../api/demo';
import { useAction, useDemo } from '../../api/hooks';
import { CHANNEL_LABEL } from '../../data/catalog';
import { Link } from '../../router';
import { Empty, Field, Modal, fmtDate, useTitle, useToast } from '../../components/ui';
import { StampCount } from '../../components/Cards';
import { MyFrame, REVIEW_STATUS } from './shared';

function SubmitModal({ a, c, prev, onClose }: { a: Application; c: Campaign; prev?: Review; onClose: () => void }) {
  const id = useId();
  const [form, setForm] = useState<ReviewForm>({ url: prev?.url ?? '', memo: '', disclosure: false, experienced: false });
  const act = useAction(submitReview);
  const toast = useToast();
  const f = act.error?.fields ?? {};
  return (
    <Modal title="리뷰 미션 제출" onClose={onClose}>
      <form className="form" noValidate onSubmit={async e => { e.preventDefault(); if (await act.run(a.id, form)) { toast('리뷰가 제출됐어요. 검수 후 스탬프가 지급돼요'); onClose(); } }}>
        <p className="small muted" style={{ marginTop: -6 }}>{c.title} · {CHANNEL_LABEL[a.channel]}</p>
        {prev?.status === 'changes_requested' && <p className="notice bad small"><span><b>보완 요청</b> · {prev.decisionNote}</span></p>}
        <div className="mission-box">
          <b className="small">미션 체크리스트</b>
          <ul className="tick-list small">{c.mission.map(m => <li key={m}>{m}</li>)}</ul>
        </div>
        <Field id={id + 'u'} label="리뷰 주소" error={f.url} hint="https:// 로 시작하는 게시물 주소"><input id={id + 'u'} className="input" type="url" inputMode="url" value={form.url} onChange={e => setForm({ ...form, url: e.target.value })} autoFocus /></Field>
        <Field id={id + 'm'} label="운영팀에 남길 말 (선택)" error={f.memo}><textarea id={id + 'm'} className="textarea" style={{ minHeight: 80 }} maxLength={300} value={form.memo} onChange={e => setForm({ ...form, memo: e.target.value })} /></Field>
        <label className="check"><input type="checkbox" checked={form.experienced} onChange={e => setForm({ ...form, experienced: e.target.checked })} /><span>직접 체험한 내용으로 작성했어요.</span></label>
        {f.experienced && <span className="err">{f.experienced}</span>}
        <label className="check"><input type="checkbox" checked={form.disclosure} onChange={e => setForm({ ...form, disclosure: e.target.checked })} /><span>리뷰에 광고(제공) 표기를 넣었어요.</span></label>
        {f.disclosure && <span className="err">{f.disclosure}</span>}
        <p className="tiny muted">평점이나 추천 여부는 묻지 않아요. 아쉬운 점을 솔직하게 적어도 승인 기준은 같아요.</p>
        {act.error && !Object.keys(f).length && <p className="form-error" role="alert">{act.error.message}</p>}
        <button className="btn btn-primary btn-block" disabled={act.pending}>{act.pending ? '제출하는 중…' : '리뷰 제출하기'}</button>
      </form>
    </Modal>
  );
}

function Missions({ userId }: { userId: string }) {
  const [open, setOpen] = useState<{ a: Application; c: Campaign; prev?: Review } | null>(null);
  const d = useDemo(s => {
    const apps = s.applications.filter(a => a.userId === userId && (a.status === 'selected' || a.status === 'completed'));
    const todo: { a: Application; c: Campaign; prev?: Review }[] = [];
    const done: { r: Review; c: Campaign }[] = [];
    for (const a of apps) {
      const rs = s.reviews.filter(r => r.applicationId === a.id);
      const last = rs.slice(-1)[0];
      const c = campaignById(s, a.campaignId)!;
      if (a.status === 'selected' && (!last || last.status === 'changes_requested')) todo.push({ a, c, prev: last });
      for (const r of rs) done.push({ r, c });
    }
    done.sort((x, y) => y.r.submittedAt.localeCompare(x.r.submittedAt));
    return { todo, done };
  });
  return (
    <>
      <section aria-labelledby="todo-title">
        <h2 id="todo-title" className="h3 sub-h">작성할 리뷰 <span className="num">{d.todo.length}</span></h2>
        {d.todo.length ? (
          <ul className="act-list">
            {d.todo.map(t => (
              <li key={t.a.id} className="act-item card">
                <div className="act-body">
                  {t.prev?.status === 'changes_requested' ? <span className="badge badge-bad">보완 요청</span> : <span className="badge badge-grape">작성 대기</span>}
                  <Link to={'/experiences/' + t.c.slug} className="act-title">{t.c.title}</Link>
                  <span className="small muted">마감 {fmtDate(t.c.reviewDeadline)} · {CHANNEL_LABEL[t.a.channel]}</span>
                  {t.prev?.decisionNote && <span className="small">운영팀: {t.prev.decisionNote}</span>}
                </div>
                <div className="act-cta"><StampCount n={t.c.stamps} /><button className="btn btn-sm btn-primary" onClick={() => setOpen(t)}>{t.prev ? '다시 제출' : '리뷰 제출'}</button></div>
              </li>
            ))}
          </ul>
        ) : <Empty pose="joy" title="지금 작성할 리뷰가 없어요">선정된 체험단이 생기면 여기에서 미션을 제출해요.</Empty>}
      </section>
      <section aria-labelledby="done-title" style={{ marginTop: 36 }}>
        <h2 id="done-title" className="h3 sub-h">제출한 리뷰</h2>
        {d.done.length ? (
          <ul className="act-list">
            {d.done.map(({ r, c }) => (
              <li key={r.id} className="act-item card">
                <div className="act-body">
                  <span className={'badge ' + REVIEW_STATUS[r.status][1]}>{REVIEW_STATUS[r.status][0]}</span>
                  <span className="act-title">{c.title}</span>
                  <span className="small muted">제출 {fmtDate(r.submittedAt)}{r.decidedAt && ` · 처리 ${fmtDate(r.decidedAt)}`} · <a className="link" href={r.url} target="_blank" rel="noopener noreferrer">리뷰 열기 ↗</a></span>
                  {r.status === 'submitted' && <span className="small">운영팀이 미션 수행을 확인하고 있어요. 승인되면 스탬프 {c.stamps}개가 지급돼요.</span>}
                  {r.decisionNote && r.status !== 'submitted' && <span className="small">운영팀: {r.decisionNote}</span>}
                </div>
                {r.status === 'approved' && <div className="act-cta"><span className="small state-ready">+{c.stamps} 스탬프 지급</span></div>}
              </li>
            ))}
          </ul>
        ) : <p className="muted small">아직 제출한 리뷰가 없어요.</p>}
      </section>
      {open && <SubmitModal {...open} onClose={() => setOpen(null)} />}
    </>
  );
}

export default function MyReviews() {
  useTitle('리뷰 미션');
  return <MyFrame eyebrow="Review Missions" title="리뷰 미션" lead="선정된 체험단의 리뷰를 제출하고 검수 상태를 확인해요. 승인 기준은 평가 내용이 아니라 미션 수행이에요.">{user => <Missions userId={user.id} />}</MyFrame>;
}
