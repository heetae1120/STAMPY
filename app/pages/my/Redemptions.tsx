import { cancelRedemption, rewardById } from '../../api/demo';
import { useAction, useDemo } from '../../api/hooks';
import { Link } from '../../router';
import { Empty, fmtFull, useTitle } from '../../components/ui';
import { MyFrame, RED_STATUS, maskPhone } from './shared';

const FLOW = ['requested', 'preparing', 'shipped', 'delivered'] as const;

function List({ userId }: { userId: string }) {
  const cancel = useAction(cancelRedemption);
  const rows = useDemo(s => s.redemptions.filter(r => r.userId === userId).sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
  if (!rows.length) return <Empty pose="chest" title="아직 교환한 보물이 없어요" action={<Link to="/rewards" className="btn btn-sm btn-yellow">리워드샵 가기</Link>}>모은 스탬프로 원하는 브랜드 상품을 골라 보세요.</Empty>;
  return (
    <>
      {cancel.error && <p className="form-error" role="alert">{cancel.error.message}</p>}
      <ul className="act-list">
        {rows.map(r => {
          const rw = rewardById(r.rewardId)!;
          const idx = FLOW.indexOf(r.status as typeof FLOW[number]);
          return (
            <li key={r.id} className="act-item card red-item">
              <span className="act-photo"><img src={rw.image} alt="" /></span>
              <div className="act-body">
                <span className={'badge ' + (r.status === 'cancelled' ? 'badge-closed' : 'badge-grape')}>{RED_STATUS[r.status]}</span>
                <Link to={'/rewards/' + rw.slug} className="act-title">{rw.name}</Link>
                <span className="small muted">{fmtFull(r.createdAt)} 신청 · 스탬프 {r.cost}개{r.status === 'cancelled' && ' (환급됨)'}</span>
                <span className="small muted">{r.shipping.name} · {maskPhone(r.shipping.phone)} · {r.shipping.address1.slice(0, 12)}…</span>
                {r.status !== 'cancelled' && (
                  <ol className="ship-flow" aria-label="배송 진행">
                    {FLOW.map((f, i) => <li key={f} className={i <= idx ? 'is-done' : ''} aria-current={i === idx ? 'step' : undefined}>{RED_STATUS[f]}</li>)}
                  </ol>
                )}
              </div>
              <div className="act-cta">{r.status === 'requested' && <button className="btn btn-sm btn-ghost" disabled={cancel.pending} onClick={() => cancel.run(r.id)}>교환 취소</button>}</div>
            </li>
          );
        })}
      </ul>
      <p className="notice small" style={{ marginTop: 24 }}><span><b>데모 안내</b> · 실제 상품은 발송되지 않아요. 취소하면 차감된 스탬프가 환급 기록과 함께 돌아와요.</span></p>
    </>
  );
}

export default function Redemptions() {
  useTitle('교환 신청 내역');
  return <MyFrame eyebrow="Reward History" title="교환 신청 내역" lead="교환 신청과 배송 진행 상황을 확인해요.">{user => <List userId={user.id} />}</MyFrame>;
}
