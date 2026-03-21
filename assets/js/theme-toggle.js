/* ==========================================================================
   Theme toggle – light / dark mode
   - Reads / writes preference to localStorage
   - Respects prefers-color-scheme as the initial default
   - The data-theme attribute is set on <html> by an inline script in
     <head> (see _includes/head.html) to avoid any flash of wrong theme.
   ========================================================================== */

(function () {
  var STORAGE_KEY = 'theme';
  var DARK  = 'dark';
  var LIGHT = 'light';

  function getStoredTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function storeTheme(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || getSystemTheme();
    var next = current === DARK ? LIGHT : DARK;
    storeTheme(next);
    applyTheme(next);
  }

  // Wire up the button once the DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });

  // Track system preference changes when no explicit choice is stored
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? DARK : LIGHT);
    }
  });
}());
