import type { MapItem } from '../../api/demo';
import { brandById, campaignStatus, venueCategoryLabel } from '../../data/catalog';
import { naverMapLink } from '../../map/naverSdk';
import { Link } from '../../router';
import { StampCount } from '../Cards';
import { DemoBadge, ProductPhoto, StatusBadge, dday, fmtDate } from '../ui';

/** Card for one venue: shown for the selected marker and in the venue list. */
export function ExperienceMapPreview({ item, onClose, compact }: { item: MapItem; onClose?: () => void; compact?: boolean }) {
  const { venue: v, campaigns } = item;
  const first = campaigns[0];
  return (
    <article className={'xprev' + (compact ? ' is-compact' : '')} aria-label={v.name}>
      {onClose && <button className="xprev-close" onClick={onClose} aria-label="매장 카드 닫기">×</button>}
      <div className="xprev-photo">
        {v.representativeImage ? <img src={v.representativeImage} alt="" loading="lazy" /> : <ProductPhoto campaign={first} />}
      </div>
      <div className="xprev-body">
        <p className="xprev-meta">
          <span className="badge">{venueCategoryLabel(v.category)}</span>
          {v.demo ? <DemoBadge text="가상 매장" /> : v.isVerified && <span className="badge badge-open">검증된 매장</span>}
          {item.distanceKm !== undefined && <span className="small muted">{item.distanceKm < 1 ? Math.round(item.distanceKm * 1000) + 'm' : item.distanceKm.toFixed(1) + 'km'}</span>}
        </p>
        <h3 className="xprev-name">{v.name}</h3>
        <p className="small muted xprev-addr">{brandById(v.brandId)?.name} · {v.demo ? `${v.region.sido} ${v.region.sigungu} 근처 (실제 위치 아님)` : v.roadAddress}</p>
        <ul className="xprev-camps">
          {campaigns.map(c => {
            const st = campaignStatus(c);
            return (
              <li key={c.id}>
                <div><StatusBadge status={st} /> <b>{c.title}</b></div>
                <span className="small">{c.benefit} · 마감 {fmtDate(c.recruitEnd)}{st === 'open' ? ` (${dday(c.recruitEnd)})` : ''}</span>
                <div className="xprev-row"><StampCount n={c.stamps} /><Link className="btn btn-sm btn-primary" to={'/experiences/' + c.slug}>상세 보기</Link></div>
              </li>
            );
          })}
        </ul>
        {!compact && !v.demo && <a className="link small" href={naverMapLink(v)} target="_blank" rel="noopener noreferrer">네이버 지도에서 보기 ↗</a>}
      </div>
    </article>
  );
}
