$(document).foundation();

$(document).ready(function() {
init();
function init() {
    $('#js-product-carousel').html("");
    var productImageLength = 24;
    var data = Array(productImageLength).fill({
      "title": "VentureApp",
      "type": "Charcoal Black Triblend",
      "details": "3 color imprint"
    }, 0, productImageLength);
    console.log(data);
    render(data);
  }

  function render(data) {
    data.forEach(function(product, index) {
      var prevArrow = $('<div class="icon-arrow-prev js-prev-product"></div>');
      var nextArrow = $('<div class="icon-arrow-next js-next-product"></div>');
      var repeatArrow = $('<div class="fa fa-repeat icon-arrow-repeat js-first-product"></div>');
      var item = $('<div class="product"><img src="assets/images/product-image-'+ (index + 1) +'.png" alt="'+product.title+' Product" class="product__image"><div class="product__description"><h4 class="product__title">'+product.title+'</h4><h5 class="product__type">'+product.type+'</h5><h5 class="product__details">'+product.details+'</h5><a href="mailto:andy@inktaco.com?subject=Interested&nbsp;in&nbsp;Custom&nbsp;Apparel" class="product__contact">Contact us about a similar product</a></div></div>');
      if(index < 1) {
        item.append(nextArrow);
      } else if(index + 1 == data.length) {
        item.prepend(prevArrow);
        item.append(repeatArrow);
      } else {
        item.prepend(prevArrow);
        item.append(nextArrow);
      }
      $('#js-product-carousel').append(item);
    }) // end forEach
    $('#js-product-carousel').addClass('is-active');
    $('#js-product-carousel').slick({
      arrows: false,
      centerMode: true,
      centerPadding: '325px',
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      infinite: false,
      variableWidth: true,
      speed: 600,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            centerPadding: '100px'
          }
        },
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: 'ease-out'
          }
        },
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: 'ease-out'
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
    $('.js-first-product').on('click', function() {
      $('#js-product-carousel').slick('slickGoTo', 0, false);
    })
  }

  if($('.js-logo-bar').width() < 950) {
    $('.js-logo-bar').slick({
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
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
            autoplaySpeed: 1500,
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
    typeSpeed: 40,
    backSpeed: 60,
    startDelay: 200,
    backDelay: 300,
    loop: true,
    shuffle: true,
    showCursor: false
  });
})()


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
  if(window.innerWidth >= 1100) {
    $('.js-hero-background').animate({
      'background-position-y': backgroundY
    }, 10);
  }
})

})
