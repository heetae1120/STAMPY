// Demo operations console. Every action goes through the same demo-server rules
// (role check, quota, one grant per review, refunds as reverse ledger rows).
import { useState } from 'react';
import type { BrandInquiry, Campaign, RedemptionStatus, VenueCategory } from '../../api/types';
import { BRANDS, CAMPAIGNS, CHANNEL_LABEL, REWARDS, VENUE_CATEGORIES, campaignStatus, venueCategoryLabel } from '../../data/catalog';
import { adjustStock, campaignById, campaignsOf, decideReview, editCampaign, isPublicVenue, registerVenue, rewardById, setApplicationStatus, setInquiryStatus, setRedemptionStatus, setVenueMapApproval, venuesOf, verifyVenue, type VenueForm } from '../../api/demo';
import { naverMapLink } from '../../map/naverSdk';
import { useAction, useDemo, useSession } from '../../api/hooks';
import { Link } from '../../router';
import { DemoBadge, fmtDate, fmtFull, useTitle, useToast } from '../../components/ui';
import { Mascot } from '../../art/Mascot';
import { APP_STATUS, RED_STATUS, REVIEW_STATUS, maskPhone } from '../my/shared';

const TABS = [['dash', '대시보드'], ['apps', '신청자 관리'], ['reviews', '리뷰 검수'], ['ledger', '스탬프 지급'], ['reds', '교환 관리'], ['stock', '상품 재고'], ['camps', '체험단 수정'], ['venues', '매장 관리'], ['inquiries', '제휴 문의'], ['log', '운영 기록']] as const;
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
        <form className="card form adm-edit" noValidate onSubmit={async e => { e.preventDefault(); if (await act.run(edit.id, { title: edit.title, quota: Number(edit.quota), stamps: Number(edit.stamps), benefit: edit.benefit, ...(edit.kind === 'visit' ? { venueId: edit.venueId ?? '' } : {}) })) { toast('체험단을 수정했어요'); setEdit(null); } }}>
          <h3 className="h3">{edit.title} 수정</h3>
          <label className="field"><span className="label">제목</span><input className="input" value={edit.title} onChange={e => setEdit({ ...edit, title: e.target.value })} /></label>
          <div className="form-2">
            <label className="field"><span className="label">선정 인원</span><input className="input" type="number" min={1} value={edit.quota} onChange={e => setEdit({ ...edit, quota: Number(e.target.value) })} /></label>
            <label className="field"><span className="label">지급 스탬프 (1~10)</span><input className="input" type="number" min={1} max={10} value={edit.stamps} onChange={e => setEdit({ ...edit, stamps: Number(e.target.value) })} /></label>
          </div>
          <label className="field"><span className="label">제공 혜택</span><input className="input" value={edit.benefit} onChange={e => setEdit({ ...edit, benefit: e.target.value })} /></label>
          {edit.kind === 'visit' && <VenueSelect value={edit.venueId ?? ''} onChange={v => setEdit({ ...edit, venueId: v })} />}
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
          {tab === 'venues' && <Venues />}
          {tab === 'inquiries' && <Inquiries />}
          {tab === 'log' && <Log />}
        </section>
      </div>
    </div>
  );
}

function VenueSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const venues = useDemo(s => venuesOf(s));
  return (
    <label className="field"><span className="label">방문 매장 (한 매장에 여러 체험단을 연결할 수 있어요)</span>
      <select className="select" value={value} onChange={e => onChange(e.target.value)}>
        <option value="">연결 안 함</option>
        {venues.map(v => <option key={v.id} value={v.id}>{v.name} · {v.demo ? '가상 데모' : v.verificationStatus}</option>)}
      </select>
    </label>
  );
}

const VSTATUS: Record<string, [string, string]> = { verified: ['검증 완료', 'badge-open'], pending: ['검증 대기', 'badge-warn'], rejected: ['확인 불가', 'badge-bad'], demo: ['가상 데모', 'badge-demo'] };
const emptyVenue: VenueForm = { name: '', brandId: '', category: 'cafe', roadAddress: '', address: '', sido: '', sigungu: '', latitude: '', longitude: '', naverPlaceUrl: '', phone: '' };

function Venues() {
  const venues = useDemo(s => venuesOf(s));
  const links = useDemo(s => { const m: Record<string, number> = {}; for (const c of campaignsOf(s)) if (c.venueId) m[c.venueId] = (m[c.venueId] ?? 0) + 1; return m; });
  const [form, setForm] = useState<VenueForm>(emptyVenue);
  const [adding, setAdding] = useState(false);
  const [checks, setChecks] = useState<Record<string, { address: boolean; coordinates: boolean; business: boolean }>>({});
  const reg = useAction(registerVenue);
  const ver = useAction(verifyVenue);
  const appr = useAction(setVenueMapApproval);
  const toast = useToast();
  const f = reg.error?.fields ?? {};
  const set = (k: keyof VenueForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });
  const err = ver.error ?? appr.error;
  return (
    <>
      <p className="notice info small"><span><b>지도 노출 원칙</b> · 주소, 좌표, 실제 영업 여부를 모두 확인하고 ‘검증 완료’한 뒤 노출을 승인한 매장만 사용자 지도에 표시돼요. 가상 데모 매장은 검증할 수 없고 데모 미리보기에서만 보여요. 주소→좌표 자동 변환(Geocoding)은 서버 연동이 필요해서, 지금은 좌표를 직접 입력하고 네이버 지도 링크로 대조해요.</span></p>
      {err && <p className="form-error" role="alert">{err.message}</p>}
      <div className="adm-toolbar"><button className="btn btn-sm btn-primary" onClick={() => { setAdding(a => !a); reg.setError(null); }}>{adding ? '등록 닫기' : '매장 등록'}</button></div>
      {adding && (
        <form className="card form adm-edit" noValidate onSubmit={async e => { e.preventDefault(); if (await reg.run(form)) { toast('매장을 등록했어요. 검증 대기 상태예요'); setForm(emptyVenue); setAdding(false); } }}>
          <h3 className="h3">매장 등록 (검증 대기로 저장)</h3>
          <div className="form-2">
            <label className={'field' + (f.name ? ' has-err' : '')}><span className="label">매장명</span><input className="input" value={form.name} onChange={set('name')} />{f.name && <span className="err">{f.name}</span>}</label>
            <label className={'field' + (f.brandId ? ' has-err' : '')}><span className="label">브랜드</span><select className="select" value={form.brandId} onChange={set('brandId')}><option value="">선택</option>{BRANDS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}</select>{f.brandId && <span className="err">{f.brandId}</span>}</label>
          </div>
          <label className="field"><span className="label">매장 종류</span><select className="select" value={form.category} onChange={e => setForm({ ...form, category: e.target.value as VenueCategory })}>{VENUE_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}</select></label>
          <label className={'field' + (f.roadAddress ? ' has-err' : '')}><span className="label">도로명 주소</span><input className="input" value={form.roadAddress} onChange={set('roadAddress')} />{f.roadAddress && <span className="err">{f.roadAddress}</span>}</label>
          <div className="form-2">
            <label className={'field' + (f.sido ? ' has-err' : '')}><span className="label">시·도</span><input className="input" value={form.sido} onChange={set('sido')} placeholder="서울" />{f.sido && <span className="err">{f.sido}</span>}</label>
            <label className="field"><span className="label">시·군·구</span><input className="input" value={form.sigungu} onChange={set('sigungu')} placeholder="마포구" /></label>
          </div>
          <div className="form-2">
            <label className={'field' + (f.latitude ? ' has-err' : '')}><span className="label">위도</span><input className="input" inputMode="decimal" value={form.latitude} onChange={set('latitude')} />{f.latitude && <span className="err">{f.latitude}</span>}</label>
            <label className={'field' + (f.longitude ? ' has-err' : '')}><span className="label">경도</span><input className="input" inputMode="decimal" value={form.longitude} onChange={set('longitude')} />{f.longitude && <span className="err">{f.longitude}</span>}</label>
          </div>
          <div className="form-2">
            <label className={'field' + (f.naverPlaceUrl ? ' has-err' : '')}><span className="label">네이버 플레이스 링크 (선택)</span><input className="input" value={form.naverPlaceUrl} onChange={set('naverPlaceUrl')} />{f.naverPlaceUrl && <span className="err">{f.naverPlaceUrl}</span>}</label>
            <label className="field"><span className="label">전화 (선택)</span><input className="input" value={form.phone} onChange={set('phone')} /></label>
          </div>
          <button className="btn btn-sm btn-primary" disabled={reg.pending}>등록</button>
        </form>
      )}
      <ul className="adm-reviews">
        {venues.map(v => {
          const ck = checks[v.id] ?? v.checks ?? { address: false, coordinates: false, business: false };
          return (
            <li key={v.id} className="card adm-review">
              <div><b>{v.name}</b> <span className={'badge ' + VSTATUS[v.verificationStatus][1]}>{VSTATUS[v.verificationStatus][0]}</span> {isPublicVenue(v) && <span className="badge badge-grape">지도 노출 중</span>}
                <p className="small muted" style={{ margin: '4px 0 0' }}>{venueCategoryLabel(v.category)} · {v.roadAddress} · 좌표 {v.latitude.toFixed(5)}, {v.longitude.toFixed(5)} · 연결된 체험단 {links[v.id] ?? 0}개</p>
                {!v.demo && <a className="link small link-solo" href={naverMapLink(v)} target="_blank" rel="noopener noreferrer">네이버 지도에서 주소 대조 ↗</a>}
              </div>
              {v.demo ? <p className="tiny muted">가상 매장이라 검증·노출 승인을 할 수 없어요.</p> : (
                <>
                  <fieldset className="adm-checks"><legend className="small"><b>검증 체크리스트</b></legend>
                    {([['address', '도로명 주소가 실제 매장 주소와 같아요'], ['coordinates', '좌표가 지도에서 매장 입구 위치와 일치해요'], ['business', '실제로 영업 중이고 제휴 의사를 확인했어요']] as const).map(([k, l]) =>
                      <label key={k} className="check small"><input type="checkbox" checked={ck[k]} onChange={e => setChecks({ ...checks, [v.id]: { ...ck, [k]: e.target.checked } })} />{l}</label>)}
                  </fieldset>
                  <div className="adm-actions">
                    <button className="btn btn-sm btn-primary" disabled={ver.pending || !(ck.address && ck.coordinates && ck.business)} onClick={async () => { if (await ver.run(v.id, 'verified', ck)) toast('검증 완료로 바꿨어요'); }}>검증 완료</button>
                    <button className="btn btn-sm btn-ghost" disabled={ver.pending} onClick={() => ver.run(v.id, 'rejected', ck)}>확인 불가</button>
                    <button className="btn btn-sm" disabled={appr.pending || !v.isVerified} onClick={async () => { if (await appr.run(v.id, !v.mapApproved)) toast(v.mapApproved ? '지도 노출을 껐어요' : '지도 노출을 승인했어요'); }}>{v.mapApproved ? '지도 노출 끄기' : '지도 노출 승인'}</button>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

const IQ_STATUS: Record<BrandInquiry['status'], string> = { received: '접수', reviewing: '검토 중', converted: '매장 등록', closed: '종료' };
const BIZ: Record<string, string> = { cafe: '카페', restaurant: '식당', bakery: '베이커리', beauty: '뷰티·미용', workshop: '공방', local: '지역 서비스', product: '제품 브랜드' };

function Inquiries() {
  const rows = useDemo(s => [...s.inquiries].reverse());
  const act = useAction(setInquiryStatus);
  if (!rows.length) return <p className="muted">저장된 제휴 문의가 없어요. 사장님·브랜드 제휴 페이지에서 데모 문의를 남겨 보세요.</p>;
  return (
    <div className="table-wrap"><table className="adm-table">
      <thead><tr><th>매장·브랜드</th><th>업종 · 유형</th><th>위치</th><th>담당자</th><th>상태</th></tr></thead>
      <tbody>{rows.map(q => (
        <tr key={q.id}>
          <td><b>{q.company}</b><br /><span className="tiny muted">{fmtFull(q.createdAt)}</span><p className="small" style={{ margin: '4px 0 0' }}>{q.message}</p>{q.offerMenu && <span className="tiny muted">제공 희망: {q.offerMenu}</span>}</td>
          <td className="small">{BIZ[q.businessType] ?? q.category ?? '—'}<br />{q.campaignKind ?? ''}{q.headcount ? ` · ${q.headcount}명` : ''}{q.period ? ` · ${q.period}` : ''}</td>
          <td className="small">{q.location ?? '—'}{q.naverPlaceUrl && <><br /><a className="link" href={q.naverPlaceUrl} target="_blank" rel="noopener noreferrer">플레이스 ↗</a></>}</td>
          <td className="small">{q.contact}<br />{q.phone ? maskPhone(q.phone) : ''}</td>
          <td><select className="select select-sm" value={q.status ?? 'received'} disabled={act.pending} onChange={e => act.run(q.id, e.target.value as BrandInquiry['status'])} aria-label={q.company + ' 문의 상태'}>{Object.entries(IQ_STATUS).map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select></td>
        </tr>
      ))}</tbody>
    </table></div>
  );
}
