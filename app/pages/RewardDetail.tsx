import { useId, useRef, useState } from 'react';
import type { Redemption, Reward, Shipping } from '../api/types';
import { brandById } from '../data/catalog';
import { balanceOf, getReward, redeem, validateShipping } from '../api/demo';
import { useAction, useAsync, useDemo, useSession } from '../api/hooks';
import { Link, useLocation } from '../router';
import { DemoBadge, Empty, ErrorBox, Field, Loader, Modal, StampIcon, newKey, useTitle } from '../components/ui';
import { Chest, StampImprint } from '../art/Deco';

const STEPS = ['스탬프 확인', '교환 조건', '배송 정보', '최종 확인'];

function RedeemFlow({ r, onClose }: { r: Reward; onClose: () => void }) {
  const user = useSession()!;
  const balance = useDemo(s => balanceOf(s, user.id).available);
  const id = useId();
  const [step, setStep] = useState(0);
  const [agree, setAgree] = useState(false);
  const [ship, setShip] = useState<Shipping>({ name: '', phone: '', zip: '', address1: '', address2: '', memo: '' });
  const [shipErr, setShipErr] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Redemption | null>(null);
  // One idempotency key per flow: retries after an error never charge twice.
  const key = useRef(newKey());
  const act = useAction(redeem);
  const set = (k: keyof Shipping) => (e: React.ChangeEvent<HTMLInputElement>) => setShip({ ...ship, [k]: e.target.value });

  const submit = async () => {
    const r2 = await act.run(r.id, ship, key.current);
    if (r2) setResult(r2);
  };
  if (result) {
    return (
      <Modal onClose={onClose} labelledBy={id + '-ok'}>
        <div className="done-box">
          <div className="done-chest"><Chest size={170} open /><StampImprint size={64} label="DEMO" className="done-stamp" /></div>
          <h2 id={id + '-ok'} className="h2">교환 신청이 접수됐어요</h2>
          <p className="muted">{r.name} · 스탬프 {r.cost}개를 사용했어요. 남은 스탬프 <b className="num">{balance}</b>개</p>
          <p className="notice small"><span><b>데모 안내</b> · 실제 상품은 발송되지 않아요. 운영자 데모 계정에서 배송 상태를 바꿔 볼 수 있어요.</span></p>
          <div className="row-btns"><Link to="/my/redemptions" className="btn btn-primary btn-sm">교환 내역 보기</Link><button className="btn btn-sm" onClick={onClose}>닫기</button></div>
        </div>
      </Modal>
    );
  }
  const after = balance - r.cost;
  return (
    <Modal title="상품 교환 신청" onClose={onClose}>
      <ol className="stepper" aria-label="교환 단계">{STEPS.map((s, i) => <li key={s} className={i === step ? 'is-now' : i < step ? 'is-done' : ''} aria-current={i === step ? 'step' : undefined}><span className="num">{i + 1}</span>{s}</li>)}</ol>
      {step === 0 && (
        <div className="flow-body">
          <div className="calc card">
            <div><span>보유 스탬프</span><b className="num">{balance}</b></div>
            <div><span>필요 스탬프</span><b className="num">− {r.cost}</b></div>
            <div className="calc-total"><span>교환 후</span><b className="num">{after}</b></div>
          </div>
          {after < 0 && <p className="form-error">스탬프가 {-after}개 부족해요.</p>}
          <button className="btn btn-primary btn-block" disabled={after < 0} onClick={() => setStep(1)}>다음</button>
        </div>
      )}
      {step === 1 && (
        <div className="flow-body">
          <ul className="tick-list">{[...r.conditions, `한 사람당 ${r.limitPerUser}번까지 교환할 수 있어요`, r.shipping].map(c => <li key={c}>{c}</li>)}</ul>
          <ul className="dot-list small muted">{r.notices.map(n => <li key={n}>{n}</li>)}</ul>
          <label className="check"><input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} /><span>교환 조건과 유의사항을 확인했어요. 준비가 시작되면 취소할 수 없어요.</span></label>
          <div className="row-btns"><button className="btn btn-ghost" onClick={() => setStep(0)}>이전</button><button className="btn btn-primary" disabled={!agree} onClick={() => setStep(2)}>다음</button></div>
        </div>
      )}
      {step === 2 && (
        <form className="flow-body form" noValidate onSubmit={e => { e.preventDefault(); const errs = validateShipping(ship); setShipErr(errs); if (!Object.keys(errs).length) setStep(3); }}>
          <div className="form-2">
            <Field id={id + 'n'} label="받는 분" error={shipErr.name}><input id={id + 'n'} className="input" value={ship.name} onChange={set('name')} autoComplete="name" autoFocus /></Field>
            <Field id={id + 'p'} label="휴대폰 번호" error={shipErr.phone}><input id={id + 'p'} className="input" value={ship.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" /></Field>
          </div>
          <Field id={id + 'z'} label="우편번호" error={shipErr.zip}><input id={id + 'z'} className="input" value={ship.zip} onChange={set('zip')} inputMode="numeric" maxLength={5} autoComplete="postal-code" style={{ maxWidth: 160 }} /></Field>
          <Field id={id + 'a'} label="주소" error={shipErr.address1}><input id={id + 'a'} className="input" value={ship.address1} onChange={set('address1')} autoComplete="address-line1" /></Field>
          <Field id={id + 'b'} label="상세 주소 (선택)"><input id={id + 'b'} className="input" value={ship.address2} onChange={set('address2')} autoComplete="address-line2" /></Field>
          <Field id={id + 'm'} label="배송 메모 (선택)" error={shipErr.memo}><input id={id + 'm'} className="input" value={ship.memo} onChange={set('memo')} maxLength={60} /></Field>
          <p className="tiny muted">배송 정보는 발송에만 쓰여요. 데모에서는 이 브라우저에만 저장돼요.</p>
          <div className="row-btns"><button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>이전</button><button className="btn btn-primary">다음</button></div>
        </form>
      )}
      {step === 3 && (
        <div className="flow-body">
          <div className="confirm card">
            <img src={r.image} alt="" />
            <div><b>{r.name}</b><p className="small muted" style={{ margin: 0 }}>{ship.name} · {ship.address1} {ship.address2}</p>
              <p className="small" style={{ margin: '4px 0 0' }}><StampIcon size={18} /> 스탬프 <b className="num">{r.cost}</b>개 사용 → 남는 스탬프 <b className="num">{after}</b>개</p></div>
          </div>
          {act.error && <p className="form-error" role="alert">{act.error.message} {act.error.code === 'NETWORK' && '같은 신청으로 다시 시도해도 중복으로 차감되지 않아요.'}</p>}
          <div className="row-btns"><button className="btn btn-ghost" onClick={() => setStep(2)} disabled={act.pending}>이전</button>
            <button className="btn btn-yellow" onClick={submit} disabled={act.pending}>{act.pending ? '교환 신청하는 중…' : `스탬프 ${r.cost}개로 교환 신청`}</button></div>
        </div>
      )}
    </Modal>
  );
}

export default function RewardDetail({ params }: { params: Record<string, string> }) {
  const res = useAsync(() => getReward(params.slug), [params.slug]);
  const user = useSession();
  const bal = useDemo(s => user ? balanceOf(s, user.id).available : null);
  const [open, setOpen] = useState(false);
  const { full } = useLocation();
  useTitle(res.data?.reward.name ?? '리워드 상세');
  if (res.loading && !res.data) return <Loader />;
  if (res.error) return res.error.code === 'NOT_FOUND'
    ? <div className="wrap section"><Empty level={1} pose="discover" title="이 상품을 찾을 수 없어요" action={<Link className="btn btn-sm" to="/rewards">리워드샵으로</Link>} /></div>
    : <div className="wrap section"><ErrorBox message={res.error.message} onRetry={res.reload} /></div>;
  const { reward: r, stock, mine } = res.data!;
  const brand = brandById(r.brandId);
  const short = bal === null ? null : r.cost - bal;
  let cta;
  if (stock <= 0) cta = <button className="btn btn-block" disabled>품절 · 재입고를 기다리고 있어요</button>;
  else if (!user) cta = <Link to={'/login?next=' + encodeURIComponent(full)} className="btn btn-primary btn-block">로그인하고 교환하기</Link>;
  else if (mine >= r.limitPerUser) cta = <button className="btn btn-block" disabled>이미 교환 신청한 상품이에요</button>;
  else if (short !== null && short > 0) cta = <><button className="btn btn-block" disabled>스탬프 {short}개가 더 필요해요</button><Link className="link small center" to="/experiences?status=open">스탬프 모으러 가기 →</Link></>;
  else cta = <button className="btn btn-yellow btn-block" onClick={() => setOpen(true)}>교환 신청하기</button>;
  return (
    <div className="wrap detail">
      <nav className="crumbs" aria-label="현재 위치"><Link to="/rewards">리워드샵</Link><span aria-hidden="true">›</span><span>{brand.name}</span></nav>
      <div className="detail-grid">
        <div className="detail-main">
          <div className="detail-photo"><img src={r.image} alt={r.name + ' 상품 사진 (예시)'} />{stock <= 0 && <span className="rcard-soldout">품절</span>}</div>
          <section className="detail-sec"><h2 className="h3">상품 소개</h2><p>{r.intro}</p></section>
          <section className="detail-sec"><h2 className="h3">교환 조건과 배송</h2><ul className="tick-list">{[...r.conditions, `한 사람당 ${r.limitPerUser}번까지`, r.shipping].map(c => <li key={c}>{c}</li>)}</ul></section>
          <section className="detail-sec"><h2 className="h3">주의사항</h2><ul className="dot-list">{[...r.notices, '스탬프만 차감되고 스티커는 그대로 남아요.', '상품 준비가 시작되기 전까지 마이페이지에서 취소할 수 있고, 스탬프는 환급돼요.'].map(n => <li key={n}>{n}</li>)}</ul></section>
        </div>
        <aside className="apply-panel card" aria-label="교환 정보">
          <p className="xcard-brand">{brand.name} {r.demo && <DemoBadge />}</p>
          <h1 className="h2">{r.name}</h1>
          <div className="cost-big"><StampIcon size={40} /><b className="num">{r.cost}</b><span>스탬프</span></div>
          <dl className="facts">
            <div><dt>남은 수량</dt><dd>{stock > 0 ? `${stock}개` : '품절'}</dd></div>
            <div><dt>내 스탬프</dt><dd>{bal === null ? '로그인 후 확인' : <><b className="num">{bal}</b>개 {short !== null && short > 0 ? <span className="state-short small">({short}개 부족)</span> : <span className="state-ready small">(교환 가능)</span>}</>}</dd></div>
            <div><dt>교환 자격</dt><dd>로그인한 탐험가 · 국내 배송지</dd></div>
          </dl>
          <div className="apply-action">{cta}</div>
          <p className="tiny muted">무작위로 지급되지 않아요. 선택한 상품만 신청돼요.</p>
        </aside>
      </div>
      {open && <RedeemFlow r={r} onClose={() => setOpen(false)} />}
    </div>
  );
}
