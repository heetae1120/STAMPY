import { StrictMode, Suspense, lazy, useEffect, useRef, type ComponentType } from 'react';
import { createRoot } from 'react-dom/client';
import { match, useLocation } from './router';
import { Layout } from './components/Layout';
import { Loader, ToastProvider } from './components/ui';

type Page = ComponentType<{ params: Record<string, string> }>;
const page = (load: () => Promise<{ default: Page }>) => lazy(load);

export const ROUTES: [string, Page][] = [
  ['/', page(() => import('./pages/Home'))],
  ['/about', page(() => import('./pages/About'))],
  ['/how-it-works', page(() => import('./pages/HowItWorks'))],
  ['/explore', page(() => import('./pages/Explore'))],
  ['/experiences', page(() => import('./pages/Experiences'))],
  ['/experiences/:slug', page(() => import('./pages/ExperienceDetail'))],
  ['/rewards', page(() => import('./pages/Rewards'))],
  ['/rewards/:slug', page(() => import('./pages/RewardDetail'))],
  ['/brands', page(() => import('./pages/Brands'))],
  ['/faq', page(() => import('./pages/Faq'))],
  ['/login', page(() => import('./pages/Login'))],
  ['/my', page(() => import('./pages/my/MyHome'))],
  ['/my/profile', page(() => import('./pages/my/Profile'))],
  ['/my/stickerbook', page(() => import('./pages/my/StickerbookPage'))],
  ['/my/stamps', page(() => import('./pages/my/Stamps'))],
  ['/my/experiences', page(() => import('./pages/my/MyExperiences'))],
  ['/my/reviews', page(() => import('./pages/my/MyReviews'))],
  ['/my/redemptions', page(() => import('./pages/my/Redemptions'))],
  ['/admin', page(() => import('./pages/admin/Admin'))],
  ['/styleguide', page(() => import('./pages/Styleguide'))],
];
const NotFound = page(() => import('./pages/NotFound'));

function App() {
  const { path } = useLocation();
  const first = useRef(true);
  let Comp: Page = NotFound;
  let params: Record<string, string> = {};
  for (const [pattern, C] of ROUTES) {
    const m = match(pattern, path);
    if (m) { Comp = C; params = m; break; }
  }
  useEffect(() => {
    // Move focus to the new page for keyboard and screen-reader users.
    if (first.current) { first.current = false; return; }
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [path]);
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Comp key={path} params={params} />
      </Suspense>
    </Layout>
  );
}

const root = document.getElementById('root')!;
root.removeAttribute('aria-busy');
createRoot(root).render(<StrictMode><ToastProvider><App /></ToastProvider></StrictMode>);
