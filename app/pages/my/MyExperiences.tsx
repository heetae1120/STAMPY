import { useState } from 'react';
import { campaignById, cancelApplication } from '../../api/demo';
import { useAction, useDemo } from '../../api/hooks';
import { CHANNEL_LABEL } from '../../data/catalog';
import { Link } from '../../router';
import { Empty, ProductPhoto, fmtDate, useTitle } from '../../components/ui';
import { APP_STATUS, MyFrame } from './shared';

const TABS = [['all', '전체'], ['applied', '신청'], ['selected', '선정·진행'], ['reviewing', '검수 중'], ['completed', '완료'], ['rejected', '미선정'], ['cancelled', '취소']] as const;

function List({ userId }: { userId: string }) {
  const [tab, setTab] = useState<string>('all');
  const cancel = useAction(cancelApplication);
  const rows = useDemo(s => s.applications.filter(a => a.userId === userId).map(a => {
    const review = s.reviews.filter(r => r.applicationId === a.id).slice(-1)[0];
    const display = a.status === 'selected' && review?.status === 'submitted' ? 'reviewing' : a.status;
    return { a, c: campaignById(s, a.campaignId)!, review, display };
  }).sort((x, y) => y.a.updatedAt.localeCompare(x.a.updatedAt)));
  const list = rows.filter(r => tab === 'all' || r.display === tab);
  const isAdminAvailable = useDemo(s => s.users.some(u => u.role === 'admin'));
  return (
    <>
      <div className="seg seg-wrap" role="group" aria-label="상태별 보기">
        {TABS.map(([v, l]) => <button key={v} aria-pressed={tab === v} onClick={() => setTab(v)}>{l} <span className="num">{v === 'all' ? rows.length : rows.filter(r => r.display === v).length}</span></button>)}
      </div>
      {cancel.error && <p className="form-error" role="alert">{cancel.error.message}</p>}
      {list.length === 0 ? (
        <Empty pose="discover" title={tab === 'all' ? '아직 떠난 탐험이 없어요' : '이 상태의 체험단이 없어요'} action={<Link to="/experiences?status=open" className="btn btn-sm">모집 중인 체험단 보기</Link>}>
          마음에 드는 체험단에 신청하면 여기에서 진행 상황을 볼 수 있어요.
        </Empty>
      ) : (
        <ul className="act-list">
          {list.map(({ a, c, review, display }) => (
            <li key={a.id} className="act-item card">
              <span className="act-photo"><ProductPhoto campaign={c} /></span>
              <div className="act-body">
                <span className={'badge ' + APP_STATUS[display][1]}>{APP_STATUS[display][0]}</span>
                <Link to={'/experiences/' + c.slug} className="act-title">{c.title}</Link>
                <span className="small muted">신청 {fmtDate(a.createdAt)} · {CHANNEL_LABEL[a.channel]} · 발표 {fmtDate(c.announceAt)}</span>
                {display === 'selected' && <span className="small">리뷰 마감 <b>{fmtDate(c.reviewDeadline)}</b>{review?.status === 'changes_requested' && <> · <b className="state-short">보완 요청이 있어요</b></>}</span>}
                {display === 'completed' && <span className="small state-ready">스탬프 {c.stamps}개와 스티커를 받았어요</span>}
              </div>
              <div className="act-cta">
                {display === 'applied' && <button className="btn btn-sm btn-ghost" disabled={cancel.pending} onClick={() => cancel.run(a.id)}>신청 취소</button>}
                {display === 'selected' && <Link to="/my/reviews" className="btn btn-sm btn-primary">리뷰 제출</Link>}
                {display === 'completed' && <Link to="/my/stickerbook" className="btn btn-sm">스티커 보기</Link>}
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="notice small" style={{ marginTop: 24 }}><span><b>데모 안내</b> · 선정 결과는 운영자가 정해요. {isAdminAvailable ? '로그인 화면에서 운영자 데모 계정으로 바꿔' : '로그인 화면에서 운영자(데모)로 로그인해'} 선정·리뷰 승인을 직접 해볼 수 있어요.</span></p>
    </>
  );
}

export default function MyExperiences() {
  useTitle('체험단 활동');
  return <MyFrame eyebrow="My Adventures" title="체험단 활동" lead="신청부터 선정, 체험, 리뷰 검수, 완료까지 진행 상황을 확인해요.">{user => <List userId={user.id} />}</MyFrame>;
}
