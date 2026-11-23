import { useState } from 'react';
import { listRewards, balanceOf } from '../api/demo';
import { useAsync, useDemo, useSession } from '../api/hooks';
import { Link } from '../router';
import { RewardCard } from '../components/Cards';
import { ErrorBox, StampIcon, useTitle } from '../components/ui';
import { Chest, Sparkle } from '../art/Deco';
import { Mascot } from '../art/Mascot';

const FILTERS = [['all', '전체'], ['ready', '지금 교환 가능'], ['stock', '재고 있는 상품']] as const;

export default function Rewards() {
  useTitle('리워드샵');
  const user = useSession();
  const bal = useDemo(s => user ? balanceOf(s, user.id) : null);
  const res = useAsync(() => listRewards(), []);
  const [filter, setFilter] = useState<'all' | 'ready' | 'stock'>('all');
  const [sort, setSort] = useState<'cost' | 'cost-desc'>('cost');
  const balance = bal?.available ?? null;
  const list = (res.data ?? [])
    .filter(({ reward, stock }) => filter === 'all' || (filter === 'stock' ? stock > 0 : stock > 0 && balance !== null && balance >= reward.cost))
    .sort((a, b) => sort === 'cost' ? a.reward.cost - b.reward.cost : b.reward.cost - a.reward.cost);
  return (
    <>
      <header className="shop-head">
        <div className="wrap shop-head-grid">
          <div>
            <p className="eyebrow">Treasure Reward Shop</p>
            <h1 className="h1">작은 보물상점</h1>
            <p className="lead">모은 스탬프로 브랜드 상품을 직접 골라 교환해요. 상자에서 무작위로 나오는 뽑기가 아니에요.</p>
          </div>
          <div className="shop-head-art" aria-hidden="true"><Chest size={190} open /><Mascot pose="chest" size={92} className="shop-head-mascot" /><Sparkle size={26} className="shop-head-sp" /></div>
          <div className="balance-card card">
            {bal ? <>
              <span className="muted small">교환 가능한 스탬프</span>
              <b className="num big"><StampIcon size={30} /> {bal.available}</b>
              {bal.pending > 0 && <span className="tiny muted">검수 중인 스탬프 {bal.pending}개는 승인 후 쓸 수 있어요</span>}
              <Link to="/my/stamps" className="link small">적립 내역 보기</Link>
            </> : <>
              <span className="small"><b>로그인</b>하면 내 스탬프로 바로 교환할 수 있는지 알려드려요.</span>
              <Link to="/login?next=/rewards" className="btn btn-sm btn-primary">로그인</Link>
            </>}
          </div>
        </div>
      </header>
      <div className="wrap">
        <div className="toolbar">
          <div className="seg" role="group" aria-label="상품 보기">
            {FILTERS.map(([v, l]) => <button key={v} aria-pressed={filter === v} onClick={() => setFilter(v)} disabled={v === 'ready' && !user}>{l}</button>)}
          </div>
          <select className="select" style={{ width: 'auto' }} value={sort} onChange={e => setSort(e.target.value as 'cost')} aria-label="정렬">
            <option value="cost">필요 스탬프 적은 순</option><option value="cost-desc">필요 스탬프 많은 순</option>
          </select>
        </div>
        {res.error ? <ErrorBox message={res.error.message} onRetry={res.reload} /> : res.loading && !res.data ? (
          <ul className="xgrid" aria-hidden="true">{Array.from({ length: 4 }, (_, i) => <li key={i}><div className="skel-card"><div className="skel" style={{ aspectRatio: '4/3' }} /><div className="skel" style={{ height: 22 }} /><div className="skel" style={{ height: 16, width: '60%' }} /></div></li>)}</ul>
        ) : list.length === 0 ? (
          <div className="empty"><Mascot pose="sleep" size={90} /><h3>지금 바로 교환할 수 있는 상품이 없어요</h3><p>리뷰 미션으로 스탬프를 더 모아 보세요.</p><Link className="btn btn-sm" to="/experiences">체험단 둘러보기</Link></div>
        ) : (
          <ul className="xgrid">{list.map(({ reward, stock }) => <li key={reward.id}><RewardCard r={reward} stock={stock} balance={balance} /></li>)}</ul>
        )}
        <p className="notice small" style={{ marginTop: 28 }}><span><b>데모 리워드샵</b> · 상품과 재고는 예시예요. 교환 신청을 해도 실제 상품이 발송되지 않아요. 실제 서비스에서는 서버가 잔액과 재고를 다시 확인한 뒤 차감해요.</span></p>
      </div>
    </>
  );
}
