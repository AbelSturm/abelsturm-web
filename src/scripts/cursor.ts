// Only activate on pointer devices
if (!window.matchMedia('(hover: none)').matches) {
  let dot: HTMLElement | null = null;
  let ring: HTMLElement | null = null;
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;
  let hasMovedMouse = false;
  const LERP = 0.12;

  function init() {
    dot = document.querySelector<HTMLElement>('[data-cursor-dot]');
    ring = document.querySelector<HTMLElement>('[data-cursor-ring]');

    // Restore cursor visibility if mouse was already active before navigation
    if (hasMovedMouse) {
      document.documentElement.classList.add('has-cursor');
      if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    hasMovedMouse = true;
    document.documentElement.classList.add('has-cursor');
  });

  // Expand cursor on interactive elements (event delegation — works across page transitions)
  document.addEventListener('mouseover', (e) => {
    if ((e.target as Element).closest('a, button, article')) {
      document.documentElement.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if ((e.target as Element).closest('a, button, article')) {
      document.documentElement.classList.remove('cursor-hover');
    }
  });

  // Clean hover state on navigation
  document.addEventListener('astro:before-swap', () => {
    document.documentElement.classList.remove('cursor-hover');
  });

  // Re-wire cursor elements after each page transition
  document.addEventListener('astro:page-load', init);

  function animateRing() {
    if (ring) {
      ringX += (mouseX - ringX) * LERP;
      ringY += (mouseY - ringY) * LERP;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    }
    requestAnimationFrame(animateRing);
  }

  init();
  animateRing();
}
