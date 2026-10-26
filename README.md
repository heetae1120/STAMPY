# 스탬피

식당, 카페, 제품 체험단 플랫폼 스탬피의 웹사이트입니다.

- `index.html`: 업체소개 메인페이지. Originkit Hero 03 기반 원근 갤러리와 기존 서비스 안내.
- `campaigns.html`: 리뷰어 캠페인 페이지.
- `styles.css`: 업체소개 페이지 스타일. 리뷰어 스타일은 해당 HTML 안에 있습니다.

## 개발과 빌드

Node.js 24와 npm 기준:

```sh
npm ci
npm run typecheck
npm run build
python -m http.server 8000 --bind 127.0.0.1
```

`npm run build`는 `src/hero-03.tsx` 및 Originkit에서 가져온 터널 렌더러를 `assets/hero-03/hero.js`로 묶습니다. 빌드 결과도 Git에 포함하므로 GitHub Pages는 루트 정적 파일을 그대로 배포합니다. 런타임 서버나 Originkit API 키가 필요하지 않습니다.

Hero 03의 3D 터널/반응형 크기 소스는 `components/originkit/ui/hero-03`에 있습니다. 정적 HTML 사이트에 맞게 중앙 문구·버튼·갤러리 대화상자를 `index.html`과 `src/hero-03.tsx`로 연결했습니다. 별도의 Tailwind/Next.js 앱을 도입하지 않았습니다. 상세한 가져오기·변경·검증 기록은 `HERO_03_INTEGRATION.md`를 참고하세요.

수정 후 `npm run build`를 실행하고 소스와 빌드 결과를 함께 커밋하세요. 제공된 API 키는 저장소에 포함하지 않습니다.

`[가격]`, `[회사명]` 등은 운영자가 채울 자리입니다. 캠페인은 예시 데이터이며 신청·프로필은 브라우저 localStorage에만 저장됩니다. 네이버 지도 연동은 Key ID 설정 없이 준비 코드만 저장된 상태입니다.
