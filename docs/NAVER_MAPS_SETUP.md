# 네이버 지도(내 주변 지도) 설정 안내

`/experiences?view=map`의 실제 지도는 NAVER Cloud **Maps** 상품의 Web Dynamic Map JavaScript SDK를 씁니다. 일러스트 보물지도(`/explore`)와는 다른 화면이에요.

## 현재 상태 (2026-11-24 확인)

- `assets/map-config.js`의 Key ID `cbnhtsqnqq`는 NAVER Cloud 콘솔 Maps > Application "stampy"의 Client ID이고, Dynamic Map이 켜져 있어요. **키는 처음부터 유효했어요.**
- 인증 실패의 원인은 **Web 서비스 URL이 `https://heetae1120.github.io/STAMPY/campaigns.html` 한 페이지로만 제한돼 있던 것**이었어요.
  - URL 등록은 앞부분 일치로 판단돼요. 그래서 `campaigns.html`로 시작하는 주소만 통과하고, `/STAMPY/experiences` 같은 새 화면은 모두 `401 Authentication Failed / Invalid authentication information`으로 거절됐어요.
  - 같은 키로 `campaigns.html` 주소를 넣어 인증을 요청하면 정상 응답(`apiKeyInfo: map/webApiGroup`)이 와서 원인을 구분할 수 있었어요.
  - 이 문서의 예전 판에서 "키 자체가 유효하지 않은 것으로 보인다"고 적었던 것은 잘못된 진단이었어요.
- 콘솔에서 Web 서비스 URL을 `https://heetae1120.github.io`와 `http://127.0.0.1:8080`으로 바꿔 저장한 뒤에 다시 확인했어요.
  - 인증 요청(`oapi.map.naver.com/v3/auth`)이 운영 주소 `https://heetae1120.github.io/STAMPY/…`와 개발 주소 `http://127.0.0.1:8080/STAMPY/…`에서 모두 200으로 성공했어요.
  - `window.navermap_authFailure`는 호출되지 않았고, "네이버 지도 인증에 실패했어요" 안내도 뜨지 않았어요.
  - `/experiences?view=map`에서 실제 네이버 지도 타일(`nrbe.pstatic.net`), 네이버 로고, 축척이 표시됐어요. 데모 매장 마커 3개가 보였고, 마커를 클릭하면 매장 카드가 열렸어요.
  - 이 확인은 샌드박스에서 운영 주소(`https://heetae1120.github.io/STAMPY/`)로 로컬 빌드를 띄워 실제 SDK·실제 인증으로 했어요. 배포된 GitHub Pages 자체를 연 것은 아니에요.
- 같은 확인 중에 지도 영역이 0px 높이로 접히는 레이아웃 버그를 찾아 고쳤어요(`app/styles/map.css`의 `.xmap-canvas`). SDK가 지도 요소에 `position: relative`를 덮어써서 생긴 문제예요.

## 설정 방법 (키를 새로 만들거나 주소가 바뀔 때)

1. NAVER Cloud 콘솔 → **Maps** → Application에서 **Dynamic Map**이 선택돼 있는지 확인해요.
2. **Web 서비스 URL**에는 특정 페이지가 아니라 사이트 주소를 등록해요. 특정 페이지 주소를 넣으면 그 페이지에서만 지도가 떠요.
   - `https://heetae1120.github.io`
   - 개발용 `http://127.0.0.1:8080`
   - URL을 추가한 다음 **저장**까지 눌러야 반영돼요.
3. Client ID(Key ID)는 `assets/map-config.js`의 `naverKeyId`에 넣어요. 다시 빌드할 필요 없이 이 파일만 배포하면 바로 적용돼요.
   - **Client Secret은 절대 넣지 않아요.** 브라우저용 지도 표시에는 필요하지 않아요.
4. 이용 조건, 무료 사용량, 요금은 콘솔에서 확인해요. 이 문서에서는 금액을 단정하지 않아요.

SDK 주소는 `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=<Key ID>`이고, 인증 실패는 `window.navermap_authFailure`로 감지해요 (공식 Getting Started 문서 기준). 지도 화면에는 SDK가 그리는 네이버 로고와 저작권 표시가 그대로 나타나요. 가리지 마세요.

## 매장 위치 데이터 원칙

- 공개 지도에는 운영 콘솔에서 **주소·좌표·영업 여부를 모두 확인해 '검증 완료'하고 '지도 노출 승인'까지 한 매장만** 표시돼요.
- 카탈로그의 예시 매장(`app/data/catalog.ts`의 `VENUES`)은 가상의 매장이고, 좌표는 동네 중심 근사값이에요. '데모 매장으로 미리보기'를 켰을 때만 `가상 매장` 표시와 함께 보이고, 검증·노출 승인이 막혀 있어요.
- 레거시 `campaigns.html`의 근사 좌표는 새 서비스로 옮기지 않았어요.

## 주소 → 좌표 변환 (Geocoding)

Geocoding API는 Client Secret을 쓰는 서버 측 호출이 필요해요. 그래서 정적 호스팅인 GitHub Pages에서는 안전하게 호출할 수 없어요. 지금 운영 콘솔에서는 좌표를 직접 입력하고 '네이버 지도에서 주소 대조' 링크로 확인해요. 서버를 붙일 때 `POST /api/v1/admin/venues/geocode` 같은 프록시를 만들고, Secret은 서버 환경 변수에만 둬요.

## 위치 정보와 개인정보

'내 주변' 검색은 브라우저 위치 권한을 요청해요. 받은 좌표는 소수 셋째 자리(약 100m)로 줄여 화면에서만 쓰고 저장하지 않아요. 권한이 없어도 지역 필터와 지도 이동으로 탐색할 수 있어요.
