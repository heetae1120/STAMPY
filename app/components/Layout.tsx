import { useEffect, useState, type ReactNode } from 'react';
import { Link, isActive, useLocation } from '../router';
import { useDemo, useSession } from '../api/hooks';
import { balanceOf } from '../api/demo';
import { Mascot } from '../art/Mascot';
import { ArtDefs } from '../art/Defs';
import { C, ink } from '../art/palette';
import { StampIcon } from './ui';

// "내 주변 지도" is the real NAVER map of visit campaigns; "보물지도" is the illustrated brand map.
const NAV = [
  { to: '/experiences', label: '체험단 찾기' },
  { to: '/experiences?view=map', label: '내 주변 지도' },
  { to: '/explore', label: '보물지도' },
  { to: '/my/stickerbook', label: '스티커북' },
  { to: '/rewards', label: '리워드샵' },
  { to: '/brands', label: '사장님·브랜드 제휴' },
];
const MORE = [
  { to: '/about', label: '소개' },
  { to: '/how-it-works', label: '이용 방법' },
  { to: '/faq', label: 'FAQ' },
];

/** Active state that tells the list view and the map view of /experiences apart. */
function current(path: string, search: string, to: string) {
  const [p, q] = to.split('?');
  const isMap = new URLSearchParams(search).get('view') === 'map';
  if (q === 'view=map') return path === '/experiences' && isMap;
  if (p === '/experiences') return isActive(path, p) && !isMap;
  return isActive(path, p);
}

const tabIcon = {
  home: <path d="M5 13l11-8 11 8v11a2 2 0 0 1-2 2h-5v-7h-8v7H7a2 2 0 0 1-2-2z" fill={C.butter} {...ink(2.2)} />,
  map: <g><path d="M4 8l7-3 10 3 7-3v19l-7 3-10-3-7 3z" fill={C.sky} {...ink(2.2)} /><path d="M11 5v19M21 8v19" {...ink(1.8)} /><path d="M14 15l3 3m0-3l-3 3" stroke={C.coral} strokeWidth="2.4" strokeLinecap="round" /></g>,
  near: <g><path d="M16 29c-5-6-9-10-9-15a9 9 0 0 1 18 0c0 5-4 9-9 15z" fill={C.red} {...ink(2.2)} /><circle cx="16" cy="14" r="3.4" fill="#fff" {...ink(1.6)} /></g>,
  exp: <g><path d="M9 28V4" {...ink(2.4)} /><path d="M9 5c6-3 10 4 18 0v12c-8 4-12-3-18 0z" fill={C.coral} {...ink(2.2)} /></g>,
  gift: <g><rect x="5" y="12" width="22" height="15" rx="3" fill={C.peach} {...ink(2.2)} /><rect x="3" y="8" width="26" height="6" rx="2" fill={C.butter} {...ink(2.2)} /><path d="M16 8v19" {...ink(2.2)} /><path d="M16 8c-3-5-9-4-7-1s7 1 7 1zm0 0c3-5 9-4 7-1s-7 1-7 1z" fill={C.pink} {...ink(1.8)} /></g>,
  my: <g><circle cx="16" cy="12" r="6" fill={C.lav} {...ink(2.2)} /><path d="M5 27c1-6 5-9 11-9s10 3 11 9z" fill={C.lav} {...ink(2.2)} /></g>,
};

function TabBar({ path, search }: { path: string; search: string }) {
  const items: [string, string, keyof typeof tabIcon][] = [['/', '홈', 'home'], ['/experiences', '체험단', 'exp'], ['/experiences?view=map', '내 주변', 'near'], ['/rewards', '리워드', 'gift'], ['/my', '마이', 'my']];
  return (
    <nav className="tabbar" aria-label="빠른 메뉴">
      {items.map(([to, label, icon]) => (
        <Link key={to} to={to} aria-current={(to === '/' ? path === '/' : current(path, search, to)) ? 'page' : undefined}>
          <svg viewBox="0 0 32 32" aria-hidden="true">{tabIcon[icon]}</svg>{label}
        </Link>
      ))}
    </nav>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const { path, search } = useLocation();
  const user = useSession();
  const balance = useDemo(s => user ? balanceOf(s, user.id).available : 0);
  const [menu, setMenu] = useState(false);
  useEffect(() => setMenu(false), [path]);
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenu(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menu]);
  const isAdmin = path.startsWith('/admin');

  return (
    <>
      <ArtDefs />
      <a className="sr-only" href="#main" onClick={e => { e.preventDefault(); document.getElementById('main')?.focus(); }}>본문으로 건너뛰기</a>
      <div className="demo-ribbon" role="note">
        <div className="wrap">
          <span><b>데모 버전</b> · <span className="hide-sm">브랜드·체험단·상품은 예시이고, 신청·스탬프·교환은 이 브라우저에만 저장돼요. 실제로 처리되거나 발송되지 않아요.</span><span className="show-sm">모든 데이터는 예시이며 실제로 처리되지 않아요.</span></span>
          <Link to="/faq">자세히</Link>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap">
          <Link to="/" className="brand" aria-label="STAMPY 스탬피 홈">
            <Mascot pose="idle" size={40} />
            <span className="brand-word" aria-hidden="true"><b>STAMPY</b><small>스탬피</small></span>
          </Link>
          <nav className="nav" aria-label="주 메뉴">
            {NAV.map(n => <Link key={n.to} to={n.to} aria-current={current(path, search, n.to) ? 'page' : undefined}>{n.label}</Link>)}
          </nav>
          <div className="header-right">
            {user ? (
              <>
                <Link to="/my/stamps" className="stamp-pill" aria-label={`보유 스탬프 ${balance}개`}><StampIcon /> <span className="num">{balance}</span></Link>
                <Link to={user.role === 'admin' ? '/admin' : '/my'} className="btn btn-sm hide-sm">{user.role === 'admin' ? '운영' : '마이'}</Link>
              </>
            ) : (
              <Link to="/login" className="btn btn-sm btn-primary hide-sm">탐험 시작</Link>
            )}
            <button className="menu-btn" aria-label="전체 메뉴" aria-expanded={menu} onClick={() => setMenu(true)}><span /><span /><span /></button>
          </div>
        </div>
      </header>
      {menu && (
        <div className="mobile-menu" onMouseDown={e => { if (e.target === e.currentTarget) setMenu(false); }}>
          <div role="dialog" aria-modal="true" aria-label="전체 메뉴">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Mascot pose="flag" size={60} />
              <button className="modal-close" style={{ position: 'static' }} onClick={() => setMenu(false)} aria-label="메뉴 닫기" autoFocus>×</button>
            </div>
            <nav aria-label="전체 메뉴">
              <Link to="/" aria-current={path === '/' ? 'page' : undefined}>홈</Link>
              {NAV.map(n => <Link key={n.to} to={n.to} aria-current={current(path, search, n.to) ? 'page' : undefined}>{n.label}</Link>)}
              <Link to="/my">마이페이지</Link>
              <span className="menu-sep" aria-hidden="true" />
              {MORE.map(n => <Link key={n.to} to={n.to} aria-current={isActive(path, n.to) ? 'page' : undefined}>{n.label}</Link>)}
              {user?.role === 'admin' && <Link to="/admin">운영 대시보드</Link>}
              {!user && <Link to="/login">로그인 · 탐험 시작</Link>}
            </nav>
          </div>
        </div>
      )}
      <main id="main" tabIndex={-1}>{children}</main>
      {!isAdmin && (
        <footer className="site-footer">
          <div className="wrap">
            <div>
              <Link to="/" className="brand"><Mascot pose="joy" size={46} /><span className="brand-word"><b>STAMPY</b><small>경험을 모으는 가장 즐거운 모험</small></span></Link>
              <p className="footer-note">스탬피는 브랜드 체험 · 솔직한 리뷰 · 스탬프 적립 · 상품 교환을 잇는 체험단 플랫폼이에요. 리뷰 보상은 평가 내용이 아니라 체험과 미션 수행에 대해서만 지급돼요.</p>
              <p className="footer-note">[회사명] · 대표 [이름] · 사업자등록번호 [번호] · <Link to="/classic.html">이전 사이트 보기</Link></p>
            </div>
            <div className="footer-cols">
              <div><h3>탐험하기</h3><Link to="/explore">보물지도</Link><Link to="/experiences">체험단 찾기</Link><Link to="/experiences?view=map">내 주변 지도</Link><Link to="/rewards">리워드샵</Link></div>
              <div><h3>나의 모험</h3><Link to="/my/stickerbook">스티커북</Link><Link to="/my/stamps">스탬프 내역</Link><Link to="/my/reviews">리뷰 미션</Link></div>
              <div><h3>STAMPY</h3><Link to="/about">소개</Link><Link to="/how-it-works">이용 방법</Link><Link to="/brands">사장님·브랜드 제휴</Link><Link to="/faq">FAQ</Link></div>
            </div>
          </div>
        </footer>
      )}
      <TabBar path={path} search={search} />
    </>
  );
}
