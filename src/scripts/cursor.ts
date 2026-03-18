const dot = document.querySelector<HTMLElement>('[data-cursor-dot]');
const ring = document.querySelector<HTMLElement>('[data-cursor-ring]');

// Only activate on pointer devices
if (dot && ring && !window.matchMedia('(hover: none)').matches) {
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;
  const LERP = 0.12;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot!.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
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

  function animateRing() {
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    ring!.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateRing);
  }

  animateRing();
}
