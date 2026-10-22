(function () {
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  ready(function () {
    // Keep the supplied hero photographs unchanged while ensuring the slider can initialise.
    if (window.jQuery && jQuery.fn && jQuery.fn.slick) {
      var hero = jQuery('.hero-hotel .slider');
      if (hero.length && !hero.hasClass('slick-initialized')) {
        hero.slick({ slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000, arrows: true, dots: true, fade: true, adaptiveHeight: false });
      }
      var main = jQuery('.main-slider');
      if (main.length && !main.hasClass('slick-initialized')) {
        main.slick({ slidesToShow: 3, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3500, arrows: true, dots: false, responsive: [{ breakpoint: 768, settings: { slidesToShow: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1 } }] });
      }
    }
    var toggle = document.querySelector('.menu-btn');
    var menu = document.querySelector('.menu-items');
    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        menu.classList.toggle('nn-menu-open');
        toggle.classList.toggle('is-active');
        toggle.setAttribute('aria-expanded', menu.classList.contains('nn-menu-open') ? 'true' : 'false');
      });
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          menu.classList.remove('nn-menu-open');
          toggle.classList.remove('is-active');
        });
      });
    }
  });
})();