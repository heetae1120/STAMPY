// Small history router that respects the GitHub Pages base path (<base href="/STAMPY/">).
import { useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent } from 'react';

export const BASE = new URL(document.baseURI).pathname.replace(/\/?$/, '/');

export function href(to: string) {
  if (/^[a-z]+:/i.test(to)) return to;
  return BASE + to.replace(/^\//, '');
}

function read() {
  let p = location.pathname;
  if (p.startsWith(BASE)) p = p.slice(BASE.length);
  else if (p + '/' === BASE) p = '';
  p = p.replace(/index\.html$/, '').replace(/\/+$/, '');
  return '/' + p + location.search;
}

const listeners = new Set<() => void>();
let current = read();
function emit() {
  current = read();
  listeners.forEach(l => l());
}
window.addEventListener('popstate', emit);

export function navigate(to: string, opts: { replace?: boolean; keepScroll?: boolean } = {}) {
  const url = href(to);
  if (opts.replace) history.replaceState({ keepScroll: opts.keepScroll }, '', url);
  else history.pushState(null, '', url);
  emit();
  if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => { listeners.delete(l); };
}

export function useLocation() {
  const full = useSyncExternalStore(subscribe, () => current);
  const [path, search = ''] = full.split('?');
  return { path, search, query: new URLSearchParams(search), full };
}

export function match(pattern: string, path: string): Record<string, string> | null {
  const a = pattern.split('/').filter(Boolean), b = path.split('/').filter(Boolean);
  if (a.length !== b.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith(':')) params[a[i].slice(1)] = decodeURIComponent(b[i]);
    else if (a[i] !== b[i]) return null;
  }
  return params;
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to: string };

export function Link({ to, onClick, ...rest }: LinkProps) {
  const external = /^[a-z]+:/i.test(to) || to.endsWith('.html');
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || external || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target) return;
    e.preventDefault();
    navigate(to);
  };
  return <a href={href(to)} onClick={handle} {...rest} />;
}

export function isActive(path: string, to: string) {
  if (to === '/') return path === '/';
  return path === to || path.startsWith(to + '/');
}
