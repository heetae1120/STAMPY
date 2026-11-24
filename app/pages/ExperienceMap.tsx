// Real-map search for visit campaigns (/experiences?view=map). Shares the q/status
// query params with the list view; adds region, venue type and the demo preview toggle.
import { useEffect, useMemo, useRef, useState } from 'react';
import type { VenueCategory } from '../api/types';
import { VENUE_CATEGORIES } from '../data/catalog';
import { listMapExperiences, type MapQuery } from '../api/demo';
import { useAsync } from '../api/hooks';
import { navigate, useLocation } from '../router';
import { NaverExperienceMap, type Bounds } from '../components/map/NaverExperienceMap';
import { ExperienceMapPreview } from '../components/map/ExperienceMapPreview';
import { Empty, ErrorBox, useToast } from '../components/ui';

const STATUS = [['open', '모집 중'], ['upcoming', '모집 예정'], ['all', '전체']] as const;

export default function ExperienceMap() {
  const { query, path } = useLocation();
  const toast = useToast();
  const q = query.get('q') ?? '';
  const status = query.get('status') ?? 'open';
  const region = query.get('region') ?? 'all';
  const vcat = (query.get('type') ?? 'all') as VenueCategory | 'all';
  const demo = query.get('demo') === '1';
  const [text, setText] = useState(q);
  const [near, setNear] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [bounds, setBounds] = useState<Bounds | null>(null); // applied area filter
  const [viewBounds, setViewBounds] = useState<Bounds | null>(null); // where the map is now
  const [selected, setSelected] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const set = (patch: Record<string, string>) => {
    const next = new URLSearchParams(query);
    for (const [k, v] of Object.entries(patch)) {
      if (!v || (k === 'region' && v === 'all') || (k === 'type' && v === 'all') || (k === 'status' && v === 'open')) next.delete(k); else next.set(k, v);
    }
    navigate(path + '?' + next.toString(), { replace: true, keepScroll: true });
  };
  useEffect(() => {
    if (text === q) return;
    const t = setTimeout(() => set({ q: text.trim() }), 280);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const params: MapQuery = useMemo(() => ({
    q, status, category: vcat, demo, near: near ?? undefined,
    region: region === 'near' && !near ? 'all' : region, bounds: bounds ?? undefined,
  }), [q, status, vcat, demo, near, region, bounds]);
  const res = useAsync(() => listMapExperiences(params), [params]);
  const items = res.data?.items ?? [];
  const fitKey = [q, status, vcat, demo, region, near?.lat].join('|');
  const sel = items.find(i => i.venue.id === selected) ?? null;
  useEffect(() => { if (selected && res.data && !sel) setSelected(null); }, [res.data, sel, selected]);

  // The first idle after each re-fit is the baseline; later idles mean the user moved the map.
  const baseline = useRef<Bounds | null>(null);
  const awaiting = useRef(true);
  useEffect(() => { awaiting.current = true; }, [fitKey]);
  const onIdle = (b: Bounds) => {
    if (awaiting.current) { baseline.current = b; awaiting.current = false; }
    setViewBounds(b);
  };

  const select = (id: string) => {
    setSelected(id);
    // On desktop the list scrolls on its own; on phones keep the map in view and use the sheet.
    if (matchMedia('(min-width: 1001px)').matches) requestAnimationFrame(() => listRef.current?.querySelector(`[data-venue="${id}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' }));
  };

  const locate = () => {
    if (!('geolocation' in navigator)) { toast('이 브라우저는 위치 확인을 지원하지 않아요'); return; }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      pos => {
        setLocating(false);
        // Rounded and kept only in memory for this screen.
        setNear({ lat: Math.round(pos.coords.latitude * 1000) / 1000, lng: Math.round(pos.coords.longitude * 1000) / 1000 });
        set({ region: 'near' });
      },
      err => { setLocating(false); toast(err.code === 1 ? '위치 권한이 없어 내 주변 검색을 할 수 없어요. 지역을 직접 골라 주세요.' : '현재 위치를 확인하지 못했어요'); },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  };

  const ref = bounds ?? baseline.current;
  const moved = !!viewBounds && !!ref && viewBounds.some((v, i) => Math.abs(v - ref[i]) > 1e-4);
  const regions = res.data?.regions ?? [];

  return (
    <div className="wrap xmap-page">
      <aside className="xmap-side" aria-label="방문형 체험단 찾기">
        <div className="xmap-filters">
          <label className="search">
            <span className="sr-only">매장명, 지역, 브랜드, 체험단 검색</span>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.4" /><path d="M15.5 15.5 21 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
            <input className="input" type="search" value={text} onChange={e => setText(e.target.value)} placeholder="매장명, 지역, 브랜드, 체험단" />
          </label>
          <div className="xmap-row">
            <button className="btn btn-sm" onClick={locate} disabled={locating} aria-pressed={region === 'near'}>{locating ? '위치 확인 중…' : '내 주변'}</button>
            <label className="sr-only" htmlFor="xmap-region">지역</label>
            <select id="xmap-region" className="select select-sm" value={region} onChange={e => { if (e.target.value === 'near') locate(); else set({ region: e.target.value }); }}>
              <option value="all">전체 지역</option>
              <option value="near">현재 위치 주변</option>
              {regions.map(r => <option key={r.sido} value={r.sido}>{r.sido} ({r.count})</option>)}
            </select>
            <label className="sr-only" htmlFor="xmap-status">모집 상태</label>
            <select id="xmap-status" className="select select-sm" value={status} onChange={e => set({ status: e.target.value })}>
              {STATUS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
          </div>
          <div className="chip-row" role="group" aria-label="매장 종류">
            <button className="chip" aria-pressed={vcat === 'all'} onClick={() => set({ type: 'all' })}>전체</button>
            {VENUE_CATEGORIES.map(c => <button key={c.id} className="chip" aria-pressed={vcat === c.id} onClick={() => set({ type: c.id })}>{c.label}</button>)}
          </div>
          <label className="check small xmap-demo">
            <input type="checkbox" checked={demo} onChange={e => set({ demo: e.target.checked ? '1' : '' })} />
            <span>데모 매장으로 미리보기 <span className="muted">(가상 매장·대략적 동네 위치)</span></span>
          </label>
        </div>

        <div className="xmap-result" aria-live="polite">
          {res.loading && !res.data ? '찾는 중…' : <><b className="num">{items.length}</b>곳의 매장{bounds && <button className="chip chip-sm" onClick={() => setBounds(null)}>지도 영역으로 좁혀 보는 중 ×</button>}</>}
        </div>
        {res.error ? <ErrorBox message={res.error.message} onRetry={res.reload} /> : items.length === 0 && res.data ? (
          !demo && res.data.hiddenDemo > 0 && !q && region === 'all' && vcat === 'all' ? (
            <Empty pose="flag" title="아직 지도에 공개된 실제 제휴 매장이 없어요" action={<button className="btn btn-sm btn-primary" onClick={() => set({ demo: '1' })}>데모 매장으로 미리보기</button>}>
              주소와 위치 검증을 마친 매장만 지도에 표시돼요. 지금은 가상 매장으로 화면을 미리 볼 수 있어요.
            </Empty>
          ) : (
            <Empty pose="discover" title="조건에 맞는 매장이 없어요" action={<button className="btn btn-sm" onClick={() => { setText(''); setBounds(null); setNear(null); navigate(path + '?view=map' + (demo ? '&demo=1' : ''), { replace: true, keepScroll: true }); }}>조건 초기화</button>}>
              지역이나 매장 종류를 바꿔 보세요.
            </Empty>
          )
        ) : (
          <ul ref={listRef} className="xmap-list">
            {items.map(it => (
              <li key={it.venue.id} data-venue={it.venue.id} className={it.venue.id === selected ? 'is-selected' : ''}>
                <button className="xmap-pick" onClick={() => select(it.venue.id)} aria-pressed={it.venue.id === selected} aria-label={`${it.venue.name} 지도에서 보기`} />
                <ExperienceMapPreview item={it} compact />
              </li>
            ))}
          </ul>
        )}
      </aside>

      <section className="xmap-main" aria-label="네이버 지도">
        <NaverExperienceMap items={items} selectedId={selected} onSelect={select} onIdle={onIdle} near={near} fitKey={fitKey} label="방문형 체험단 매장 지도" />
        {moved && <button className="btn btn-sm xmap-research" onClick={() => setBounds(viewBounds)}>이 지역에서 다시 찾기</button>}
        {sel && <div className="xmap-sheet"><ExperienceMapPreview item={sel} onClose={() => setSelected(null)} /></div>}
      </section>
    </div>
  );
}
