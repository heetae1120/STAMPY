import { build } from 'esbuild';
await build({
  entryPoints: ['src/hero-03.tsx'],
  outfile: 'assets/hero-03/hero.js',
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es2020'],
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'linked',
  metafile: true,
}).then(({ metafile }) => {
  const bytes = Object.values(metafile.outputs).reduce((total, file) => total + file.bytes, 0);
  console.log(`Built Hero 03: ${Math.round(bytes / 1024)} KiB, static GitHub Pages asset.`);
});
