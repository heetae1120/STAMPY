import type { MapProblem } from '../../map/naverSdk';
import { Mascot } from '../../art/Mascot';

const COPY: Record<MapProblem, [string, string]> = {
  'no-key': ['지도 설정이 아직 끝나지 않았어요', '네이버 지도 Key ID가 등록되지 않아 지도를 표시할 수 없어요.'],
  'auth-failed': ['네이버 지도 인증에 실패했어요', '등록된 지도 Key ID가 유효하지 않거나, 이 주소가 지도 서비스에 등록되지 않았어요.'],
  'load-failed': ['지도를 불러오지 못했어요', '네트워크 상태를 확인한 뒤 새로고침해 주세요.'],
};

/** Shown instead of the map. The venue list next to it keeps working. */
export function MapFallback({ problem }: { problem: MapProblem }) {
  const [title, body] = COPY[problem];
  return (
    <div className="xmap-fallback" role="status">
      <Mascot pose="discover" size={72} />
      <b>{title}</b>
      <p>{body} 매장 목록에서 체험단을 계속 찾아볼 수 있어요.</p>
      {problem !== 'load-failed' && (
        <details>
          <summary>운영자 안내</summary>
          <p>NAVER Cloud 콘솔의 Maps 애플리케이션에서 Dynamic Map을 사용 설정하고, Web 서비스 URL에 <code>https://heetae1120.github.io</code>(개발 시 <code>http://127.0.0.1:8080</code>)를 등록한 뒤 발급된 Key ID를 <code>assets/map-config.js</code>의 <code>naverKeyId</code>에 넣어 주세요. Client Secret은 넣지 않아요.</p>
        </details>
      )}
    </div>
  );
}
