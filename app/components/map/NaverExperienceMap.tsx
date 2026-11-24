import { useEffect, useRef, useState } from 'react';
import type { MapItem } from '../../api/demo';
import { KOREA_BOUNDS, MapLoadError, loadNaverMaps, onAuthFailure, toPixel, type MapProblem, type NaverMaps } from '../../map/naverSdk';
import { MapFallback } from './MapFallback';

export type Bounds = [number, number, number, number]; // south, west, north, east

const CAT_COLOR: Record<string, string> = { cafe: '#FFE39A', restaurant: '#FFAE98', beauty: '#BCA7F5', workshop: '#B7DFC4', other: '#B7DBF3' };

const esc = (t: string) => t.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

/** Small red stamp silhouette with a category dot. The drawing is 32px wide inside a 40×40 hit area. */
export function markerHtml(item: { category: string; demo: boolean; selected: boolean; label: string; count?: number; decorative?: boolean }) {
  const role = item.decorative ? '' : ' role="button" tabindex="0"';
  if (item.count && item.count > 1) {
    return `<div class="xmap-cluster"${role} aria-label="${item.count}개 매장, 눌러서 확대"><span>${item.count}</span></div>`;
  }
  return `<div class="xmap-pin${item.selected ? ' is-selected' : ''}${item.demo ? ' is-demo' : ''}"${role} aria-label="${esc(item.label)}">
<svg viewBox="0 0 32 40" width="32" height="40" aria-hidden="true"><path d="M16 39c-1-4-9-9-9-15" fill="none"/><ellipse cx="16" cy="7" rx="6" ry="5" fill="#F6D5D2" stroke="#4A3A42" stroke-width="1.6"/><rect x="13" y="11" width="6" height="4" fill="#B73E3A" stroke="#4A3A42" stroke-width="1.4"/><path d="M8 15h16q2.5 0 2.7 2.5l.8 10q.2 2.5-2.3 2.5H6.8q-2.5 0-2.3-2.5l.8-10Q5.5 15 8 15z" fill="#D94F4B" stroke="#4A3A42" stroke-width="1.6"/><rect x="4" y="29.5" width="24" height="5" rx="1.6" fill="#B73E3A" stroke="#4A3A42" stroke-width="1.4"/><circle cx="16" cy="22" r="3.6" fill="${CAT_COLOR[item.category] ?? '#fff'}" stroke="#4A3A42" stroke-width="1.2"/></svg></div>`;
}

interface Props {
  items: MapItem[];
  selectedId: string | null;
  onSelect: (venueId: string) => void;
  onIdle?: (b: Bounds) => void;
  near?: { lat: number; lng: number } | null;
  /** Re-fit the view when this key changes (filters changed), not on every render. */
  fitKey?: string;
  interactive?: boolean;
  label: string;
  onProblem?: (p: MapProblem) => void;
}

export function NaverExperienceMap({ items, selectedId, onSelect, onIdle, near, fitKey, interactive = true, label, onProblem }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const map = useRef<{ maps: NaverMaps; map: NaverMaps; markers: NaverMaps[]; listeners: NaverMaps[]; me?: NaverMaps } | null>(null);
  const [problem, setProblem] = useState<MapProblem | null>(null);
  const [ready, setReady] = useState(false);
  const latest = useRef({ items, selectedId, onSelect, onIdle });
  latest.current = { items, selectedId, onSelect, onIdle };

  useEffect(() => {
    let alive = true;
    const fail = (p: MapProblem) => {
      if (!alive) return;
      // After an auth failure the SDK tears down its internals; drop our instance so nothing calls into it.
      const st = map.current;
      map.current = null;
      try { st?.map?.destroy?.(); } catch { /* already gone */ }
      setReady(false);
      setProblem(p);
      onProblem?.(p);
    };
    const off = onAuthFailure(() => fail('auth-failed'));
    loadNaverMaps().then(maps => {
      if (!alive || !box.current) return;
      const m = new maps.Map(box.current, {
        center: new maps.LatLng(36.3, 127.8), zoom: 7, minZoom: 6, maxZoom: 19,
        maxBounds: new maps.LatLngBounds(new maps.LatLng(...KOREA_BOUNDS[0]), new maps.LatLng(...KOREA_BOUNDS[1])),
        scrollWheel: interactive, draggable: interactive, pinchZoom: interactive, keyboardShortcuts: interactive,
        zoomControl: interactive, zoomControlOptions: { position: maps.Position?.TOP_RIGHT },
        mapDataControl: false, scaleControl: true, logoControl: true,
      });
      map.current = { maps, map: m, markers: [], listeners: [] };
      maps.Event.addListener(m, 'idle', () => {
        render();
        const b = m.getBounds();
        const sw = b.getSW ? b.getSW() : b.getMin(), ne = b.getNE ? b.getNE() : b.getMax();
        latest.current.onIdle?.([sw.lat ? sw.lat() : sw.y, sw.lng ? sw.lng() : sw.x, ne.lat ? ne.lat() : ne.y, ne.lng ? ne.lng() : ne.x]);
      });
      setReady(true);
    }).catch(e => fail(e instanceof MapLoadError ? e.problem : 'load-failed'));
    return () => { alive = false; off(); try { map.current?.map?.destroy?.(); } catch { /* ignore */ } map.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Draw markers, grouping ones that would overlap at the current zoom. */
  function render() {
    try { draw(); } catch { /* the SDK can disappear after an auth failure */ }
  }
  function draw() {
    const st = map.current;
    if (!st) return;
    const { maps, map: m } = st;
    st.listeners.forEach(l => maps.Event.removeListener(l));
    st.markers.forEach(mk => mk.setMap(null));
    st.listeners = []; st.markers = [];
    const zoom = m.getZoom();
    const groups: { x: number; y: number; items: MapItem[] }[] = [];
    for (const it of latest.current.items) {
      const p = toPixel(it.venue.latitude, it.venue.longitude, zoom);
      const g = groups.find(g => Math.hypot(g.x - p.x, g.y - p.y) < 40 && it.venue.id !== latest.current.selectedId && !g.items.some(x => x.venue.id === latest.current.selectedId));
      if (g) g.items.push(it); else groups.push({ ...p, items: [it] });
    }
    for (const g of groups) {
      const lat = g.items.reduce((a, it) => a + it.venue.latitude, 0) / g.items.length;
      const lng = g.items.reduce((a, it) => a + it.venue.longitude, 0) / g.items.length;
      const one = g.items[0];
      const selected = g.items.length === 1 && one.venue.id === latest.current.selectedId;
      const html = markerHtml({ category: one.venue.category, demo: one.venue.demo, selected, count: g.items.length, label: `${one.venue.name}, 체험단 ${one.campaigns.length}개` });
      const mk = new maps.Marker({
        map: m, position: new maps.LatLng(lat, lng), zIndex: selected ? 100 : 10,
        icon: { content: html, size: new maps.Size(40, 40), anchor: new maps.Point(20, g.items.length > 1 ? 20 : 40) },
      });
      const activate = () => {
        if (g.items.length > 1) { m.morph ? m.morph(new maps.LatLng(lat, lng), Math.min(zoom + 2, 19)) : (m.setCenter(new maps.LatLng(lat, lng)), m.setZoom(Math.min(zoom + 2, 19))); }
        else latest.current.onSelect(one.venue.id);
      };
      st.listeners.push(maps.Event.addListener(mk, 'click', activate));
      st.markers.push(mk);
    }
  }

  // Fit to results once per filter change, as soon as results arrive (never when the user pans).
  const fitted = useRef<string | null>(null);
  useEffect(() => {
    const st = map.current;
    if (!ready || !st || !items.length || fitted.current === fitKey) return;
    fitted.current = fitKey ?? '';
    const { maps, map: m } = st;
    try {
    if (items.length === 1) { m.setCenter(new maps.LatLng(items[0].venue.latitude, items[0].venue.longitude)); m.setZoom(14); }
    else if (items.length > 1) {
      const lats = items.map(i => i.venue.latitude), lngs = items.map(i => i.venue.longitude);
      m.fitBounds(new maps.LatLngBounds(new maps.LatLng(Math.min(...lats), Math.min(...lngs)), new maps.LatLng(Math.max(...lats), Math.max(...lngs))), { top: 60, right: 60, bottom: 60, left: 60 });
    }
    } catch { /* see render() */ }
    render();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, fitKey, items]);

  useEffect(() => { if (ready) render(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [ready, items, selectedId]);

  // Pan to the selected venue.
  useEffect(() => {
    const st = map.current;
    if (!ready || !st || !selectedId) return;
    const it = items.find(i => i.venue.id === selectedId);
    try { if (it) st.map.panTo(new st.maps.LatLng(it.venue.latitude, it.venue.longitude)); } catch { /* see render() */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, selectedId]);

  // "My location" dot. The position is used only on screen and never stored.
  useEffect(() => {
    const st = map.current;
    if (!ready || !st) return;
    try {
      st.me?.setMap(null);
      if (!near) return;
      st.me = new st.maps.Marker({ map: st.map, position: new st.maps.LatLng(near.lat, near.lng), zIndex: 200, icon: { content: '<div class="xmap-me" aria-label="내 위치"></div>', anchor: new st.maps.Point(9, 9) } });
      st.map.setCenter(new st.maps.LatLng(near.lat, near.lng));
      st.map.setZoom(13);
    } catch { /* see render() */ }
  }, [ready, near]);

  // Keyboard: markers are HTML; Enter/Space on a focused marker triggers its click.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if ((e.key === 'Enter' || e.key === ' ') && (t.classList.contains('xmap-pin') || t.classList.contains('xmap-cluster'))) { e.preventDefault(); t.click(); }
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="xmap" aria-label={label} role="region">
      <div ref={box} className="xmap-canvas" hidden={!!problem} />
      {!ready && !problem && <div className="xmap-loading" role="status">지도를 불러오는 중…</div>}
      {problem && <MapFallback problem={problem} />}
    </div>
  );
}
