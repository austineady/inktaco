$(document).foundation()

$(document).ready(function() {
  $('#js-product-carousel').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '350px',
  slidesToShow: 1,
  initialSlide: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '300px'
      }
    },
    {
      breakpoint: 1100,
      settings: {
        centerPadding: '250px'
      }
    },
    {
      breakpoint: 980,
      settings: {
        centerPadding: '200px'
      }
    },
    {
      breakpoint: 900,
      settings: {
        centerPadding: '150px'
      }
    },
    {
      breakpoint: 770,
      settings: {
        centerPadding: '100px'
      }
    },
    {
      breakpoint: 650,
      settings: {
        centerPadding: '80px'
      }
    },
    {
      breakpoint: 615,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '80px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'ease-out'
      }
    },
    {
      breakpoint: 450,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1
      }
    }
  ]
});
$('.js-prev-product').on('click', function() {
  $('#js-product-carousel').slick('slickPrev');
});
$('.js-next-product').on('click', function() {
  $('#js-product-carousel').slick('slickNext');
});
if($('.js-logo-bar').width() < 950) {
$('.js-logo-bar').slick({
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 3,
  variableWidth: true,
  variableHeight: true,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        initialSlide: 2,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'ease-out'
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        initialSlide: 2,
        slidesToShow: 1,
        slidesToScroll: 3,
        cssEase: 'ease-out'
      }
    }
  ]
});
}

(function startTextRotation() {
  var $textHook = $(".js-text-hook");
  $textHook.typed({
    strings: ["t-shirts", "sweatshirts", "zip ups", "tank tops", "long sleeves", "v-necks", "hoodies", "polos", "apparel"],
    typeSpeed: 100,
    loop: true,
    showCursor: false
  });
})()

$('.js-modal-toggle').on('click', function(e) {
  $('.modal').addClass('is-active');
  $('body').addClass('modal-active');
})

$('.modal').on('click', function(e) {
  $(this).removeClass('is-active');
  $('body').removeClass('modal-active');
})

$('.modal__content').on('click', function(e) {
  e.stopPropagation();
})


var scrollMem = 0;
var backgroundY = 0;

$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  if(scrollTop == 0) {
    backgroundY = 0;
  }
  if(scrollMem == 0) {
    scrollMem = scrollTop;
  } else {
    if(scrollTop > scrollMem && scrollTop < 100) {
      // scrolling down
      backgroundY >= -30 ? backgroundY -= 1 : backgroundY = -30;
      scrollMem = scrollTop;
    }
    if(scrollTop < scrollMem && scrollTop > 0) {
      // scrolling up
      backgroundY <= 0 ? backgroundY += 1 : backgroundY = 0;
      scrollMem = scrollTop;
    }
  }

  $('.js-hero-background').animate({
    'background-position-y': backgroundY
  }, 10);
})

})
