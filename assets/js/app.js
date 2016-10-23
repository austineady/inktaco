$(document).foundation()

$(document).ready(function() {
  $('#js-product-carousel').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 3,
  initialSlide: 2,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 750,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1,
        slidesToScroll: 3,
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
    strings: ["t-shirts", "jackets", "hoodies"],
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

})
