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
    }
  ]
});
})
