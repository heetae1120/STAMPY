// NAVER Maps (NAVER Cloud "Maps" product) Web Dynamic Map loader.
// Ported from the legacy assets/naver-map.js adapter:
//  - the public Key ID is read at runtime from assets/map-config.js, so it can be
//    rotated without rebuilding (never put a Client Secret there),
//  - the SDK is requested only when a map is shown, with `ncpKeyId` (current loading parameter),
//  - authentication failures are reported through window.navermap_authFailure.

/* The SDK has no bundled types; the small surface we use is typed loosely. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NaverMaps = any;

export type MapProblem = 'no-key' | 'auth-failed' | 'load-failed';
export class MapLoadError extends Error {
  constructor(public problem: MapProblem, message: string) { super(message); }
}

declare global {
  interface Window {
    naver?: { maps?: NaverMaps };
    navermap_authFailure?: () => void;
    STAMPY_MAP_CONFIG?: { naverKeyId?: string };
    __stampyNaverReady?: () => void;
  }
}

const authListeners = new Set<() => void>();
let authFailed = false;
let sdk: Promise<NaverMaps> | null = null;

/** Subscribe to authentication failures, which the SDK can report after the map appears. */
export function onAuthFailure(fn: () => void) {
  if (authFailed) fn();
  authListeners.add(fn);
  return () => { authListeners.delete(fn); };
}

function loadScript(src: string, timeoutMs: number) {
  return new Promise<void>((resolve, reject) => {
    const el = document.createElement('script');
    const timer = setTimeout(() => reject(new Error('timeout')), timeoutMs);
    el.src = src;
    el.async = true;
    el.onload = () => { clearTimeout(timer); resolve(); };
    el.onerror = () => { clearTimeout(timer); reject(new Error('network')); };
    document.head.appendChild(el);
  });
}

async function readKeyId() {
  if (!window.STAMPY_MAP_CONFIG) {
    try { await loadScript('assets/map-config.js?v=' + Math.floor(Date.now() / 3.6e6), 8000); } catch { /* treated as missing */ }
  }
  return window.STAMPY_MAP_CONFIG?.naverKeyId ?? '';
}

export function loadNaverMaps(): Promise<NaverMaps> {
  if (window.naver?.maps?.Map) return Promise.resolve(window.naver.maps);
  if (sdk) return sdk;
  sdk = (async () => {
    const keyId = await readKeyId();
    if (!/^[A-Za-z0-9_-]{4,}$/.test(keyId)) throw new MapLoadError('no-key', '지도 Key ID가 설정되지 않았어요.');
    const previous = window.navermap_authFailure;
    window.navermap_authFailure = () => {
      authFailed = true;
      authListeners.forEach(l => l());
      if (typeof previous === 'function') previous();
    };
    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => reject(new MapLoadError('load-failed', '지도를 불러오는 데 시간이 너무 오래 걸려요.')), 20000);
      window.__stampyNaverReady = () => {
        // The callback can run before the SDK script finishes; wait a tick before checking.
        setTimeout(() => { clearTimeout(timer); window.naver?.maps?.Map ? resolve() : reject(new MapLoadError('load-failed', '지도 SDK가 준비되지 않았어요.')); }, 0);
      };
      loadScript('https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=' + encodeURIComponent(keyId) + '&callback=__stampyNaverReady', 20000)
        .catch(() => { clearTimeout(timer); reject(new MapLoadError('load-failed', '지도 SDK를 불러오지 못했어요.')); });
    });
    if (authFailed) throw new MapLoadError('auth-failed', '네이버 지도 인증에 실패했어요.');
    return window.naver!.maps;
  })();
  sdk.catch(() => { sdk = null; });
  return sdk;
}

/** Web Mercator pixel position, used for simple zoom-dependent clustering (from the legacy adapter). */
export function toPixel(lat: number, lng: number, zoom: number) {
  const size = 256 * Math.pow(2, zoom);
  const sin = Math.sin(Math.max(-85.051, Math.min(85.051, lat)) * Math.PI / 180);
  return { x: (lng + 180) / 360 * size, y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * size };
}

export const KOREA_BOUNDS: [[number, number], [number, number]] = [[32.5, 124.3], [39.2, 132.0]];

/** A safe link to view a place on NAVER Map (search by address; place URL when verified). */
export function naverMapLink(v: { naverPlaceUrl?: string; roadAddress: string; name: string }) {
  if (v.naverPlaceUrl) return v.naverPlaceUrl;
  return 'https://map.naver.com/p/search/' + encodeURIComponent(v.roadAddress + ' ' + v.name);
}
