import { Component, useEffect, useState, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import GalleryTunnel from '../components/originkit/ui/hero-03/gallery-tunnel';
import { useTunnelConfig } from '../components/originkit/ui/hero-03/use-tunnel-size';

const images = ['food', 'cafe', 'skincare', 'package'].map((name) => ({
  src: new URL(`./${name}.jpg`, import.meta.url).href,
  alt: '',
}));

class CanvasBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

function HeroScene() {
  const { tunnelSize, fade } = useTunnelConfig();
  const [reducedMotion, setReducedMotion] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <CanvasBoundary>
      <GalleryTunnel
        background="#fffbe1" lineColor="#d7cfa4" lineOpacity={50} grid={4}
        tunnelSize={tunnelSize} speed={reducedMotion || paused ? 0 : 9}
        boost={0} fade={fade} label={false} images={images}
      />
      {!reducedMotion && (
        <button
          className="hero03-pause"
          type="button"
          aria-label={paused ? '배경 움직임 재생' : '배경 움직임 정지'}
          onClick={() => setPaused((value) => !value)}
        >
          <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
        </button>
      )}
    </CanvasBoundary>
  );
}

const root = document.querySelector('#hero03-scene');
if (root) createRoot(root).render(<HeroScene />);
