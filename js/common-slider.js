	$(document).ready(function(){
      $('.my-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
		  nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
        dots: false,
        speed: 1000,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
      });
			
			     $('.my-slider-1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
		  nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
        dots: false,
        speed: 1000,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
      });	
		
		 $('.my-slider-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
		  nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
        dots: true,
        speed: 1000,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true
      });

    });

// Init Slick
$(".main-slider").slick({
  slidesToShow   : 1,
	  autoplaySpeed: 3000,
		centerMode: true,
	centerPadding: '260px',
	
	autoplay: true,
  slidesToScroll : 1,
	 speed: 1000,
  infinite : true,
  dots     : false,
   prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
		  nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
			centerPadding: '160px'
        }
      },
		 {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
			centerPadding: '100px'
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
			centerMode: false,
			centerPadding: '0px'
        }
      }
    ]
});