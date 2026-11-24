import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { CATEGORIES, campaignStatus } from '../data/catalog';
import { listCampaigns } from '../api/demo';
import { useAsync, useDemo } from '../api/hooks';
import { campaignsOf } from '../api/demo';
import { navigate, useLocation } from '../router';
import { ExperienceCard } from '../components/Cards';
import { Empty, ErrorBox, useTitle } from '../components/ui';
import { Mascot } from '../art/Mascot';
import { Sticker } from '../art/Sticker';

const ExperienceMap = lazy(() => import('./ExperienceMap'));

function ViewToggle({ view, onChange }: { view: 'list' | 'map'; onChange: (v: 'list' | 'map') => void }) {
  return (
    <div className="seg view-toggle" role="group" aria-label="보기 방식">
      <button aria-pressed={view === 'list'} onClick={() => onChange('list')}>목록 보기</button>
      <button aria-pressed={view === 'map'} onClick={() => onChange('map')}>지도 보기 · 방문형</button>
    </div>
  );
}

const STATUS = [['all', '전체'], ['open', '모집 중'], ['upcoming', '모집 예정'], ['closed', '모집 마감']] as const;
const SORT = [['latest', '최신순'], ['deadline', '마감 임박순'], ['stamps', '스탬프 많은 순']] as const;
const CAT_ART: Record<string, string> = { beauty: 'lipstick', food: 'cake', living: 'candle', home: 'vase', fashion: 'ribbon', tech: 'camera', etc: 'letter' };

export default function Experiences() {
  const { query, path } = useLocation();
  const view = query.get('view') === 'map' ? 'map' : 'list';
  useTitle(view === 'map' ? '내 주변 체험단 지도' : '체험단 모집');
  const switchView = (v: 'list' | 'map') => {
    const next = new URLSearchParams();
    const keep = query.get('q');
    if (keep) next.set('q', keep);
    if (v === 'map') next.set('view', 'map');
    navigate(path + (next.toString() ? '?' + next.toString() : ''), { replace: false, keepScroll: true });
  };
  if (view === 'map') {
    return (
      <>
        <header className="page-head list-head xmap-head">
          <div className="wrap">
            <div>
              <p className="eyebrow">Nearby · NAVER Map</p>
              <h1 className="h1">내 주변 체험단 지도</h1>
              <p className="lead">카페, 식당, 미용실, 공방처럼 직접 방문하는 체험단을 실제 지도에서 찾아보세요. 일러스트로 둘러보는 보물지도와는 다른 화면이에요.</p>
            </div>
            <ViewToggle view="map" onChange={switchView} />
          </div>
        </header>
        <Suspense fallback={<div className="wrap"><p className="muted">지도를 준비하는 중…</p></div>}><ExperienceMap /></Suspense>
      </>
    );
  }
  return <ExperienceList onView={switchView} />;
}

function ExperienceList({ onView }: { onView: (v: 'list' | 'map') => void }) {
  useTitle('체험단 모집');
  const { query, path } = useLocation();
  const category = query.get('category') ?? 'all';
  const status = query.get('status') ?? 'all';
  const sort = query.get('sort') ?? 'deadline';
  const q = query.get('q') ?? '';
  const fail = query.get('demoError') === '1';
  const [text, setText] = useState(q);
  const openCount = useDemo(s => campaignsOf(s).filter(c => campaignStatus(c) === 'open').length);
  const applied = useDemo(s => {
    const m: Record<string, number> = {};
    for (const a of s.applications) if (a.status !== 'cancelled') m[a.campaignId] = (m[a.campaignId] ?? 0) + 1;
    return m;
  });

  const set = (patch: Record<string, string>) => {
    const next = new URLSearchParams(query);
    for (const [k, v] of Object.entries(patch)) {
      if (!v || v === 'all' || (k === 'sort' && v === 'deadline')) next.delete(k); else next.set(k, v);
    }
    const s = next.toString();
    navigate(path + (s ? '?' + s : ''), { replace: true, keepScroll: true });
  };

  // Search as you type, without a request per keystroke.
  useEffect(() => {
    if (text === q) return;
    const t = setTimeout(() => set({ q: text.trim() }), 280);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const params = useMemo(() => ({ category, status, sort, q }), [category, status, sort, q]);
  const res = useAsync(() => listCampaigns(params, { fail }), [params, fail]);
  const list = res.data ?? [];
  const filtered = category !== 'all' || status !== 'all' || q;

  return (
    <>
      <header className="page-head list-head">
        <div className="wrap">
          <div>
            <p className="eyebrow">Experiences</p>
            <h1 className="h1">체험단 모집</h1>
            <p className="lead">마음에 드는 브랜드를 골라 직접 경험해 보세요. 리뷰 미션이 승인되면 스탬프와 스티커를 받아요.</p>
          </div>
          <ViewToggle view="list" onChange={onView} />
          <div className="list-head-art" aria-hidden="true">
            <Mascot pose="discover" size={96} />
            <span className="speech">지금 <b className="num">{openCount}</b>개 모집 중!</span>
          </div>
        </div>
      </header>

      <div className="wrap">
        <div className="filters card" role="search" aria-label="체험단 찾기">
          <div className="search-row">
            <label className="search">
              <span className="sr-only">체험단 검색</span>
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.4" /><path d="M15.5 15.5 21 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
              <input className="input" type="search" value={text} onChange={e => setText(e.target.value)} placeholder="브랜드, 제품, 혜택으로 찾기" />
            </label>
            <label className="sort">
              <span className="sr-only">정렬</span>
              <select className="select" value={sort} onChange={e => set({ sort: e.target.value })}>
                {SORT.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
            </label>
          </div>
          <div className="chip-row" role="group" aria-label="카테고리">
            <button className="chip" aria-pressed={category === 'all'} onClick={() => set({ category: 'all' })}>전체</button>
            {CATEGORIES.map(c => (
              <button key={c.id} className="chip cat-chip" aria-pressed={category === c.id} onClick={() => set({ category: c.id })} style={{ ['--c' as string]: c.color }}>
                <Sticker art={CAT_ART[c.id]} size={26} />{c.name}
              </button>
            ))}
          </div>
          <div className="seg" role="group" aria-label="모집 상태">
            {STATUS.map(([v, l]) => <button key={v} aria-pressed={status === v} onClick={() => set({ status: v })}>{l}</button>)}
          </div>
        </div>

        <div className="result-bar" aria-live="polite">
          {res.loading ? <span>찾는 중…</span> : res.error ? null : <span><b className="num">{list.length}</b>개의 체험단{filtered ? '을 찾았어요' : ''}</span>}
          {filtered && <button className="link" style={{ background: 'none', border: 0, cursor: 'pointer' }} onClick={() => { setText(''); navigate(path, { replace: true, keepScroll: true }); }}>조건 초기화</button>}
        </div>

        {res.loading && !res.data ? (
          <ul className="xgrid" aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <li key={i}><div className="skel-card"><div className="skel" style={{ aspectRatio: '4/3' }} /><div className="skel" style={{ height: 18, width: '50%' }} /><div className="skel" style={{ height: 24 }} /><div className="skel" style={{ height: 16, width: '70%' }} /></div></li>)}</ul>
        ) : res.error ? (
          <ErrorBox message={res.error.message} onRetry={() => { if (fail) set({ demoError: '' }); else res.reload(); }} />
        ) : list.length === 0 ? (
          <Empty pose="discover" title="이 길에는 아직 보물이 없어요" action={<button className="btn btn-sm" onClick={() => { setText(''); navigate(path, { replace: true, keepScroll: true }); }}>모든 체험단 보기</button>}>
            검색어나 조건을 바꿔 다른 섬을 탐험해 보세요.
          </Empty>
        ) : (
          <ul className={'xgrid' + (res.loading ? ' is-refreshing' : '')}>
            {list.map(c => <li key={c.id}><ExperienceCard c={c} applied={applied[c.id] ?? 0} /></li>)}
          </ul>
        )}
        <p className="tiny muted" style={{ marginTop: 24 }}>표시된 체험단은 모두 데모 예시예요. 오류 화면은 <a className="link" href="?demoError=1" onClick={e => { e.preventDefault(); set({ demoError: '1' }); }}>여기</a>에서 확인할 수 있어요.</p>
      </div>
    </>
  );
}
