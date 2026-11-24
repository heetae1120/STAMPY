// Builds the STAMPY app and writes an HTML shell for every route so GitHub Pages can serve
// deep links and refreshes (plus 404.html as the fallback for unknown paths).
//   BASE=/STAMPY/ node scripts/build-app.mjs
import { build } from 'esbuild';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const BASE = process.env.BASE ?? '/STAMPY/';
const OUT = 'assets/app';
rmSync(OUT, { recursive: true, force: true });

const result = await build({
  entryPoints: { main: 'app/main.tsx', app: 'app/styles/app.css' },
  outdir: OUT,
  bundle: true,
  splitting: true,
  format: 'esm',
  minify: true,
  target: ['es2020'],
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'linked',
  chunkNames: 'chunks/[name]-[hash]',
  loader: { '.woff2': 'file' },
  metafile: true,
});

// Route list for static shells. Dynamic slugs come from the demo catalog.
const routesBundle = await build({
  entryPoints: ['app/data/catalog.ts'], bundle: true, write: false, format: 'esm', platform: 'node',
});
const mod = await import('data:text/javascript;base64,' + Buffer.from(routesBundle.outputFiles[0].text).toString('base64'));
const pages = [
  ['', 'STAMPY 스탬피 | 리뷰하고 스탬프 모으는 체험단'],
  ['about', 'STAMPY 소개'], ['how-it-works', '이용 방법'], ['explore', '보물지도 탐험'],
  ['experiences', '체험단 모집'], ['rewards', '리워드샵'], ['brands', '브랜드 제휴'], ['faq', 'FAQ'],
  ['login', '탐험 시작하기'], ['my', '마이페이지'], ['my/profile', '프로필'], ['my/stickerbook', '나의 스티커북'],
  ['my/stamps', '스탬프 내역'], ['my/experiences', '체험단 활동'], ['my/reviews', '리뷰 미션'],
  ['my/redemptions', '교환 신청 내역'], ['admin', '운영 대시보드'], ['styleguide', '디자인 시스템'],
  ...mod.CAMPAIGNS.map(c => ['experiences/' + c.slug, c.title]),
  ...mod.REWARDS.map(r => ['rewards/' + r.slug, r.name]),
];

const shell = (title, description) => `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<base href="${BASE}">
<title>${title.includes('STAMPY') ? title : title + ' | STAMPY 스탬피'}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#FFF8EB">
<link rel="icon" href="assets/app/favicon.svg" type="image/svg+xml">
<link rel="preload" href="assets/fonts/PretendardVariable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/fonts/pretendard.css">
<link rel="stylesheet" href="assets/fonts/jua/jua.css">
<link rel="stylesheet" href="assets/fonts/fredoka/fredoka.css">
<link rel="stylesheet" href="${OUT}/app.css">
<script type="module" src="${OUT}/main.js"></script>
</head>
<body>
<div id="root" aria-busy="true"><noscript><div style="max-width:560px;margin:60px auto;padding:24px;font-family:sans-serif;line-height:1.6"><h1>STAMPY 스탬피</h1><p>브랜드 체험단에 참여하고, 리뷰 미션을 완료해 스탬프와 스티커를 모으고, 모은 스탬프를 브랜드 상품으로 교환하는 서비스예요. 이 사이트는 자바스크립트가 필요해요.</p></div></noscript></div>
</body>
</html>
`;
const description = '새로운 브랜드를 발견하고, 직접 경험한 이야기를 남겨보세요. 차곡차곡 모은 스탬프가 진짜 선물이 됩니다.';
for (const [path, title] of pages) {
  const file = path ? join(path, 'index.html') : 'index.html';
  mkdirSync(dirname(file) || '.', { recursive: true });
  writeFileSync(file, shell(title, description));
}
writeFileSync('404.html', shell('페이지를 찾을 수 없어요', description));
writeFileSync(join(OUT, 'favicon.svg'), readFileSync('app/art/favicon.svg'));

const bytes = Object.entries(result.metafile.outputs).filter(([f]) => f.endsWith('.js')).map(([f, o]) => [f, o.bytes]);
const main = bytes.find(([f]) => f.endsWith('main.js'));
console.log(`Built app: main ${Math.round(main[1] / 1024)} KiB, ${bytes.length} JS files, ${pages.length} route shells + 404.html (base ${BASE}).`);
