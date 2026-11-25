/* The Infinite Detour — shared interactions */
(() => {
  'use strict';
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  const storageKey = 'tid-theme';

  const readTheme = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved === 'light' || saved === 'dark' ? saved : 'dark';
    } catch (_) { return 'dark'; }
  };
  const applyTheme = (theme, persist = false) => {
    const selected = theme === 'light' ? 'light' : 'dark';
    root.dataset.theme = selected;
    if (persist) {
      try { localStorage.setItem(storageKey, selected); } catch (_) {}
    }
    const light = selected === 'light';
    if (icon) icon.textContent = light ? '☾' : '☼';
    if (toggle) {
      toggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
      toggle.setAttribute('aria-pressed', String(light));
      toggle.title = light ? 'Switch to dark theme' : 'Switch to light theme';
    }
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', light ? '#f3f1ec' : '#101820');
  };

  applyTheme(readTheme());
  toggle?.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  const closeMenu = () => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    mobileNav.hidden = true;
  };
  menuButton?.addEventListener('click', () => {
    if (!mobileNav) return;
    const opening = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
    mobileNav.hidden = !opening;
  });
  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  const desktopQuery = window.matchMedia('(min-width: 821px)');
  desktopQuery.addEventListener?.('change', event => { if (event.matches) closeMenu(); });
})();
