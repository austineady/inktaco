$(document).foundation()

$(document).ready(function() {
  $('#js-product-carousel').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '150px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        slidesToScroll: 3
      }
    }
  ]
});
$('.js-logo-bar').slick({
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 3,
  variableWidth: true,
  variableHeight: true,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'ease-out'
      }
    }
  ]
});

function startTextRotation() {
  var $textHook = $(".js-text-hook");
  $textHook.typed({
    strings: ["t-shirts", "jackets", "hoodies"],
    typeSpeed: 100,
    loop: true,
    showCursor: false
  });
}

startTextRotation();
})
