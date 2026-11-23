import { useState } from 'react';
import { FAQ } from '../data/faq';
import { Link } from '../router';
import { useTitle } from '../components/ui';
import { Mascot } from '../art/Mascot';

export default function Faq() {
  useTitle('FAQ');
  const [q, setQ] = useState('');
  const term = q.trim();
  const groups = FAQ.map(g => ({ ...g, items: g.items.filter(i => !term || (i.q + i.a).includes(term)) })).filter(g => g.items.length);
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <div>
            <p className="eyebrow">FAQ</p>
            <h1 className="h1">자주 묻는 질문</h1>
            <p className="lead">스티커와 스탬프, 리뷰 검수, 상품 교환에 대해 모았어요.</p>
          </div>
          <Mascot pose="discover" size={100} />
        </div>
      </header>
      <div className="wrap faq-wrap">
        <label className="search" style={{ maxWidth: 520 }}>
          <span className="sr-only">질문 검색</span>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.4" /><path d="M15.5 15.5 21 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
          <input className="input" type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="예: 스탬프, 취소, 배송" />
        </label>
        {groups.length === 0 && <p className="muted" role="status">‘{term}’에 맞는 질문이 없어요.</p>}
        {groups.map(g => (
          <section key={g.group} className="faq-group">
            <h2 className="h3">{g.group}</h2>
            {g.items.map(i => (
              <details key={i.q} className="faq-item" open={!!term}>
                <summary>{i.q}<span aria-hidden="true" /></summary>
                <p>{i.a}</p>
              </details>
            ))}
          </section>
        ))}
        <div className="notice info" style={{ marginTop: 30 }}><span>원하는 답이 없나요? 브랜드 문의는 <Link className="link" to="/brands">브랜드 제휴</Link>, 서비스 흐름은 <Link className="link" to="/how-it-works">이용 방법</Link>에서 볼 수 있어요. 이전 버전 사이트는 <Link className="link" to="/classic.html">여기</Link>, 기존 리뷰어 캠페인 페이지는 <Link className="link" to="/campaigns.html">여기</Link>에 보관돼 있어요.</span></div>
      </div>
    </>
  );
}
