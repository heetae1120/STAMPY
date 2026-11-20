import { reviews, type Review } from './review-data';

function mountOrchard(hero: HTMLElement) {
  const fruitLayer = hero.querySelector<HTMLElement>('.fruit-layer')!;
  const panel = hero.querySelector<HTMLElement>('.orchard-panel')!;
  const detail = hero.querySelector<HTMLDialogElement>('.orchard-detail')!;
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const featured = reviews.find(review => review.featured) ?? reviews[0];
  if (featured) {
    hero.style.setProperty('--focus-x', featured.fruitPosition[0] + '%');
    hero.style.setProperty('--focus-y', featured.fruitPosition[1] + '%');
  }
  const fruits = new Map<string, HTMLButtonElement>();
  const timers: number[] = [];
  let selected: HTMLButtonElement | null = null;
  let cardAnimations: Animation[] = [];
  const introKey = 'stampy.orchard.intro.v1';
  let seenIntro = false;
  try { seenIntro = sessionStorage.getItem(introKey) === 'seen'; } catch { /* Storage is optional. */ }

  function after(ms: number, action: () => void) {
    timers.push(window.setTimeout(action, ms));
  }

  function finishIntro() {
    if (hero.hasAttribute('data-intro')) {
      try { sessionStorage.setItem(introKey, 'seen'); } catch { /* Private or restricted storage. */ }
    }
    timers.splice(0).forEach(id => clearTimeout(id));
    delete hero.dataset.intro;
    delete hero.dataset.zoom;
    fruitLayer.querySelector('.is-ripening')?.classList.remove('is-ripening');
  }

  function closeCard(restoreFocus: boolean) {
    cardAnimations.forEach(animation => animation.cancel());
    cardAnimations = [];
    selected?.setAttribute('aria-expanded', 'false');
    if (restoreFocus) selected?.focus({ preventScroll: true });
    selected = null;
    panel.hidden = true;
  }

  function showDetail(review: Review) {
    detail.querySelector('img')!.src = review.thumbnail;
    detail.querySelector('small')!.textContent = label(review);
    detail.querySelector('h2')!.textContent = review.title;
    detail.querySelector('p')!.textContent = review.body ?? review.excerpt;
    detail.showModal();
  }

  function label(review: Review) {
    return review.category + ' 체험단' + (review.sample ? ' · 예시 후기' : '');
  }

  function showCard(review: Review, intro = false) {
    closeCard(false);
    const origin = fruits.get(review.id)!;
    selected = origin;
    origin.setAttribute('aria-expanded', 'true');
    panel.innerHTML = '<button type="button" class="orchard-close" aria-label="카드 닫기">×</button><img class="orchard-panel-photo" alt=""><div class="orchard-panel-body"><small></small><h2></h2><p></p></div>';
    const close = panel.querySelector<HTMLButtonElement>('button')!;
    close.onclick = () => { finishIntro(); closeCard(true); };
    const image = panel.querySelector('img')!;
    image.src = review.thumbnail;
    const body = panel.querySelector<HTMLElement>('.orchard-panel-body')!;
    body.querySelector('small')!.textContent = label(review);
    body.querySelector('h2')!.textContent = review.title;
    body.querySelector('p')!.textContent = review.excerpt;
    const read = review.reviewUrl ? document.createElement('a') : document.createElement('button');
    if (read instanceof HTMLAnchorElement) read.href = review.reviewUrl!;
    else { read.type = 'button'; read.onclick = () => showDetail(review); }
    read.className = 'orchard-read';
    read.textContent = '후기 확인 ↗';
    body.append(read);
    panel.hidden = false;
    if (!media.matches && typeof panel.animate === 'function') {
      const from = origin.getBoundingClientRect();
      const to = panel.getBoundingClientRect();
      const diameter = Math.min(from.width, from.height);
      const duration = intro ? 1450 : 430;
      const timing = { duration, easing: 'cubic-bezier(.22,.7,.22,1)' };
      cardAnimations = [
        panel.animate([
          { transform: 'translate(' + (from.left - to.left) + 'px,' + (from.top - to.top) + 'px)', clipPath: 'inset(0 ' + (to.width - diameter) + 'px ' + (to.height - diameter) + 'px 0 round ' + diameter / 2 + 'px)' },
          { transform: 'translate(0,0)', clipPath: 'inset(0 0 0 0 round 18px)' },
        ], timing),
        image.animate([{ width: diameter + 'px', height: diameter + 'px' }, { width: image.offsetWidth + 'px', height: image.offsetHeight + 'px' }], timing),
        body.animate([{ opacity: 0 }, { opacity: 0, offset: .45 }, { opacity: 1 }], timing),
      ];
    }
    if (!intro && origin.matches(':focus-visible')) close.focus({ preventScroll: true });
  }

  panel.id = 'orchard-card';
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', '선택한 후기');
  const introOn = !seenIntro && !media.matches && typeof panel.animate === 'function';
  if (introOn) hero.dataset.intro = '';
  for (const [i, review] of reviews.entries()) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'fruit';
    button.setAttribute('aria-label', label(review) + ' · ' + review.title);
    button.setAttribute('aria-controls', panel.id);
    button.setAttribute('aria-expanded', 'false');
    button.style.left = review.fruitPosition[0] + '%';
    button.style.top = review.fruitPosition[1] + '%';
    button.style.setProperty('--diameter', (review.featured ? 9 : 5.8 + i % 3 * .65) + '%');
    button.style.setProperty('--bud', (.24 + i * .038) + 's');
    button.style.setProperty('--ripen', (3.5 + i * .072) + 's');
    button.style.setProperty('--wind', -(i % 7) + 's');
    const orb = document.createElement('span');
    orb.className = 'fruit-orb';
    const photo = new Image();
    photo.alt = '';
    photo.src = review.thumbnail;
    orb.append(photo);
    const preview = document.createElement('span');
    preview.className = 'fruit-preview';
    preview.textContent = review.category + ' · ' + review.title;
    button.append(orb, preview);
    button.onclick = () => {
      finishIntro();
      if (selected === button) closeCard(true);
      else showCard(review);
    };
    button.addEventListener('keydown', event => {
      if (event.key === 'Tab' && !event.shiftKey && selected === button) {
        event.preventDefault();
        panel.querySelector('button')?.focus();
      }
    });
    fruits.set(review.id, button);
    fruitLayer.append(button);
  }
  const dust = hero.querySelector('.orchard-dust')!;
  for (let i = 0; i < 9; i++) {
    const mote = document.createElement('i');
    mote.style.left = (6 + i * 31 % 86) + '%';
    mote.style.top = (6 + i * 19 % 60) + '%';
    mote.style.animationDelay = -i * .6 + 's';
    dust.append(mote);
  }
  hero.querySelector<HTMLElement>('.orchard-caption')!.hidden = false;
  if (introOn && featured) {
    after(1500, () => { hero.dataset.zoom = ''; });
    after(3770, () => fruits.get(featured.id)?.classList.add('is-ripening'));
    after(5500, () => {
      fruits.get(featured.id)?.classList.remove('is-ripening');
      showCard(featured, true);
    });
    after(7000, finishIntro);
  }
  // Interaction always takes priority over the timed director.
  document.addEventListener('pointerdown', event => {
    if (!(event.target instanceof Element) || event.target.closest('.fruit,.orchard-panel,.orchard-detail')) return;
    finishIntro();
    closeCard(false);
  });
  document.addEventListener('keydown', event => {
    if (detail.open || event.key !== 'Escape') return;
    finishIntro();
    if (selected) closeCard(true);
  });
  media.addEventListener('change', () => {
    finishIntro();
    cardAnimations.forEach(animation => animation.finish());
  });
  detail.addEventListener('click', event => {
    if (event.target !== detail) return;
    const box = detail.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) detail.close();
  });
}

const orchard = document.querySelector<HTMLElement>('.orchard');
if (orchard) mountOrchard(orchard);
