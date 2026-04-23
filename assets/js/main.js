/* ==========================================================================
   Main site scripts — vanilla JS, no jQuery dependency.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Sticky footer
     Keep body margin-bottom in sync with footer height so page content
     never slides under the footer.
     ------------------------------------------------------------------ */
  var footer = document.querySelector('.page__footer');
  var footerResizeTimer;

  function updateFooterMargin() {
    if (footer) {
      document.body.style.marginBottom = footer.offsetHeight + 'px';
    }
  }

  updateFooterMargin();

  window.addEventListener('resize', function () {
    clearTimeout(footerResizeTimer);
    footerResizeTimer = setTimeout(updateFooterMargin, 250);
  });

  /* ------------------------------------------------------------------
     Greedy navigation
     Moves nav items into an overflow dropdown when the nav overflows.
     Ported from jquery.greedy-navigation.js (Luke Jackson, codepen.io/lukejacksonn/pen/PwmwWV).
     ------------------------------------------------------------------ */
  var nav    = document.getElementById('site-nav');
  var btn    = nav && nav.querySelector('button');
  var vlinks = nav && nav.querySelector('.visible-links');
  var hlinks = nav && nav.querySelector('.hidden-links');
  var breaks = [];

  function updateNav() {
    if (!nav || !btn || !vlinks || !hlinks) { return; }

    var navWidth       = nav.getBoundingClientRect().width;
    var btnWidth       = btn.getBoundingClientRect().width;
    var availableSpace = btn.classList.contains('hidden')
      ? navWidth
      : navWidth - btnWidth - 30;

    if (vlinks.getBoundingClientRect().width > availableSpace) {
      breaks.push(vlinks.getBoundingClientRect().width);
      hlinks.insertBefore(vlinks.lastElementChild, hlinks.firstElementChild);
      btn.classList.remove('hidden');
    } else {
      if (availableSpace > breaks[breaks.length - 1]) {
        vlinks.appendChild(hlinks.firstElementChild);
        breaks.pop();
      }
      if (breaks.length < 1) {
        btn.classList.add('hidden');
        hlinks.classList.add('hidden');
      }
    }

    btn.setAttribute('count', breaks.length);

    // Recurse if still overflowing
    if (vlinks.getBoundingClientRect().width > availableSpace) {
      updateNav();
    }
  }

  if (btn) {
    btn.addEventListener('click', function () {
      hlinks.classList.toggle('hidden');
      btn.classList.toggle('close');
    });
  }

  window.addEventListener('resize', updateNav);
  updateNav();

}());
