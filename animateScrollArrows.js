(function animateScrollArrows() {
  const arrowTop = document.querySelector('.js-scroll-top');
  const arrowBottom = document.querySelector('.js-scroll-bottom');

  function scrollToTop(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, '400');
  }

  function scrollToBottom(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: $(document).height()-$(window).height()}, '400');
  }

  arrowTop.addEventListener('click', scrollToTop, false);
  arrowBottom.addEventListener('click', scrollToBottom, false);
})();