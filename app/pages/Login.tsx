import { useId, useState } from 'react';
import { login, logout, resetDemo, switchUser, type DemoLogin } from '../api/demo';
import { useAction, useDemo, useSession } from '../api/hooks';
import { Link, navigate, useLocation } from '../router';
import { Field, useTitle, useToast } from '../components/ui';
import { Mascot } from '../art/Mascot';

const KINDS: { kind: DemoLogin; title: string; body: string; pose: 'flag' | 'joy' | 'discover' }[] = [
  { kind: 'fresh', title: '새 탐험가로 시작', body: '빈 스티커북과 0개의 스탬프로 처음부터 탐험해요.', pose: 'flag' },
  { kind: 'sample', title: '예시 탐험가로 둘러보기', body: '승인된 리뷰 3건, 스티커 6장, 교환 내역이 있는 계정이에요.', pose: 'joy' },
  { kind: 'admin', title: '운영자(데모)로 로그인', body: '신청자 선정, 리뷰 검수, 스탬프 지급, 교환 관리를 해볼 수 있어요.', pose: 'discover' },
];

export default function Login() {
  useTitle('탐험 시작하기');
  const id = useId();
  const { query } = useLocation();
  const next = query.get('next');
  const user = useSession();
  const users = useDemo(s => s.users);
  const [kind, setKind] = useState<DemoLogin>('sample');
  const [name, setName] = useState('');
  const act = useAction(login);
  const sw = useAction(switchUser);
  const toast = useToast();
  const go = (role: string) => navigate(next && next.startsWith('/') ? next : role === 'admin' ? '/admin' : '/my');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const u = await act.run(kind, name || (kind === 'admin' ? '운영자' : kind === 'sample' ? '예시탐험가' : ''));
    if (u) { toast(`${u.nickname}님, 반가워요!`); go(u.role); }
  };
  return (
    <div className="wrap login">
      <div className="login-card card">
        <Mascot pose={KINDS.find(k => k.kind === kind)!.pose} size={104} />
        <h1 className="h1">탐험 시작하기</h1>
        <p className="notice small"><span><b>데모 로그인</b> · 실제 계정이나 비밀번호를 만들지 않아요. 닉네임과 활동은 이 브라우저에만 저장돼요. 실제 서비스에서는 이메일 인증과 서버 세션을 사용해요.</span></p>
        <form className="form" onSubmit={submit} noValidate>
          <fieldset className="login-kinds">
            <legend className="sr-only">시작 방법</legend>
            {KINDS.map(k => (
              <label key={k.kind} className={'kind' + (kind === k.kind ? ' is-on' : '')}>
                <input type="radio" name="kind" checked={kind === k.kind} onChange={() => setKind(k.kind)} />
                <b>{k.title}</b><span className="small muted">{k.body}</span>
              </label>
            ))}
          </fieldset>
          <Field id={id} label="닉네임" error={act.error?.fields.nickname} hint="2~12자 · 비워두면 기본 이름을 써요">
            <input id={id} className="input" value={name} maxLength={12} onChange={e => setName(e.target.value)} placeholder={kind === 'admin' ? '운영자' : '예: 주말탐험가'} />
          </Field>
          {act.error && !act.error.fields.nickname && <p className="form-error">{act.error.message}</p>}
          <button className="btn btn-primary btn-block" disabled={act.pending}>{act.pending ? '지도를 펼치는 중…' : '탐험 시작'}</button>
        </form>
        {users.length > 0 && (
          <div className="login-switch">
            <h2 className="h3">이 브라우저의 데모 계정</h2>
            <ul>
              {users.map(u => (
                <li key={u.id}>
                  <span><b>{u.nickname}</b> <span className="badge">{u.role === 'admin' ? '운영자' : '탐험가'}</span>{user?.id === u.id && <span className="badge badge-open">로그인 중</span>}</span>
                  {user?.id !== u.id && <button className="btn btn-sm btn-ghost" disabled={sw.pending} onClick={async () => { await sw.run(u.id); go(u.role); }}>이 계정으로</button>}
                </li>
              ))}
            </ul>
            <div className="row-btns">
              {user && <button className="btn btn-sm" onClick={async () => { await logout(); toast('로그아웃했어요'); }}>로그아웃</button>}
              <button className="btn btn-sm btn-ghost" onClick={async () => { if (confirm('이 브라우저의 데모 데이터(계정, 신청, 스탬프, 교환)를 모두 지울까요?')) { await resetDemo(); toast('데모 데이터를 초기화했어요'); } }}>데모 데이터 초기화</button>
            </div>
          </div>
        )}
        <p className="tiny muted"><Link to="/how-it-works" className="link">STAMPY는 어떻게 쓰나요?</Link></p>
      </div>
    </div>
  );
}
