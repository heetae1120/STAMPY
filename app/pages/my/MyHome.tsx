import { balanceOf, campaignById, rewardById } from '../../api/demo';
import { useDemo } from '../../api/hooks';
import { stickerById } from '../../data/catalog';
import { Link } from '../../router';
import { StampIcon, StickerIcon, fmtDate, useTitle } from '../../components/ui';
import { Mascot } from '../../art/Mascot';
import { Sticker } from '../../art/Sticker';
import { MyFrame, RED_STATUS } from './shared';

function Overview({ userId }: { userId: string }) {
  const d = useDemo(s => {
    const apps = s.applications.filter(a => a.userId === userId && a.status !== 'cancelled');
    const reviews = s.reviews.filter(r => r.userId === userId);
    const stickers = s.userStickers.filter(x => x.userId === userId).sort((a, b) => b.acquiredAt.localeCompare(a.acquiredAt));
    const todo = apps.filter(a => a.status === 'selected' && !reviews.some(r => r.applicationId === a.id && (r.status === 'submitted' || r.status === 'approved' || r.status === 'rejected')));
    const reds = s.redemptions.filter(r => r.userId === userId).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return {
      bal: balanceOf(s, userId), apps, reviews, stickers, todo, reds,
      counts: { applied: apps.filter(a => a.status === 'applied').length, selected: apps.filter(a => a.status === 'selected').length, completed: apps.filter(a => a.status === 'completed').length, rejected: apps.filter(a => a.status === 'rejected').length },
      todoCamps: todo.map(a => ({ a, c: campaignById(s, a.campaignId)! })),
    };
  });
  return (
    <>
      <div className="my-stats">
        <Link to="/my/stamps" className="my-stat stat-stamp"><StampIcon size={34} /><span>교환 가능 스탬프</span><b className="num">{d.bal.available}</b>{d.bal.pending > 0 && <small>+{d.bal.pending} 검수 중</small>}</Link>
        <Link to="/my/stickerbook" className="my-stat stat-sticker"><StickerIcon size={34} /><span>모은 스티커</span><b className="num">{d.stickers.length}</b></Link>
        <Link to="/my/experiences" className="my-stat"><Sticker art="compass" size={36} /><span>참여한 체험단</span><b className="num">{d.apps.length}</b></Link>
        <Link to="/my/reviews" className="my-stat"><Sticker art="notebook" size={36} /><span>작성한 리뷰</span><b className="num">{d.reviews.length}</b>{d.todo.length > 0 && <small className="todo">미션 {d.todo.length}개 진행 중</small>}</Link>
      </div>
      <div className="my-grid">
        <section className="card my-box">
          <div className="box-head"><h2 className="h3">진행 중인 미션</h2><Link to="/my/reviews" className="link small">리뷰 미션 →</Link></div>
          {d.todoCamps.length ? <ul className="row-list">{d.todoCamps.map(({ a, c }) => (
            <li key={a.id}><b>{c.title}</b><span className="small muted">리뷰 마감 {fmtDate(c.reviewDeadline)}</span><Link to="/my/reviews" className="btn btn-sm btn-primary">리뷰 제출</Link></li>
          ))}</ul> : <p className="muted small">지금 해야 할 미션이 없어요. <Link to="/experiences?status=open" className="link">새 체험단 둘러보기</Link></p>}
        </section>
        <section className="card my-box">
          <div className="box-head"><h2 className="h3">나의 탐험</h2><Link to="/my/experiences" className="link small">전체 보기 →</Link></div>
          <ul className="status-counts">
            <li><b className="num">{d.counts.applied}</b>신청</li><li><b className="num">{d.counts.selected}</b>선정·진행</li>
            <li><b className="num">{d.counts.completed}</b>완료</li><li><b className="num">{d.counts.rejected}</b>미선정</li>
          </ul>
        </section>
        <section className="card my-box">
          <div className="box-head"><h2 className="h3">나의 컬렉션</h2><Link to="/my/stickerbook" className="link small">스티커북 →</Link></div>
          {d.stickers.length ? <ul className="mini-stickers">{d.stickers.slice(0, 6).map((x, i) => <li key={x.id}><Sticker art={stickerById(x.stickerId).art} size={58} tilt={(i % 3 - 1) * 7} label={stickerById(x.stickerId).name} /></li>)}</ul>
            : <p className="muted small">첫 리뷰 미션이 승인되면 스티커가 생겨요.</p>}
        </section>
        <section className="card my-box">
          <div className="box-head"><h2 className="h3">교환 내역</h2><Link to="/my/redemptions" className="link small">전체 보기 →</Link></div>
          {d.reds.length ? <ul className="row-list">{d.reds.slice(0, 3).map(r => (
            <li key={r.id}><b>{rewardById(r.rewardId)?.name}</b><span className="small muted">{fmtDate(r.createdAt)} · 스탬프 {r.cost}개</span><span className="badge">{RED_STATUS[r.status]}</span></li>
          ))}</ul> : <p className="muted small">아직 교환한 상품이 없어요. <Link to="/rewards" className="link">리워드샵</Link></p>}
        </section>
      </div>
    </>
  );
}

export default function MyHome() {
  useTitle('마이페이지');
  return (
    <MyFrame eyebrow="My Adventure" title="나의 모험" art={<Mascot pose="joy" size={100} />}>
      {user => (
        <>
          <div className="profile-card card">
            <Mascot pose="flag" size={80} />
            <div><b className="h3">{user.nickname}</b> <span className="badge">{user.role === 'admin' ? '운영자' : '탐험가'}</span><p className="small muted" style={{ margin: 0 }}>{user.intro || '프로필에서 한 줄 소개를 적어 보세요.'}</p></div>
            <Link to="/my/profile" className="btn btn-sm btn-ghost">프로필 수정</Link>
          </div>
          <Overview userId={user.id} />
        </>
      )}
    </MyFrame>
  );
}
