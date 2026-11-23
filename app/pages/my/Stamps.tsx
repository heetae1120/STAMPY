import { useEffect, useMemo, useRef, useState } from 'react';
import { REWARDS, stickerById } from '../../data/catalog';
import { balanceOf, markSeen } from '../../api/demo';
import { useDemo } from '../../api/hooks';
import { Link } from '../../router';
import { RewardCard } from '../../components/Cards';
import { StampCard } from '../../components/StampCard';
import { StampIcon, fmtFull, reducedMotion, useTitle } from '../../components/ui';
import { StampImprint, StampTool } from '../../art/Deco';
import { Sticker } from '../../art/Sticker';
import { MyFrame } from './shared';

/** Plays only for ledger rows that are really new since the last visit. */
function ApprovalFeedback({ earned, from, to, stickers, unlocked, onDone }: { earned: { reason: string; amount: number }[]; from: number; to: number; stickers: string[]; unlocked: string[]; onDone: () => void }) {
  const [step, setStep] = useState(reducedMotion() ? 6 : 0);
  const [shown, setShown] = useState(reducedMotion() ? to : from);
  const sum = earned.reduce((a, e) => a + e.amount, 0);
  const done = useRef(onDone);
  done.current = onDone;
  useEffect(() => {
    if (step >= 6) { done.current(); return; }
    const t = setTimeout(() => setStep(s => s + 1), [900, 600, 450, 900, 700, 600][step]);
    return () => clearTimeout(t);
  }, [step]);
  useEffect(() => {
    if (step < 3 || shown >= to) return;
    const t = setTimeout(() => setShown(v => Math.min(to, v + 1)), Math.max(60, 600 / Math.max(1, to - from)));
    return () => clearTimeout(t);
  }, [step, shown, to, from]);
  return (
    <section className="approval card" aria-live="polite">
      <div className="approval-stamp" aria-hidden="true">
        <span className={'ap-tool' + (step >= 1 ? ' is-press' : '')}><StampTool size={56} /></span>
        <span className={'ap-mark' + (step >= 1 ? ' is-on' : '')}><StampImprint size={86} /></span>
      </div>
      <div className="approval-text">
        <p className="ap-line is-on"><b>리뷰 미션이 승인됐어요</b> <span className="small muted">{earned.map(e => e.reason.replace('리뷰 미션 승인 · ', '')).join(', ')}</span></p>
        <p className={'ap-line' + (step >= 2 ? ' is-on' : '')}><span className="ap-plus num">+{sum}</span> 스탬프가 적립됐어요</p>
        <p className={'ap-line' + (step >= 3 ? ' is-on' : '')}>교환 가능한 스탬프 <b className="num ap-bal">{shown}</b>개</p>
        {stickers.length > 0 && <p className={'ap-line' + (step >= 4 ? ' is-on' : '')}>
          <span className="ap-stickers">{stickers.map(id => <Sticker key={id} art={stickerById(id).art} size={34} />)}</span>
          스티커 {stickers.length}장도 스티커북에 붙었어요 · <Link to="/my/stickerbook" className="link">보러 가기</Link></p>}
        {unlocked.length > 0 && <p className={'ap-line' + (step >= 5 ? ' is-on' : '')}>이제 <b>{unlocked.join(', ')}</b>{unlocked.length > 1 ? ' 등' : ''}을(를) 교환할 수 있어요 · <Link to="/rewards" className="link">리워드샵</Link></p>}
      </div>
    </section>
  );
}

const TABS = [['all', '전체'], ['earn', '적립'], ['spend', '사용'], ['refund', '환급']] as const;

function StampsBody({ userId, seenAt }: { userId: string; seenAt?: string }) {
  const d = useDemo(s => {
    const rows = s.ledger.filter(l => l.userId === userId).sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    let run = 0;
    const withBal = rows.map(r => ({ ...r, balance: (run += r.amount) }));
    return { bal: balanceOf(s, userId), rows: withBal.reverse(), stock: s.stock, stickers: s.userStickers.filter(x => x.userId === userId), pendingReviews: s.reviews.filter(r => r.userId === userId && r.status === 'submitted').length };
  });
  const [tab, setTab] = useState<'all' | 'earn' | 'spend' | 'refund'>('all');
  // Freeze what counts as "new" for this visit.
  const fresh = useMemo(() => {
    const earned = d.rows.filter(r => r.type === 'earn' && (!seenAt || r.createdAt > seenAt));
    if (!earned.length || !seenAt) return null;
    const sum = earned.reduce((a, e) => a + e.amount, 0);
    const from = Math.max(0, d.bal.available - sum);
    const stickers = d.stickers.filter(x => x.acquiredAt > seenAt).map(x => x.stickerId);
    const unlocked = REWARDS.filter(r => r.cost <= d.bal.available && r.cost > from && (d.stock[r.id] ?? 0) > 0).map(r => r.name);
    return { earned, from, to: d.bal.available, stickers, unlocked };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [played, setPlayed] = useState(false);
  useEffect(() => { if (!fresh) markSeen('stamps'); }, [fresh]);
  const list = d.rows.filter(r => tab === 'all' || r.type === tab);
  const affordable = REWARDS.filter(r => (d.stock[r.id] ?? 0) > 0).sort((a, b) => a.cost - b.cost).filter(r => r.cost <= d.bal.available).slice(-3);
  const next = REWARDS.filter(r => r.cost > d.bal.available && (d.stock[r.id] ?? 0) > 0).sort((a, b) => a.cost - b.cost)[0];
  return (
    <>
      {fresh && !played && <ApprovalFeedback {...fresh} onDone={() => { setPlayed(true); markSeen('stamps'); }} />}
      {fresh && played && <p className="notice ok" role="status"><span><b>+{fresh.earned.reduce((a, e) => a + e.amount, 0)} 스탬프</b>가 적립돼 잔액에 반영됐어요.</span></p>}
      <div className="stamp-dash">
        <div className="dash-tile is-main"><StampIcon size={38} /><span>교환 가능</span><b className="num">{d.bal.available}</b></div>
        <div className="dash-tile"><span>누적 획득</span><b className="num">{d.bal.earned}</b></div>
        <div className="dash-tile"><span>사용</span><b className="num">{d.bal.spent}</b></div>
        <div className="dash-tile is-pending"><span>적립 예정</span><b className="num">{d.bal.pending}</b><small>검수 중인 리뷰 {d.pendingReviews}건</small></div>
      </div>
      <div className="stamps-layout">
        <div>
          <StampCard filled={Math.min(10, d.bal.available)} total={10} animateFrom={Math.max(0, Math.min(10, d.bal.available) - 2)} title="My Stamp Card" note={d.bal.available > 10 ? `+${d.bal.available - 10}개 더 있어요` : undefined} />
          {next && <p className="small muted center" style={{ marginTop: 12 }}><b>{next.name}</b>까지 스탬프 <b className="num">{next.cost - d.bal.available}</b>개 남았어요</p>}
        </div>
        <section className="card ledger">
          <div className="box-head"><h2 className="h3">적립·사용 내역</h2>
            <div className="seg seg-sm" role="group" aria-label="내역 종류">{TABS.map(([v, l]) => <button key={v} aria-pressed={tab === v} onClick={() => setTab(v)}>{l}</button>)}</div>
          </div>
          {list.length ? (
            <ul className="ledger-list">
              {list.map(r => (
                <li key={r.id} className={'lg-' + r.type}>
                  <span className="lg-date num">{fmtFull(r.createdAt)}</span>
                  <span className="lg-reason">{r.reason}<small>{{ earn: '적립', spend: '사용', refund: '환급', adjust: '조정' }[r.type]}</small></span>
                  <b className="lg-amt num">{r.amount > 0 ? '+' : ''}{r.amount}</b>
                  <span className="lg-bal num small muted">잔액 {r.balance}</span>
                </li>
              ))}
            </ul>
          ) : <p className="muted small">아직 내역이 없어요. 리뷰 미션이 승인되면 여기에 기록돼요.</p>}
          <p className="tiny muted">모든 스탬프는 적립·차감 기록으로 관리되고, 잔액은 이 기록의 합계예요.</p>
        </section>
      </div>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="box-head"><h2 className="h2">지금 교환할 수 있는 상품</h2><Link to="/rewards" className="link">리워드샵 →</Link></div>
        {affordable.length ? <ul className="xgrid">{affordable.map(r => <li key={r.id}><RewardCard r={r} stock={d.stock[r.id] ?? 0} balance={d.bal.available} /></li>)}</ul>
          : <p className="muted">아직 교환할 수 있는 상품이 없어요. {next && <>가장 가까운 상품은 <b>{next.name}</b> (스탬프 {next.cost}개)이에요.</>}</p>}
      </section>
    </>
  );
}

export default function Stamps() {
  useTitle('스탬프 내역');
  // First visit: anything earned since the account was created counts as new.
  const seen = useDemo(s => { const u = s.users.find(x => x.id === s.sessionUserId); return u ? u.seenStampsAt ?? u.createdAt : undefined; });
  const [seenAt] = useState(seen);
  return (
    <MyFrame eyebrow="My Stamps" title="스탬프 내역" lead="스탬프는 리워드샵에서 상품으로 교환하는 재화예요. 검수 중인 리뷰의 스탬프는 승인 후 쓸 수 있어요.">
      {user => <StampsBody userId={user.id} seenAt={seenAt} />}
    </MyFrame>
  );
}
