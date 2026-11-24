# 네이버 지도(내 주변 지도) 설정 안내

`/experiences?view=map`의 실제 지도는 NAVER Cloud **Maps** 상품의 Web Dynamic Map JavaScript SDK를 씁니다. 일러스트 보물지도(`/explore`)와는 다른 화면이에요.

## 현재 상태 (2026-11-24 확인)

- `assets/map-config.js`의 공개 Key ID `cbnhtsqnqq`로 SDK(v3.10.5)를 불러오면 인증 요청이 `Authentication Failed / Invalid authentication information`으로 거절됩니다.
  - 운영 주소(`https://heetae1120.github.io/STAMPY/`)와 개발 주소(`http://127.0.0.1:8080/STAMPY/`) 모두 같은 결과였어요.
  - 존재하지 않는 임의의 키와 응답이 똑같아서, 서비스 URL 등록 문제라기보다 **키 자체가 현재 Maps 서비스에서 유효하지 않은 것**으로 보여요. 예를 들어 이전 AI·NAVER API 상품에서 발급된 키이거나, 삭제된 애플리케이션의 키일 수 있어요.
- 그래서 지금 사이트는 지도 자리에 "네이버 지도 인증에 실패했어요" 안내를 보여주고, 매장 목록·필터·상세·신청은 그대로 쓸 수 있어요.
- 실제 네이버 지도 타일과 마커가 표시되는 것은 **아직 검증하지 못했어요.** 마커·클러스터·목록 연동·영역 재검색은 SDK를 흉내 낸 테스트용 대체 코드(fixture)로만 확인했어요.

## 해야 할 일

1. NAVER Cloud 콘솔 → **Maps** → Application에서 애플리케이션을 새로 만들고 **Dynamic Map**을 선택해요.
   - 공식 가이드: Maps API가 업그레이드되면서 신규 클라이언트 아이디 발급이 필요하다고 안내하고 있어요.
2. **Web 서비스 URL**에 다음 두 주소를 등록해요.
   - `https://heetae1120.github.io`
   - 개발용 `http://127.0.0.1:8080`
   - 하위 경로(`/STAMPY/`)나 포트를 따로 적어야 하는지는 콘솔 안내를 따라 주세요.
3. 발급된 **Client ID(Key ID)**를 `assets/map-config.js`의 `naverKeyId`에 넣어요. 다시 빌드할 필요 없이 이 파일만 배포하면 바로 적용돼요.
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
