# 폰트·아이콘과 네이버 지도 연동 준비

## 적용한 리소스

두 HTML 페이지는 로컬 `assets/fonts/pretendard.css`와 `PretendardVariable.woff2`를 사용한다. Pretendard 1.3.9 npm 배포본을 레지스트리 SHA-512 무결성과 비교한 후 추출했고 라이선스를 함께 저장했다. Google Fonts 의존성을 제거했다. 본문·제목·폼·지도 컨트롤·마커 숫자·팝업의 폰트를 통일했다.

브랜드 아이콘은 Simple Icons 16.36.0의 Naver, Instagram, YouTube, YouTube Shorts SVG를 사용한다. 같은 방식으로 배포본 무결성을 확인했고 `assets/icons/Simple-Icons-LICENSE.md`를 포함한다. Naver 아이콘은 네이버블로그 채널 표시에, YouTube Shorts 아이콘은 숏폼 분류 표시에 사용한다. 스토어·플랫폼 구매리뷰는 여러 서비스를 포함하는 분류이므로 특정 플랫폼 로고로 단정하지 않고 공통 쇼핑 아이콘을 유지한다. 아이콘 소스의 라이선스는 브랜드 상표 사용 권한을 추가로 부여하는 것이 아니다.

## 현재 지도 동작

휠 확대·축소를 활성화했고 줌 범위는 7~19, 이동 범위는 북위 32.5~39.2 / 동경 124.3~132.0의 한국 중심 경계로 제한했다. 제주를 포함한다. 이 경계는 지리적 사각형이므로 해안 주변의 일부 인접 지역까지 화면 가장자리에 보일 수 있으며 한국 국경 모양으로 타일을 잘라낸 것이 아니다. 실제 지도 서비스는 여전히 Leaflet/OpenStreetMap이다.

## 네이버 지도로 전환 가능한가

가능하다. 다만 현재 실행 환경과 환경 초안에는 네이버 Maps 관련 키/바인딩이 없다. 실제 인증된 Naver 지도를 띄웠다고 검증하지 않았다.

사용자가 준비할 사항:

1. 네이버 클라우드 Maps 애플리케이션 생성 및 웹 지도용 Dynamic Map 사용 설정.
2. Web 서비스 URL에 `https://heetae1120.github.io` 등록. 개발 주소는 콘솔의 현재 허용 규칙에 따라 별도로 등록한다.
3. 웹 SDK에 사용하는 공개 Key ID 준비. Client Secret은 브라우저 코드나 Git에 넣지 않는다. 클라이언트 지도 표시에는 비밀키를 요청하지 않는다.
4. 계정의 이용 조건·할당량·요금 확인.

공식 저장소의 시작 문서에서 현재 SDK 로딩 예시를 확인했다:

`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=YOUR_CLIENT_ID`

확인한 출처:

- https://navermaps.github.io/maps.js.ncp/docs/tutorial-1-Getting-Client-ID.html
- https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html

공식 GitHub 저장소의 해당 문서 원문을 읽어 확인했다. 레거시 `ncpClientId` 예시도 문서에 남아 있으므로 새 애플리케이션에는 발급 방식에 맞는 `ncpKeyId` 예시를 기준으로 설정한다.

키와 도메인 등록이 준비되면 지도/마커/팝업/클러스터·한국 경계·휠 동작을 Naver Maps API로 이식하고, 현재의 채널·카테고리·검색 필터와 신청 모달을 연결한다. 인증 실패 시 지도 목록 fallback을 유지하며 실제 배포 도메인에서 지도 표시·제주 포함 위치 선택·신청·모바일을 다시 검증한다. SDK가 실제 요청하는 도메인은 런타임에서 확인해 환경 네트워크 정책에 필요한 범위만 추가한다.
