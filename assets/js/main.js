// Loaded in <head> so the saved theme applies before first paint
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) themeBtn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });

    var menuBtn = document.querySelector('.menu-btn');
    var nav = document.querySelector('.nav');
    if (menuBtn && nav) menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });

    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  });
})();
