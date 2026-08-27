/* ============================================================
   Elektro Revize Zlín — script.js
   Mobilní menu, FAQ accordion, sticky CTA viditelnost.
   ============================================================ */

(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Zavřít menu po kliknutí na odkaz
    nav.querySelectorAll('.nav-list a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- FAQ accordion ---- */
  var faqItems = document.querySelectorAll('.faq-question');
  faqItems.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      var answer = btn.nextElementSibling;
      answer.classList.toggle('open');
    });
  });

  /* ---- Sticky CTA: show only when hero is scrolled past ---- */
  var stickyCta = document.querySelector('.sticky-cta');
  var hero = document.querySelector('.hero');
  if (stickyCta && hero && window.innerWidth <= 768) {
    var heroBottom = hero.getBoundingClientRect().bottom;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var currentBottom = hero.getBoundingClientRect().bottom;
          if (currentBottom <= 0 && !stickyCta.classList.contains('visible')) {
            stickyCta.classList.add('visible');
          } else if (currentBottom > 0 && stickyCta.classList.contains('visible')) {
            stickyCta.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

})();
