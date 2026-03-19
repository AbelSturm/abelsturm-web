// Persist theme across Astro view transitions:
// apply saved theme to the incoming document before it is swapped in,
// so there is no flash and CSS variables are correct from the first paint.
document.addEventListener('astro:before-swap', (e) => {
  const saved = localStorage.getItem('theme');
  const newDoc = (e as Event & { newDocument: Document }).newDocument;
  if (saved === 'dark') {
    newDoc.documentElement.dataset.theme = 'dark';
  } else {
    delete newDoc.documentElement.dataset.theme;
  }
});

function initTheme() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    const next = isDark ? 'light' : 'dark';
    if (next === 'dark') {
      document.documentElement.dataset.theme = 'dark';
    } else {
      delete document.documentElement.dataset.theme;
    }
    localStorage.setItem('theme', next);
  });
}

// astro:page-load fires on both initial load and every SPA navigation,
// so no need to call initTheme() directly.
document.addEventListener('astro:page-load', initTheme);
