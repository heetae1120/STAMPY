// Local preview that behaves like GitHub Pages: the repo is served under /STAMPY/,
// folders serve index.html and unknown paths get 404.html with a 404 status.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const BASE = process.env.BASE ?? '/STAMPY/';
const PORT = Number(process.env.PORT ?? 8080);
const ROOT = process.cwd();
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8' };

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/' ) { res.writeHead(302, { location: BASE }); return res.end(); }
  if (!url.pathname.startsWith(BASE) && url.pathname + '/' !== BASE) { res.writeHead(404); return res.end('outside base'); }
  let rel = decodeURIComponent(url.pathname.slice(BASE.length - 1));
  let file = normalize(join(ROOT, rel));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  try {
    const s = await stat(file);
    if (s.isDirectory()) {
      if (!url.pathname.endsWith('/')) { res.writeHead(301, { location: url.pathname + '/' + url.search }); return res.end(); }
      file = join(file, 'index.html');
    }
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    const body = await readFile(join(ROOT, '404.html')).catch(() => 'not found');
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end(body);
  }
}).listen(PORT, '127.0.0.1', () => console.log(`STAMPY preview: http://127.0.0.1:${PORT}${BASE}`));
