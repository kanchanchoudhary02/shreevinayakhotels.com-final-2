    
//fixed navbar script 
jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 50) {
                jQuery('.navbar').addClass('fixed');
				 jQuery('.header-top').addClass('con-info');
				 jQuery('body').addClass('scroll');
            } else {
                jQuery('.navbar').removeClass('fixed');
				jQuery('.header-top').removeClass('con-info');
				jQuery('body').removeClass('scroll');
            }
        });
	
		$(document).ready(function(){
    $(this).scrollTop(0);
});

//back to top script
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});

//preloader script
$(window).load(function () {
	// Preloader
	$('.loader').fadeOut();
	$('.loader-mask').delay(350).fadeOut('slow');
});


		$('.slider').slick({
  autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: true,
  dots: false,
	prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
	nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
}).slickAnimation();



$('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    let arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});