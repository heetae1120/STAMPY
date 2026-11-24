import { useId, useState } from 'react';
import type { Channel, User } from '../../api/types';
import { CHANNEL_LABEL } from '../../data/catalog';
import { logout, updateProfile } from '../../api/demo';
import { useAction } from '../../api/hooks';
import { navigate } from '../../router';
import { Field, useTitle, useToast } from '../../components/ui';
import { MyFrame } from './shared';

function Form({ user }: { user: User }) {
  const id = useId();
  const [form, setForm] = useState({ nickname: user.nickname, intro: user.intro, channels: { ...user.channels } as Partial<Record<Channel, string>> });
  const act = useAction(updateProfile);
  const toast = useToast();
  const f = act.error?.fields ?? {};
  return (
    <div className="profile-grid">
      <form className="card form profile-form" noValidate onSubmit={async e => { e.preventDefault(); if (await act.run(form)) toast('프로필을 저장했어요'); }}>
        <Field id={id + 'n'} label="닉네임" error={f.nickname}><input id={id + 'n'} className="input" value={form.nickname} maxLength={12} onChange={e => setForm({ ...form, nickname: e.target.value })} /></Field>
        <Field id={id + 'i'} label="한 줄 소개" error={f.intro} hint={`${form.intro.length}/120`}><input id={id + 'i'} className="input" value={form.intro} maxLength={120} onChange={e => setForm({ ...form, intro: e.target.value })} /></Field>
        <fieldset className="field">
          <legend className="label">리뷰 채널</legend>
          {(Object.keys(CHANNEL_LABEL) as Channel[]).map(ch => (
            <Field key={ch} id={id + ch} label={CHANNEL_LABEL[ch]} error={f['ch-' + ch]}>
              <input id={id + ch} className="input" type="url" inputMode="url" placeholder="https://" value={form.channels[ch] ?? ''} onChange={e => setForm({ ...form, channels: { ...form.channels, [ch]: e.target.value } })} />
            </Field>
          ))}
          <span className="hint small muted">채널 주소를 적어도 계정 소유 인증이 된 것은 아니에요. 실제 서비스에서는 별도 인증을 거쳐요.</span>
        </fieldset>
        {act.error && !Object.keys(f).length && <p className="form-error">{act.error.message}</p>}
        <button className="btn btn-primary" disabled={act.pending}>{act.pending ? '저장하는 중…' : '저장하기'}</button>
      </form>
      <aside className="card profile-side">
        <h2 className="h3">개인정보와 계정</h2>
        <ul className="dot-list small muted">
          <li>배송지는 교환 신청할 때만 입력받고, 교환 내역에서는 일부를 가려서 보여줘요.</li>
          <li>데모에서는 모든 정보가 이 브라우저에만 저장돼요.</li>
          <li>실제 서비스에서는 서버에서 암호화해 보관하고, 담당자만 필요한 기간 동안 볼 수 있도록 설계해요.</li>
        </ul>
        <button className="btn btn-sm" onClick={async () => { await logout(); toast('로그아웃했어요'); navigate('/'); }}>로그아웃</button>
      </aside>
    </div>
  );
}

export default function Profile() {
  useTitle('프로필');
  return <MyFrame eyebrow="Profile" title="프로필">{user => <Form user={user} />}</MyFrame>;
}
