(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  let saved = null;
  try { saved = localStorage.getItem('tid-theme'); } catch (_) {}
  if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  const updateToggle = () => {
    const light = root.dataset.theme === 'light';
    if (icon) icon.textContent = light ? '☾' : '☼';
    if (toggle) toggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  };
  updateToggle();
  toggle?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('tid-theme', root.dataset.theme); } catch (_) {}
    updateToggle();
  });
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    if (mobileNav) mobileNav.hidden = isOpen;
  });
})();
