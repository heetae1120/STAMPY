import { createContext, useCallback, useContext, useEffect, useId, useRef, useState, type ReactNode } from 'react';
import type { Campaign, CampaignStatus } from '../api/types';
import { STATUS_LABEL, categoryById } from '../data/catalog';
import { Mascot, type Pose } from '../art/Mascot';
import { Sticker } from '../art/Sticker';
import { stickerById } from '../data/catalog';
import { C, ink } from '../art/palette';

export function useTitle(title: string) {
  useEffect(() => { document.title = title ? `${title} | STAMPY 스탬피` : 'STAMPY 스탬피 | 리뷰하고 스탬프 모으는 체험단'; }, [title]);
}

export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Adds .is-in when the element scrolls into view (IntersectionObserver, no scroll listeners). */
export function useReveal<T extends Element>(opts: { threshold?: number; once?: boolean } = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); if (opts.once !== false) io.disconnect(); }
      else if (opts.once === false) setInView(false);
    }, { threshold: opts.threshold ?? .25 });
    io.observe(el);
    return () => io.disconnect();
  }, [opts.threshold, opts.once]);
  return [ref, inView] as const;
}

export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }: { children: ReactNode; className?: string; as?: 'div' | 'section' | 'li' | 'article'; delay?: number }) {
  const [ref, inView] = useReveal<HTMLDivElement>();
  const El = Tag as 'div';
  return <El ref={ref} className={`reveal ${inView ? 'is-in' : ''} ${className}`} style={delay ? { transitionDelay: delay + 'ms' } : undefined}>{children}</El>;
}

export const fmtDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getMonth() + 1}.${String(d.getDate()).padStart(2, '0')}`;
};
export const fmtFull = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};
export function dday(iso: string) {
  const end = new Date(iso); end.setHours(0, 0, 0, 0);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const n = Math.round((end.getTime() - today.getTime()) / 86400000);
  return n === 0 ? '오늘 마감' : n > 0 ? `D-${n}` : '마감';
}

export function StatusBadge({ status }: { status: CampaignStatus }) {
  return <span className={'badge badge-' + status}>{STATUS_LABEL[status]}</span>;
}

export function DemoBadge({ text = '데모' }: { text?: string }) {
  return <span className="badge badge-demo" title="실제 데이터가 아닌 예시예요">{text}</span>;
}

/** Small round stamp coin — the currency icon. Stickers never use this shape. */
export function StampIcon({ size = 26, className = '' }: { size?: number; className?: string }) {
  return (
    <svg className={'ico ' + className} viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
      <circle cx="20" cy="20" r="17" fill={C.grape} {...ink(2.4)} />
      <circle cx="20" cy="20" r="11.5" fill="none" stroke="#fff" strokeWidth="1.8" strokeDasharray="2 3" />
      <path d="M20 12.5l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z" fill={C.butter} />
    </svg>
  );
}

export function StickerIcon({ size = 26 }: { size?: number }) {
  return (
    <svg className="ico" viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
      <path d="M8 6h18l8 8v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" fill={C.peach} {...ink(2.4)} />
      <path d="M26 6v6a2 2 0 0 0 2 2h6" fill="#fff" {...ink(2.4)} />
      <circle cx="15" cy="19" r="1.8" fill={C.ink} /><circle cx="23" cy="19" r="1.8" fill={C.ink} />
      <path d="M16 24q3 3 6 0" fill="none" {...ink(2)} />
    </svg>
  );
}

export function Empty({ pose = 'sleep', title, children, action, level = 3 }: { pose?: Pose; title: string; children?: ReactNode; action?: ReactNode; level?: 1 | 2 | 3 }) {
  const H = (`h${level}`) as 'h3';
  return (
    <div className="empty">
      <Mascot pose={pose} size={96} />
      <H>{title}</H>
      {children && <p>{children}</p>}
      {action}
    </div>
  );
}

export function Loader({ label = '불러오는 중이에요' }: { label?: string }) {
  return (
    <div className="page-loader" role="status">
      <Mascot pose="walk" size={80} />
      <span>{label}…</span>
    </div>
  );
}

export function ErrorBox({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="empty" role="alert">
      <Mascot pose="discover" size={90} />
      <h3>앗, 길을 잃었어요</h3>
      <p>{message}</p>
      {onRetry && <button className="btn btn-sm" onClick={onRetry}>다시 불러오기</button>}
    </div>
  );
}

/** Product photo, or an honest placeholder when the brand has not sent one yet. */
export function ProductPhoto({ campaign, className = '' }: { campaign: Pick<Campaign, 'image' | 'title' | 'category' | 'stickerId'>; className?: string }) {
  const cat = categoryById(campaign.category);
  if (campaign.image) return <img className={'photo ' + className} src={campaign.image} alt={campaign.title + ' 제품 사진 (예시)'} loading="lazy" decoding="async" />;
  return (
    <div className={'photo photo-ph ' + className} style={{ background: cat.color }} role="img" aria-label="제품 사진 준비 중">
      <Sticker art={stickerById(campaign.stickerId).art} size={72} />
      <span>제품 사진 준비 중</span>
    </div>
  );
}

// ---- Modal -----------------------------------------------------------------------

export function Modal({ title, onClose, children, labelledBy, wide }: { title?: string; onClose: () => void; children: ReactNode; labelledBy?: string; wide?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const el = ref.current!;
    const focusables = () => Array.from(el.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]'));
    (el.querySelector<HTMLElement>('[autofocus]') ?? focusables()[0] ?? el).focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      if (e.key === 'Tab') {
        const f = focusables();
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = overflow;
      prev?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="modal-back" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={ref} className="modal" role="dialog" aria-modal="true" aria-labelledby={labelledBy ?? titleId} tabIndex={-1} style={wide ? { width: 'min(760px, 100%)' } : undefined}>
        <button className="modal-close" onClick={onClose} aria-label="닫기">×</button>
        {title && <h2 id={titleId} className="h3" style={{ marginRight: 40, marginBottom: 14 }}>{title}</h2>}
        {children}
      </div>
    </div>
  );
}

// ---- Toast -----------------------------------------------------------------------

const ToastCtx = createContext<(msg: string) => void>(() => {});
export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState<string | null>(null);
  const timer = useRef(0);
  const show = useCallback((m: string) => {
    setMsg(m);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setMsg(null), 3200);
  }, []);
  return (
    <ToastCtx.Provider value={show}>
      {children}
      <div aria-live="polite" className="sr-only">{msg}</div>
      {msg && <div className="toast" role="status"><StampIcon size={22} />{msg}</div>}
    </ToastCtx.Provider>
  );
}
export const useToast = () => useContext(ToastCtx);

// ---- Form helpers ------------------------------------------------------------------

export function Field({ label, error, hint, children, id }: { label: ReactNode; error?: string; hint?: ReactNode; children: ReactNode; id: string }) {
  return (
    <div className={'field' + (error ? ' has-err' : '')}>
      <label htmlFor={id}>{label}</label>
      {children}
      {hint && !error && <span className="hint" id={id + '-hint'}>{hint}</span>}
      {error && <span className="err" id={id + '-err'} role="alert">{error}</span>}
    </div>
  );
}

export function newKey() {
  return (crypto as Crypto & { randomUUID?: () => string }).randomUUID?.() ?? String(Date.now()) + Math.random().toString(36).slice(2);
}
