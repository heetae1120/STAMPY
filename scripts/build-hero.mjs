import { build } from 'esbuild';
await build({
  entryPoints: ['src/review-tree.ts'],
  outfile: 'assets/review-tree/tree.js',
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
  console.log(`Built review tree: ${Math.round(bytes / 1024)} KiB, static GitHub Pages asset.`);
});
