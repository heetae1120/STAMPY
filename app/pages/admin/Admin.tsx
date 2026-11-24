// Demo operations console. Every action goes through the same demo-server rules
// (role check, quota, one grant per review, refunds as reverse ledger rows).
import { useState } from 'react';
import type { Campaign, RedemptionStatus } from '../../api/types';
import { CAMPAIGNS, CHANNEL_LABEL, REWARDS, campaignStatus } from '../../data/catalog';
import { adjustStock, campaignById, campaignsOf, decideReview, editCampaign, rewardById, setApplicationStatus, setRedemptionStatus } from '../../api/demo';
import { useAction, useDemo, useSession } from '../../api/hooks';
import { Link } from '../../router';
import { DemoBadge, fmtDate, fmtFull, useTitle, useToast } from '../../components/ui';
import { Mascot } from '../../art/Mascot';
import { APP_STATUS, RED_STATUS, REVIEW_STATUS, maskPhone } from '../my/shared';

const TABS = [['dash', '대시보드'], ['apps', '신청자 관리'], ['reviews', '리뷰 검수'], ['ledger', '스탬프 지급'], ['reds', '교환 관리'], ['stock', '상품 재고'], ['camps', '체험단 수정'], ['log', '운영 기록']] as const;
type Tab = typeof TABS[number][0];

function useUsers() { return useDemo(s => Object.fromEntries(s.users.map(u => [u.id, u.nickname]))); }

function Dash({ go }: { go: (t: Tab) => void }) {
  const d = useDemo(s => ({
    apps: s.applications.filter(a => a.status === 'applied').length,
    reviews: s.reviews.filter(r => r.status === 'submitted').length,
    reds: s.redemptions.filter(r => r.status === 'requested' || r.status === 'preparing').length,
    low: REWARDS.filter(r => (s.stock[r.id] ?? 0) <= 2).length,
    open: campaignsOf(s).filter(c => campaignStatus(c) === 'open').length,
    granted: s.ledger.filter(l => l.type === 'earn').reduce((a, l) => a + l.amount, 0),
  }));
  const tiles: [string, number, Tab][] = [['선정 대기 신청', d.apps, 'apps'], ['검수 대기 리뷰', d.reviews, 'reviews'], ['처리할 교환', d.reds, 'reds'], ['재고 2개 이하', d.low, 'stock']];
  return (
    <>
      <div className="adm-tiles">{tiles.map(([l, n, t]) => <button key={l} className={'adm-tile card' + (n ? ' has-work' : '')} onClick={() => go(t)}><span>{l}</span><b className="num">{n}</b></button>)}</div>
      <p className="muted small">모집 중 체험단 {d.open}개 · 지금까지 지급한 스탬프 {d.granted}개</p>
    </>
  );
}

function Apps() {
  const users = useUsers();
  const [cid, setCid] = useState('all');
  const act = useAction(setApplicationStatus);
  const rows = useDemo(s => s.applications.filter(a => a.status !== 'cancelled' && (cid === 'all' || a.campaignId === cid)).map(a => ({ a, c: campaignById(s, a.campaignId)!, selected: s.applications.filter(x => x.campaignId === a.campaignId && (x.status === 'selected' || x.status === 'completed')).length })).sort((x, y) => y.a.createdAt.localeCompare(x.a.createdAt)));
  return (
    <>
      <div className="adm-toolbar"><select className="select" value={cid} onChange={e => setCid(e.target.value)} aria-label="체험단 선택"><option value="all">모든 체험단</option>{CAMPAIGNS.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}</select></div>
      {act.error && <p className="form-error" role="alert">{act.error.message}</p>}
      {rows.length === 0 ? <p className="muted">신청이 없어요. 탐험가 계정으로 체험단에 신청해 보세요.</p> : (
        <div className="table-wrap"><table className="adm-table">
          <thead><tr><th>신청자</th><th>체험단</th><th>채널 · 계획</th><th>상태</th><th>처리</th></tr></thead>
          <tbody>{rows.map(({ a, c, selected }) => (
            <tr key={a.id}>
              <td><b>{users[a.userId] ?? '—'}</b><br /><span className="tiny muted">{fmtDate(a.createdAt)}</span></td>
              <td>{c.title}<br /><span className="tiny muted">선정 {selected}/{c.quota}</span></td>
              <td><span className="small">{CHANNEL_LABEL[a.channel]} · <a className="link" href={a.channelUrl} target="_blank" rel="noopener noreferrer">채널</a></span><br /><span className="tiny muted">{a.plan}</span></td>
              <td><span className={'badge ' + APP_STATUS[a.status][1]}>{APP_STATUS[a.status][0]}</span></td>
              <td className="adm-actions">
                {a.status === 'applied' && <><button className="btn btn-sm btn-primary" disabled={act.pending} onClick={() => act.run(a.id, 'selected')}>선정</button><button className="btn btn-sm btn-ghost" disabled={act.pending} onClick={() => act.run(a.id, 'rejected')}>미선정</button></>}
                {(a.status === 'selected' || a.status === 'rejected') && <button className="btn btn-sm btn-ghost" disabled={act.pending} onClick={() => act.run(a.id, 'applied')}>결정 취소</button>}
              </td>
            </tr>
          ))}</tbody>
        </table></div>
      )}
    </>
  );
}

function Reviews() {
  const users = useUsers();
  const toast = useToast();
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [checks, setChecks] = useState<Record<string, Record<string, boolean>>>({});
  const act = useAction(decideReview);
  const d = useDemo(s => ({
    pending: s.reviews.filter(r => r.status === 'submitted').map(r => ({ r, c: campaignById(s, r.campaignId)! })),
    recent: s.reviews.filter(r => r.status !== 'submitted').sort((a, b) => (b.decidedAt ?? '').localeCompare(a.decidedAt ?? '')).slice(0, 8).map(r => ({ r, c: campaignById(s, r.campaignId)! })),
  }));
  const CHECK = [['exp', '직접 체험한 내용이에요'], ['mission', '미션 항목(사진·기간·정보)을 지켰어요'], ['ad', '광고(제공) 표기가 있어요']];
  return (
    <>
      <p className="notice info small"><span><b>검수 기준</b> · 체험 사실, 미션 항목, 광고 표기만 확인해요. <b>평점·긍정적 내용·추천 여부는 판단 기준이 아니에요.</b> 승인하면 스탬프가 한 번만 지급되고 스티커가 붙어요.</span></p>
      {act.error && <p className="form-error" role="alert">{act.error.message}</p>}
      {d.pending.length === 0 ? <p className="muted">검수할 리뷰가 없어요.</p> : (
        <ul className="adm-reviews">
          {d.pending.map(({ r, c }) => {
            const ck = checks[r.id] ?? {};
            const all = CHECK.every(([k]) => ck[k]);
            return (
              <li key={r.id} className="card adm-review">
                <div><b>{c.title}</b> <span className="badge badge-warn">{REVIEW_STATUS.submitted[0]}</span><p className="small muted" style={{ margin: '4px 0' }}>{users[r.userId]} · 제출 {fmtFull(r.submittedAt)} · {CHANNEL_LABEL[r.channel]} · <a className="link" href={r.url} target="_blank" rel="noopener noreferrer">리뷰 열기 ↗</a></p>{r.memo && <p className="small">탐험가 메모: {r.memo}</p>}</div>
                <fieldset className="adm-checks"><legend className="small"><b>미션 확인</b></legend>{CHECK.map(([k, l]) => <label key={k} className="check small"><input type="checkbox" checked={!!ck[k]} onChange={e => setChecks({ ...checks, [r.id]: { ...ck, [k]: e.target.checked } })} />{l}</label>)}</fieldset>
                <input className="input" placeholder="참여자에게 남길 메모 (보완·반려 시 필수)" value={notes[r.id] ?? ''} onChange={e => setNotes({ ...notes, [r.id]: e.target.value })} aria-label="검수 메모" />
                <div className="adm-actions">
                  <button className="btn btn-sm btn-primary" disabled={!all || act.pending} onClick={async () => { if (await act.run(r.id, 'approved', notes[r.id] ?? '미션을 모두 확인했어요.')) toast(`승인 완료 · 스탬프 ${c.stamps}개 지급`); }}>승인하고 스탬프 {c.stamps}개 지급</button>
                  <button className="btn btn-sm" disabled={act.pending} onClick={() => act.run(r.id, 'changes_requested', notes[r.id] ?? '')}>보완 요청</button>
                  <button className="btn btn-sm btn-ghost" disabled={act.pending} onClick={() => act.run(r.id, 'rejected', notes[r.id] ?? '')}>반려</button>
                </div>
                {!all && <span className="tiny muted">세 항목을 모두 확인해야 승인할 수 있어요.</span>}
              </li>
            );
          })}
        </ul>
      )}
      {d.recent.length > 0 && <><h3 className="h3 sub-h">최근 처리</h3><ul className="row-list">{d.recent.map(({ r, c }) => <li key={r.id}><b>{c.title}</b><span className="small muted">{users[r.userId]} · {r.decidedAt && fmtFull(r.decidedAt)}</span><span className={'badge ' + REVIEW_STATUS[r.status][1]}>{REVIEW_STATUS[r.status][0]}</span></li>)}</ul></>}
    </>
  );
}

function Ledger() {
  const users = useUsers();
  const rows = useDemo(s => [...s.ledger].sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
  return rows.length === 0 ? <p className="muted">아직 지급·차감 기록이 없어요.</p> : (
    <div className="table-wrap"><table className="adm-table">
      <thead><tr><th>일시</th><th>탐험가</th><th>사유</th><th>종류</th><th>수량</th><th>중복 방지 키</th></tr></thead>
      <tbody>{rows.map(l => <tr key={l.id}><td className="small">{fmtFull(l.createdAt)}</td><td>{users[l.userId]}</td><td className="small">{l.reason}</td><td><span className="badge">{{ earn: '적립', spend: '사용', refund: '환급', adjust: '조정' }[l.type]}</span></td><td className="num">{l.amount > 0 ? '+' : ''}{l.amount}</td><td className="tiny muted">{l.idempotencyKey}</td></tr>)}</tbody>
    </table></div>
  );
}

function Reds() {
  const users = useUsers();
  const act = useAction(setRedemptionStatus);
  const rows = useDemo(s => [...s.redemptions].sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
  const NEXT: Partial<Record<RedemptionStatus, RedemptionStatus>> = { requested: 'preparing', preparing: 'shipped', shipped: 'delivered' };
  return (
    <>
      {act.error && <p className="form-error" role="alert">{act.error.message}</p>}
      {rows.length === 0 ? <p className="muted">교환 신청이 없어요.</p> : (
        <div className="table-wrap"><table className="adm-table">
          <thead><tr><th>신청</th><th>상품</th><th>받는 분</th><th>상태</th><th>처리</th></tr></thead>
          <tbody>{rows.map(r => (
            <tr key={r.id}>
              <td><b>{users[r.userId]}</b><br /><span className="tiny muted">{fmtFull(r.createdAt)}</span></td>
              <td>{rewardById(r.rewardId)?.name}<br /><span className="tiny muted">스탬프 {r.cost}개</span></td>
              <td className="small">{r.shipping.name} · {maskPhone(r.shipping.phone)}<br /><span className="tiny muted">({r.shipping.zip}) 주소는 배송 담당자만 열람</span></td>
              <td><span className="badge">{RED_STATUS[r.status]}</span></td>
              <td className="adm-actions">
                {NEXT[r.status] && <button className="btn btn-sm btn-primary" disabled={act.pending} onClick={() => act.run(r.id, NEXT[r.status]!)}>{RED_STATUS[NEXT[r.status]!]}로 변경</button>}
                {(r.status === 'requested' || r.status === 'preparing') && <button className="btn btn-sm btn-ghost" disabled={act.pending} onClick={() => act.run(r.id, 'cancelled')}>취소·환급</button>}
              </td>
            </tr>
          ))}</tbody>
        </table></div>
      )}
    </>
  );
}

function Stock() {
  const act = useAction(adjustStock);
  const stock = useDemo(s => s.stock);
  return (
    <>
      {act.error && <p className="form-error" role="alert">{act.error.message}</p>}
      <div className="table-wrap"><table className="adm-table">
        <thead><tr><th>상품</th><th>필요 스탬프</th><th>재고</th><th>조정</th></tr></thead>
        <tbody>{REWARDS.map(r => <tr key={r.id}><td>{r.name}</td><td className="num">{r.cost}</td><td className="num">{stock[r.id] ?? 0}</td><td className="adm-actions"><button className="btn btn-sm btn-ghost" aria-label={r.name + ' 재고 1 줄이기'} disabled={act.pending} onClick={() => act.run(r.id, -1)}>−1</button><button className="btn btn-sm" aria-label={r.name + ' 재고 1 늘리기'} disabled={act.pending} onClick={() => act.run(r.id, 1)}>+1</button><button className="btn btn-sm" disabled={act.pending} onClick={() => act.run(r.id, 5)}>+5</button></td></tr>)}</tbody>
      </table></div>
    </>
  );
}

function Camps() {
  const list = useDemo(s => campaignsOf(s));
  const [edit, setEdit] = useState<Campaign | null>(null);
  const act = useAction(editCampaign);
  const toast = useToast();
  return (
    <>
      <p className="small muted">데모에서는 기존 체험단의 일부 항목만 수정할 수 있어요. 새 체험단 등록은 서버 연동 후 제공해요.</p>
      <div className="table-wrap"><table className="adm-table">
        <thead><tr><th>체험단</th><th>상태</th><th>마감</th><th>인원</th><th>스탬프</th><th /></tr></thead>
        <tbody>{list.map(c => <tr key={c.id}><td>{c.title}</td><td>{campaignStatus(c)}</td><td className="small">{fmtDate(c.recruitEnd)}</td><td className="num">{c.quota}</td><td className="num">{c.stamps}</td><td><button className="btn btn-sm btn-ghost" onClick={() => { act.setError(null); setEdit(c); }}>수정</button></td></tr>)}</tbody>
      </table></div>
      {edit && (
        <form className="card form adm-edit" noValidate onSubmit={async e => { e.preventDefault(); if (await act.run(edit.id, { title: edit.title, quota: Number(edit.quota), stamps: Number(edit.stamps), benefit: edit.benefit })) { toast('체험단을 수정했어요'); setEdit(null); } }}>
          <h3 className="h3">{edit.title} 수정</h3>
          <label className="field"><span className="label">제목</span><input className="input" value={edit.title} onChange={e => setEdit({ ...edit, title: e.target.value })} /></label>
          <div className="form-2">
            <label className="field"><span className="label">선정 인원</span><input className="input" type="number" min={1} value={edit.quota} onChange={e => setEdit({ ...edit, quota: Number(e.target.value) })} /></label>
            <label className="field"><span className="label">지급 스탬프 (1~10)</span><input className="input" type="number" min={1} max={10} value={edit.stamps} onChange={e => setEdit({ ...edit, stamps: Number(e.target.value) })} /></label>
          </div>
          <label className="field"><span className="label">제공 혜택</span><input className="input" value={edit.benefit} onChange={e => setEdit({ ...edit, benefit: e.target.value })} /></label>
          <p className="tiny muted">스탬프 수를 바꿔도 이미 지급된 스탬프는 바뀌지 않아요.</p>
          {act.error && <p className="form-error">{act.error.message}</p>}
          <div className="row-btns"><button type="button" className="btn btn-sm btn-ghost" onClick={() => setEdit(null)}>닫기</button><button className="btn btn-sm btn-primary" disabled={act.pending}>저장</button></div>
        </form>
      )}
    </>
  );
}

function Log() {
  const users = useUsers();
  const rows = useDemo(s => [...s.adminActions].reverse().slice(0, 60));
  return rows.length === 0 ? <p className="muted">운영 기록이 없어요.</p> : <ul className="row-list">{rows.map(a => <li key={a.id}><span className="small">{fmtFull(a.at)}</span><b>{a.action}</b><span className="small muted">{users[a.actorId] ?? a.actorId} · {a.target}{a.note ? ' · ' + a.note : ''}</span></li>)}</ul>;
}

export default function Admin() {
  useTitle('운영 대시보드');
  const user = useSession();
  const [tab, setTab] = useState<Tab>('dash');
  if (!user || user.role !== 'admin') {
    return (
      <div className="wrap section"><div className="empty" style={{ maxWidth: 560, margin: '0 auto' }}>
        <Mascot pose="sleep" size={110} />
        <h1 className="h2">운영자만 들어올 수 있어요</h1>
        <p>운영 대시보드는 사용자 화면과 분리된 관리 기능이에요. 데모에서는 운영자 데모 계정으로 둘러볼 수 있어요.</p>
        <Link to="/login?next=/admin" className="btn btn-primary btn-sm">운영자(데모)로 로그인</Link>
      </div></div>
    );
  }
  return (
    <div className="admin">
      <header className="adm-head"><div className="wrap"><div><p className="eyebrow">STAMPY Ops</p><h1 className="h2">운영 대시보드 <DemoBadge text="데모 콘솔" /></h1></div><Link to="/" className="btn btn-sm btn-ghost">서비스 화면으로</Link></div></header>
      <div className="wrap adm-body">
        <nav className="adm-tabs" aria-label="운영 메뉴">{TABS.map(([v, l]) => <button key={v} aria-pressed={tab === v} onClick={() => setTab(v)}>{l}</button>)}</nav>
        <section className="adm-panel" aria-label={TABS.find(t => t[0] === tab)![1]}>
          {tab === 'dash' && <Dash go={setTab} />}
          {tab === 'apps' && <Apps />}
          {tab === 'reviews' && <Reviews />}
          {tab === 'ledger' && <Ledger />}
          {tab === 'reds' && <Reds />}
          {tab === 'stock' && <Stock />}
          {tab === 'camps' && <Camps />}
          {tab === 'log' && <Log />}
        </section>
      </div>
    </div>
  );
}
