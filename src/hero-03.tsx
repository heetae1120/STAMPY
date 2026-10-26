import { Component, useEffect, useState, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import GalleryTunnel from '../components/originkit/ui/hero-03/gallery-tunnel';
import { useTunnelConfig } from '../components/originkit/ui/hero-03/use-tunnel-size';

// Relative URLs resolve against /STAMPY/ on Pages and against / in local development.
const images = [1, 2, 3, 4, 6].map((index) => ({
  src: new URL(`./store-${index}-product.png`, import.meta.url).href,
  alt: '스탬피 예시 체험 제품 일러스트',
}));
class CanvasBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() {
    document.querySelectorAll<HTMLElement>('[data-hero-status]').forEach((element) => {
      element.textContent = '기기에서 3D를 지원하지 않아 정적인 예시 갤러리를 보여드려요.';
    });
  }
  render() { return this.state.failed ? null : this.props.children; }
}
function HeroScene() {
  const { tunnelSize, fade, boost } = useTunnelConfig();
  const [reduceMotion, setReduceMotion] = useState(matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [paused, setPaused] = useState(reduceMotion);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => { setReduceMotion(media.matches); setPaused(media.matches); };
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    const dialog = document.querySelector<HTMLDialogElement>('#hero03-gallery')!;
    const explore = document.querySelector<HTMLButtonElement>('#hero03-explore')!;
    const close = document.querySelector<HTMLButtonElement>('#hero03-close')!;
    const toggle = document.querySelector<HTMLButtonElement>('#hero03-motion')!;
    const galleryToggle = document.querySelector<HTMLButtonElement>('#hero03-gallery-motion')!;
    explore.disabled = false; toggle.hidden = false;
    const show = () => { dialog.showModal(); setOpen(true); };
    const hide = () => dialog.close();
    const onClosed = () => setOpen(false);
    const onBackdrop = (event: MouseEvent) => { if (event.target === dialog) dialog.close(); };
    const onToggle = () => setPaused((value) => !value);
    explore.addEventListener('click', show); close.addEventListener('click', hide);
    dialog.addEventListener('close', onClosed); dialog.addEventListener('click', onBackdrop);
    toggle.addEventListener('click', onToggle); galleryToggle.addEventListener('click', onToggle);
    const hero = document.querySelector('#hero03')!;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting)); observer.observe(hero);
    return () => {
      explore.removeEventListener('click', show); close.removeEventListener('click', hide);
      dialog.removeEventListener('close', onClosed); dialog.removeEventListener('click', onBackdrop);
      toggle.removeEventListener('click', onToggle); galleryToggle.removeEventListener('click', onToggle); observer.disconnect();
    };
  }, []);
  useEffect(() => {
    document.querySelectorAll<HTMLButtonElement>('#hero03-motion, #hero03-gallery-motion').forEach((button) => {
      button.textContent = paused ? '배경 움직임 재생' : '배경 움직임 정지';
      button.setAttribute('aria-pressed', String(paused));
    });
  }, [paused]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  const scene = (
    <CanvasBoundary>
      <GalleryTunnel
        background="#FFFBE1" lineColor="#D7CFA4" lineOpacity={50} grid={4}
        tunnelSize={tunnelSize} speed={paused || !visible && !open ? 0 : 9}
        boost={paused || reduceMotion ? 0 : boost} fade={fade} label={false} images={images}
      />
    </CanvasBoundary>
  );
  return open ? createPortal(scene, document.querySelector('#hero03-gallery-canvas')!) : scene;
}
const root = document.querySelector('#hero03-scene');
if (root) createRoot(root).render(<HeroScene />);
