function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay ?? '0';
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    observer.observe(el);
  });
}

function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const el = document.querySelector<HTMLElement>('[data-parallax]');
  if (!el) return;

  let ticking = false;

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          el.style.transform = `translateY(${window.scrollY * 0.25}px)`;
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

initScrollReveal();
initParallax();

document.addEventListener('astro:page-load', () => {
  initScrollReveal();
  initParallax();
});
