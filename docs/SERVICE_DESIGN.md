# STAMPY 서비스 설계 — Treasure Map × Sticker Collection

이 문서는 새 STAMPY 사이트의 구조, 디자인 시스템, 데이터 모델, 비즈니스 규칙과 백엔드 연결 지점을 정리합니다.
현재 사이트는 **데모 버전**입니다. 모든 데이터는 브라우저 localStorage에 저장되는 데모 서버(`app/api/demo.ts`)가 처리하며, 실제 신청·지급·교환·발송은 일어나지 않습니다.

## 1. 세계관과 보상 체계

| 구분 | 스티커 | 스탬프 |
| --- | --- | --- |
| 역할 | 브랜드를 경험했다는 **수집 기록** | 상품 교환에 쓰는 **재화** |
| 획득 | 리뷰 미션 승인 시 체험단의 스티커 1장 (+ 스페셜 규칙) | 리뷰 미션 승인 시 체험단별 정해진 수량 |
| 사용 | 사용·소모되지 않음 | 리워드샵 교환 시 차감, 취소 시 환급 |
| UI | 복숭아색 종이 스티커 아이콘, 스티커북 | 보라색 원형 도장 코인, 스탬프 카드 |

기본 흐름: `신청 → 선정 → 체험 → 리뷰 제출 → 검수 → 승인 → 스탬프 지급 → 스티커 획득`

- 신청·리뷰 제출만으로는 지급하지 않습니다. 제출된 리뷰의 스탬프는 "적립 예정"으로만 표시합니다.
- 검수 기준은 **체험 사실, 미션 항목, 광고(제공) 표기**뿐입니다. 평점·긍정적 표현·추천 여부는 승인 조건이 아니며, UI 어디에서도 평점을 묻지 않습니다.
- 보완 요청(`changes_requested`)된 리뷰는 다시 제출할 수 있고, 반려(`rejected`)된 미션은 다시 제출할 수 없습니다.
- 리워드샵 상품은 사용자가 직접 고릅니다. 보물상자는 상품을 보여주는 장식이며 무작위 지급을 하지 않습니다.

## 2. 사이트맵

| 경로 | 파일 | 내용 |
| --- | --- | --- |
| `/` | `app/pages/Home.tsx`, `components/HomeHero.tsx` | 보물지도 히어로(6장면 인트로) + 8개 스토리 섹션 |
| `/about` | `pages/About.tsx` | 5챕터 브랜드 스토리북 |
| `/how-it-works` | `pages/HowItWorks.tsx` | 8단계 흐름, 스티커/스탬프 차이, 공정 리뷰 정책 |
| `/explore` | `pages/Explore.tsx` | 인터랙티브 보물지도 + 섬 패널 (모바일: 좌우로 미는 지도) |
| `/experiences` | `pages/Experiences.tsx` | 검색·카테고리·상태·정렬 (URL 쿼리와 동기화), 로딩·오류·빈 상태 |
| `/experiences/:slug` | `pages/ExperienceDetail.tsx` | 상세 13개 항목 + 신청 모달과 상태 흐름 |
| `/rewards`, `/rewards/:slug` | `pages/Rewards.tsx`, `RewardDetail.tsx` | 리워드샵, 4단계 교환 흐름 |
| `/brands` | `pages/Brands.tsx` | 브랜드 제휴 소개와 문의 폼 |
| `/faq` | `pages/Faq.tsx` | 검색 가능한 FAQ |
| `/login` | `pages/Login.tsx` | 데모 로그인 (새 탐험가 / 예시 탐험가 / 운영자), 계정 전환, 데모 초기화 |
| `/my`, `/my/*` | `pages/my/*` | 개요, 스티커북, 스탬프, 체험단, 리뷰 미션, 교환 내역, 프로필 |
| `/admin` | `pages/admin/Admin.tsx` | 운영 콘솔: 신청자 선정, 리뷰 검수, 스탬프 원장, 교환·재고, 체험단 수정, 운영 기록 |
| `/styleguide` | `pages/Styleguide.tsx` | 디자인 시스템과 일러스트 자산 모음 |

기존 페이지는 보존했습니다: 이전 업체 소개 페이지 `classic.html`, 리뷰어 캠페인 페이지 `campaigns.html` (기존 localStorage 키 `stampy-mine`을 그대로 사용하며 새 앱은 `stampy.demo.v1`을 씁니다).

## 3. 디자인 시스템

- 색: Cream `#FFF8EB`, Ivory `#FFFCF5`, Lavender `#BCA7F5`, Grape `#7652BA`, Butter `#FFE39A`, Peach `#FFAE98`, Mint `#B7DFC4`, Sky `#B7DBF3`, Pink `#F7BBD0`, Ink Brown `#4A3A42` (`app/styles/base.css`, `app/art/palette.ts`).
- 글꼴: 헤드라인 Jua, 본문 Pretendard, 영문 포인트와 숫자 Fredoka. 모두 OFL이며 `assets/fonts/`에 자체 호스팅합니다.
- 컴포넌트: 눌리는 종이 버튼(`.btn`), 칩·세그먼트 필터, 배지, 종이 카드, 마스킹테이프, 모달(포커스 가둠·ESC·포커스 복귀), 토스트.
- 일러스트(`app/art/`): 모두 직접 그린 SVG 컴포넌트이며 같은 잉크 외곽선(3px 기준), 파스텔 채색, 종이 오림 필터(`f-cutout`), 다이컷 스티커 필터(`f-sticker`)를 공유합니다.
  - `Mascot` — 고무도장 탐험가 STAMPY, 포즈 8종: idle, walk, discover, joy, stamp, chest, flag, sleep
  - `TreasureMap` — 1200×800 보물지도. 섬은 실제 링크, 보물상자는 리워드 미리보기 버튼
  - `Island` — 카테고리 섬 6종 + 기타
  - `Sticker` — 수집 스티커 24종, 미획득 실루엣
  - `Deco` — 보물상자(열림 상태), 스탬프 자국, 도장, 별, 구름, 깃발
- 모션: 지도 펼침(A), 탐험가 걷기(B), 스티커 떼기(C)·붙이기(D), 도장 찍기(E), 보물상자 열기(F), 페이지 넘김(G), 버튼·카드·섬 마이크로 인터랙션(H). 히어로는 GSAP 타임라인, 나머지는 CSS와 IntersectionObserver로 동작하며 스크롤 이벤트 리스너를 쓰지 않습니다. `prefers-reduced-motion`에서는 모든 연출을 건너뛰고 최종 상태를 보여줍니다.

## 4. 데이터 모델 (`app/api/types.ts`)

| 엔터티 | 주요 필드 |
| --- | --- |
| User | id, nickname, role(member/admin), intro, channels, seenStickersAt, seenStampsAt |
| Brand | id, name, tagline, intro, demo |
| Campaign | slug, brandId, category, kind, channels, quota, recruitStart/End, announceAt, reviewDeadline, stamps, stickerId, benefit, conditions, mission, eligibility, notices |
| Application | campaignId, userId, status(applied/selected/rejected/cancelled/completed), channel, channelUrl, plan — (campaign, user) 당 1행 |
| Review | applicationId, url, channel, memo, status(submitted/approved/changes_requested/rejected), decidedAt, decisionNote |
| StickerDef / UserSticker | 스티커 정의 / 실제 획득 기록 (user, sticker 당 1행) |
| LedgerEntry | userId, type(earn/spend/refund/adjust), amount(±), reason, refType, refId, **idempotencyKey(고유)** |
| Reward | slug, brandId, cost, initialStock, limitPerUser, shipping, conditions |
| Redemption | rewardId, cost, status(requested/preparing/shipped/delivered/cancelled), shipping, **idempotencyKey** |
| AdminAction | actorId, action, target, note, at |
| BrandInquiry | company, contact, email, category, message |

잔액은 저장하지 않고 항상 원장 합계로 계산합니다 (`balanceOf`).

## 5. 핵심 규칙 (데모 서버에 구현, 실제 서버에서도 동일하게 강제)

1. **한 리뷰에 한 번만 지급**: 지급 원장 키 `review:{reviewId}`. 같은 승인이 반복돼도 원장 행이 추가되지 않습니다.
2. **교환은 하나의 트랜잭션**: 같은 요청 키로 재시도하면 처음 결과를 돌려줍니다 → 재고·잔액·1인 한도 재검증 → 교환 생성 + 재고 차감 + 원장 `spend` 기록을 한 번에 저장합니다. 실패하면 아무것도 저장하지 않습니다.
3. **취소는 역거래**: 원장 행을 지우지 않고 `refund:{redemptionId}` 키의 환급 행을 추가하며 재고를 되돌립니다. 준비가 시작된 뒤에는 사용자가 취소할 수 없습니다.
4. **선정 정원**: 선정·완료 수가 quota를 넘을 수 없습니다. 리뷰가 제출된 신청은 선정을 되돌릴 수 없습니다.
5. **권한**: 운영 기능은 role=admin만 가능합니다. 클라이언트가 보낸 역할이나 사용자 ID를 신뢰하지 않습니다.
6. **모집 상태**: 모집 전(`NOT_OPEN`)·마감(`CLOSED`) 체험단은 신청을 거부합니다. 중복 신청은 `DUPLICATE`입니다.

데모 서버는 쓰기마다 저장소를 다시 읽고 `navigator.locks`로 잠근 뒤 한 번에 저장합니다. 그래도 localStorage는 사용자가 수정할 수 있으므로 **보안 경계가 아닙니다**. 실제 잔액·재고·지급은 서버 DB 트랜잭션으로 처리해야 합니다.

검증: `npm test` (`tests/demo-rules.test.mjs`)가 위 규칙들을 실행해 확인합니다.

## 6. 백엔드 연결 지점

UI는 `app/api/demo.ts`의 비동기 함수만 호출합니다. 같은 이름과 반환 형태를 유지하는 HTTP 클라이언트로 바꾸면 화면 코드를 고치지 않고 연결할 수 있습니다. 오류는 `ApiError(code, message, fields)` 형태를 그대로 씁니다 (BACKEND_PLAN.md의 오류 형식과 같음).

| 데모 함수 | 제안 API | 비고 |
| --- | --- | --- |
| `login`, `logout`, `session` | `POST /api/v1/auth/login`, `POST /auth/logout`, `GET /me` | 실제 가입·이메일 인증·HttpOnly 세션 필요. 데모의 닉네임 로그인은 제거 |
| `listCampaigns`, `getCampaign` | `GET /campaigns`, `GET /campaigns/:slug` | 신청 수는 DB에서 계산 |
| `apply`, `cancelApplication` | `POST /campaigns/:id/applications`, `DELETE .../applications/me` | (campaign, user) 고유 제약 |
| `submitReview` | `POST /me/applications/:id/reviews` | URL은 HTTPS만, 서버가 자동으로 열지 않음 |
| `balanceOf`, 원장 조회 | `GET /me/stamps`, `GET /me/stamps/ledger` | 원장 합계로 계산 |
| `listRewards`, `getReward` | `GET /rewards`, `GET /rewards/:slug` | |
| `redeem` | `POST /rewards/:id/redemptions` + `Idempotency-Key` 헤더 | 단일 DB 트랜잭션, 재고 행 잠금 |
| `cancelRedemption` | `POST /me/redemptions/:id/cancel` | 환급 역거래 |
| `updateProfile`, `markSeen` | `PATCH /me/profile`, `POST /me/seen` | |
| `submitInquiry` | `POST /brand-inquiries` | 동의·요청 제한 |
| `setApplicationStatus`, `decideReview`, `setRedemptionStatus`, `adjustStock`, `editCampaign` | `/api/v1/admin/...` | 운영자 권한, 모든 처리에 AdminAction 기록 |

개인정보: 배송지·연락처는 교환 처리에 필요한 기간만 암호화 보관하고, 목록에서는 마스킹하며(`maskPhone`), 운영 콘솔에서도 배송 담당자만 전체 주소를 보도록 설계합니다. 채널 주소 입력은 계정 소유 인증이 아닙니다.

## 7. 빌드와 배포

```bash
npm ci
npm run typecheck
npm test
npm run build      # 앱 + classic.html용 이전 히어로
npm run serve      # http://127.0.0.1:8080/STAMPY/ (GitHub Pages처럼 동작)
```

- `scripts/build-app.mjs`가 `assets/app/`에 코드 분할된 번들을 만들고, 모든 경로(체험단·리워드 슬러그 포함)에 HTML 셸과 `404.html`을 써서 GitHub Pages에서 새로고침·직접 접속이 되도록 합니다.
- 저장소 이름이 바뀌면 `BASE=/새이름/ npm run build:app`으로 다시 빌드합니다 (셸의 `<base href>`와 라우터가 이 값을 씁니다).
- GitHub Pages는 정적 호스팅이라 인증·데이터 저장·지급·차감을 안전하게 처리할 수 없습니다. 운영 전환 시 위 API를 제공하는 서버(BACKEND_PLAN.md의 Node + SQLite/PostgreSQL 안)를 별도로 배포해야 합니다.
