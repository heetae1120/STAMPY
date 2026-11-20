import { Component, type ReactNode } from 'react';
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
  return (
    <CanvasBoundary>
      <GalleryTunnel
        background="#dcefb8" lineColor="#a4c573" lineOpacity={54} grid={4}
        tunnelSize={tunnelSize} speed={0} boost={0} fade={fade} label={false} images={images}
      />
    </CanvasBoundary>
  );
}

const root = document.querySelector('#hero03-scene');
if (root) createRoot(root).render(<HeroScene />);
