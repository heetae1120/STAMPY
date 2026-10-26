# 백엔드 구현 준비

## 이번 작업의 범위

첨부된 원본 정적 사이트를 복원하고 로컬 첫 커밋을 만든다. 백엔드는 이 문서로 구현 범위를 준비하며 아직 서버·DB·로그인은 구현하지 않는다. GitHub push, Pages 설정 및 외부 배포는 이번 범위에 포함하지 않는다. 원본 HANDOFF.md는 당시 상태를 기록한 문서로 보존한다.

## 현재 실행

- Python 3: `python -m http.server 8000 --bind 127.0.0.1 --directory /workspace/STAMPY`
- 업체: `/index.html`, 리뷰어: `/campaigns.html`
- 빌드·패키지 설치·API 키 없이 실행 가능. Google Fonts가 차단되면 시스템 폰트 사용.
- `styles.css`는 업체 페이지 전용이며 리뷰어 CSS/JS는 campaigns.html 안에 있다.
- 데이터는 예시 12개이며 신청과 프로필은 해당 브라우저의 localStorage에만 저장된다.

## 제안하는 첫 구현

현재 정적 UI와 URL을 유지하면서 같은 출처의 `/api/v1`을 추가한다. 개발 기준안은 Node.js 24 LTS + 내장 SQLite(`node:sqlite`)로, 외부 DB 자격 증명 없이 로컬 개발 가능하게 한다. 실제 구현 때 지원 상태와 운영 환경 적합성을 다시 확인한다. DB는 웹 공개 디렉터리 밖에 두고 마이그레이션을 버전 관리한다. 여러 서버로 운영할 때는 관리형 PostgreSQL 전환을 검토한다. GitHub Pages는 정적 호스팅이므로 이 서버를 실행하지 못한다. 운영 배포 대상은 별도로 선택해야 한다.

### 데이터 모델

- users: id, email(정규화·고유), password_hash, role(reviewer/owner), created_at. 사장님 권한은 가입 요청만으로 부여하지 않고 관리 절차로 부여한다.
- sessions: 해시된 토큰, user_id, expires_at, revoked_at. 브라우저에 비밀번호·원본 토큰을 localStorage로 저장하지 않는다.
- reviewer_profiles: user_id, name, chname, chcat, visitors, neighbors, blog, insta, yt, notify, updated_at. 연락처·배송지는 별도 비공개 필드로 분리한다.
- campaigns: id, owner_id, type, cat, title, offer, quota, opens_at, closes_at, visit, mission, status. 채널은 campaign_channels로 관리한다.
- applications: id, campaign_id, reviewer_id, channel, url, plan, status(applied/selected/rejected/cancelled), created_at, updated_at. (campaign_id, reviewer_id) 고유 제약. 취소 후 재신청 규칙은 같은 행의 상태 갱신으로 일관되게 처리한다.
- consultations: id, business_name, contact, campaign_type, message, consent_at, created_at. 보관 기간·수신 담당자는 운영 정책 확정 후 설정한다.

예시의 applied 숫자는 실제 신청 수로 가져오지 않는다. 운영 데이터의 신청 수는 DB에서 계산한다. dday는 저장된 고정 숫자 대신 마감 시각으로 계산하고 UI 표시 기준은 Asia/Seoul로 통일한다. 현재 12개 캠페인은 개발용 seed로만 분리하고 seed 반복 실행 시 중복되지 않게 한다.

### API 계약 초안

| 메서드와 경로 | 동작 / 권한 |
| --- | --- |
| POST /api/v1/auth/register | 리뷰어 가입, 이메일·비밀번호 검증 |
| POST /api/v1/auth/login | 세션 발급, 실패 횟수 제한 |
| POST /api/v1/auth/logout | 서버 세션 폐기 |
| GET /api/v1/me | 현재 사용자, 미인증은 401 |
| GET, PATCH /api/v1/me/profile | 본인 프로필 조회·저장 |
| GET /api/v1/campaigns | 검색·종류·카테고리·정렬·페이지 크기 제한 |
| GET /api/v1/campaigns/:id | 공개 캠페인 상세 |
| GET /api/v1/me/applications | 본인 신청 목록 |
| POST /api/v1/campaigns/:id/applications | 로그인한 리뷰어만 신청, 중복 409, 마감 409 |
| DELETE /api/v1/campaigns/:id/applications/me | 본인 신청 취소, 이미 취소한 경우도 성공 |
| GET /api/v1/owner/campaigns | 로그인한 사장님 소유 캠페인만 반환 |
| GET /api/v1/owner/campaigns/:id/applications | 소유권 검증 후 신청자 공개 프로필과 신청 내용만 반환 |
| PATCH /api/v1/owner/campaigns/:id/applications/:applicationId | 소유권·정원·상태 전이 검증 후 선정/거절 |
| POST /api/v1/consultations | 동의 필수, 입력 제한·요청 제한·중복 제출 대응 |

오류 형식은 `{ "error": { "code": "...", "message": "...", "fields": {} } }`로 통일한다. 입력 검증 오류 400, 미인증 401, 권한 없음 403, 없음 404, 충돌 409, 요청 제한 429를 구분한다. 다른 사장님의 캠페인은 응답 정책에 따라 404로 숨길 수 있다.

### 보안과 개인정보

- 매 요청에서 서버가 본인 여부와 캠페인 소유권을 검증한다. 클라이언트가 보낸 role/user_id를 신뢰하지 않는다.
- 비밀번호는 salt와 scrypt 등 검증된 비밀번호 해시 사용. 세션 쿠키는 HttpOnly, SameSite=Lax, 운영 HTTPS에서 Secure. 상태 변경 요청은 CSRF 토큰과 Origin 검증을 적용한다.
- SQL은 바인딩 인자를 쓰고, 사용자 문자열은 기존 esc 처리처럼 안전하게 렌더링한다. 채널 주소는 URL 파서로 유효한 HTTPS URL만 허용하고 서버가 해당 URL을 자동 요청하지 않는다.
- 신청자 목록에 주소·연락처·성별·연령대를 기본 공개하지 않는다. 선정 후 배송에 필요한 필드의 접근 정책을 별도로 설계한다.
- 연락처·주소·세션·비밀번호는 로그에 기록하지 않는다. 배포 전 개인정보처리방침과 보관/삭제 규칙을 확정한다.
- 미디어 URL 입력은 계정 소유권 인증이 아니다. OAuth를 구현하기 전에는 실제 인증 완료로 표시하지 않는다.

## 구현 순서와 완료 기준

1. 서버 정적 파일 제공, `/api/v1/health`, DB 마이그레이션과 반복 가능한 개발 seed. 민감 파일과 DB는 정적 서버가 제공하지 않게 한다.
2. 가입·로그인·로그아웃, 프로필 API. 사용자 두 명으로 데이터 격리, 세션 만료·폐기·CSRF를 검증한다.
3. 캠페인 조회·신청·취소를 API로 연결. 네트워크 실패를 성공으로 표시하지 않으며 localStorage는 로그인 사용자의 서버 데이터로 자동 병합하지 않는다. 필요한 가져오기는 명시적 미리보기·동의·중복 검증으로 처리한다.
4. 사장님 신청자 목록·선정. 다른 사장님 접근 거부, 중복/동시 신청, 마감, 정원 초과 선정 방지를 트랜잭션과 통합 테스트로 확인한다.
5. 상담 폼과 접수 API. 저장 성공 후에만 접수 완료를 보여준다. 이메일/SMS 발송은 제공자 선택과 보안 설정 후 별도 연결하며 DB 접수를 발송 완료라고 표시하지 않는다.
6. 기존 검색·메뉴·프로필 미리보기·광고 표시 동의·신청 취소를 브라우저로 회귀 검증한다. 데스크톱/400px, 라이트/다크 모드를 확인한다.

## 복원본에서 확인할 후속 사항

- 상담 버튼은 현재 #contact로 이동할 뿐 실제 접수되지 않는다.
- 프로필/신청 저장 실패를 빈 catch로 숨기므로 실제 백엔드 연결 때 실패 UI가 필요하다.
- 신청 URL 안내는 HTTPS이지만 현재 검증식은 HTTP도 허용한다. 서버·브라우저 검증을 함께 정렬해야 한다.
- 가격·회사명·운영 정책 자리표시자는 운영자가 제공해야 한다. 임의로 실제 정보처럼 채우지 않는다.

## 현재 인스턴스 검증 결과

2026-10-26, Python 3.12 정적 서버와 Chromium/Playwright로 확인했다.

- 통과: 예시 12개 렌더링, 검색 결과 없음·초기화, 프로필 저장·새로고침 유지, 신청 폼 자동 채움, 신청·새로고침 유지·취소, FAQ 토글, JavaScript 실행 예외 없음.
- 레이아웃: 리뷰어 페이지는 400px에서 문서 너비 400px 유지(라이트/다크). 업체소개 페이지는 같은 조건에서 문서 너비 414px로 가로 넘침. `.stamp.empty`의 오른쪽 끝이 약 413.6px이다. 원본 보존 범위이므로 수정하지 않았다.
- 백엔드·로그인·DB·실제 상담 접수는 아직 구현하지 않았으므로 검증 대상이 아니다.
- 원본 파일 6개는 첨부 ZIP과 바이트 단위 일치한다.
