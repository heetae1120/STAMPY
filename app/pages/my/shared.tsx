import type { ReactNode } from 'react';
import type { User } from '../../api/types';
import { useSession } from '../../api/hooks';
import { Link, isActive, useLocation } from '../../router';
import { Mascot } from '../../art/Mascot';

const TABS = [
  ['/my', '홈'], ['/my/stickerbook', '스티커북'], ['/my/stamps', '스탬프'], ['/my/experiences', '체험단'],
  ['/my/reviews', '리뷰 미션'], ['/my/redemptions', '교환 내역'], ['/my/profile', '프로필'],
] as const;

export function MyFrame({ title, eyebrow, children, lead, art }: { title: string; eyebrow: string; lead?: ReactNode; children: (user: User) => ReactNode; art?: ReactNode }) {
  const user = useSession();
  const { path, full } = useLocation();
  if (!user) {
    return (
      <div className="wrap section">
        <div className="empty" style={{ maxWidth: 520, margin: '0 auto' }}>
          <Mascot pose="sleep" size={110} />
          <h1 className="h2">로그인하고 나의 모험을 이어가요</h1>
          <p>스티커북, 스탬프, 체험단 활동은 로그인한 탐험가만 볼 수 있어요.</p>
          <Link to={'/login?next=' + encodeURIComponent(full)} className="btn btn-primary btn-sm">로그인 · 탐험 시작</Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <header className="page-head my-head">
        <div className="wrap">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="h1">{title}</h1>
            {lead && <p className="lead">{lead}</p>}
          </div>
          {art}
        </div>
      </header>
      <div className="wrap">
        <nav className="my-tabs" aria-label="마이페이지 메뉴">
          {TABS.map(([to, label]) => <Link key={to} to={to} aria-current={(to === '/my' ? path === '/my' : isActive(path, to)) ? 'page' : undefined}>{label}</Link>)}
        </nav>
        {children(user)}
      </div>
    </>
  );
}

export const APP_STATUS: Record<string, [string, string]> = {
  applied: ['신청 완료', 'badge-upcoming'],
  selected: ['선정 · 체험 중', 'badge-grape'],
  reviewing: ['리뷰 검수 중', 'badge-warn'],
  completed: ['미션 완료', 'badge-open'],
  rejected: ['미선정', 'badge-closed'],
  cancelled: ['신청 취소', 'badge-closed'],
};

export const REVIEW_STATUS: Record<string, [string, string]> = {
  submitted: ['검수 중', 'badge-warn'],
  approved: ['승인', 'badge-open'],
  changes_requested: ['보완 요청', 'badge-bad'],
  rejected: ['반려', 'badge-closed'],
};

export const RED_STATUS: Record<string, string> = { requested: '신청 접수', preparing: '상품 준비 중', shipped: '발송됨', delivered: '배송 완료', cancelled: '취소·환급' };

export const maskPhone = (p: string) => p.replace(/(\d{3})-?(\d{3,4})-?(\d{4})/, (_, a, _b, c) => `${a}-****-${c}`);
