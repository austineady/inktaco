$(document).foundation();
var data = [
  {
    "title": "BevSpot",
    "type": "Charcoal Black Triblend",
    "details": "2 Color Imprint",
    "imageNum": "4"
  },
  {
    "title": "Kinvey",
    "type": "Black 100% Cotton",
    "details": "2 Color Imprint",
    "imageNum": "14"
  },
  {
    "title": "TUGG Wine Party",
    "type": "Athletic Gray Triblend",
    "details": "3 Color Imprint",
    "imageNum": "19"
  },
  {
    "title": "VentureApp",
    "type": "Charcoal Black Triblend",
    "details": "3 Color Imprint",
    "imageNum": "1"
  },
  {
    "title": "Tech Gives Back",
    "type": "Navy Triblend",
    "details": "1 Color Imprint",
    "imageNum": "18"
  },
  {
    "title": "Improv Boston",
    "type": "Red 100% Cotton",
    "details": "3 Color Imprint",
    "imageNum": "5"
  },
  {
    "title": "Adelphic",
    "type": "Charcoal Black Triblend",
    "details": "3 Color Imprint",
    "imageNum": "2"
  },
  {
    "title": "GumGum",
    "type": "Charcoal Black 50/50 Blend",
    "details": "2 Color Imprint",
    "imageNum": "10"
  },
  {
    "title": "Haymakers For Hope",
    "type": "Black 100% Cotton",
    "details": "2 Color Imprint",
    "imageNum": "24"
  },
  {
    "title": "Kodiak",
    "type": "Berry Triblend",
    "details": "2 Color Imprint",
    "imageNum": "3"
  },
  {
    "title": "Hinterlands",
    "type": "Dark Gray Triblend",
    "details": "2 Location Imprint",
    "imageNum": "11"
  },
  {
    "title": "Intelligent.ly",
    "type": "Yellow 100% Cotton",
    "details": "3 Color Imprint",
    "imageNum": "12"
  },
  {
    "title": "Chew",
    "type": "Athletic Gray Triblend",
    "details": "1 Color Imprint",
    "imageNum": "23"
  },
  {
    "title": "Charlotte Curling",
    "type": "Sport Gray 100% Cotton",
    "details": "6 Color Imprint",
    "imageNum": "6"
  },
  {
    "title": "Intrepid",
    "type": "Red Triblend",
    "details": "1 Color Imprint",
    "imageNum": "13"
  },
  {
    "title": "Family Christmas",
    "type": "Red 100% Cotton",
    "details": "1 Color Imprint",
    "imageNum": "15"
  },
  {
    "title": "Driftt",
    "type": "Dark Gray Triblend",
    "details": "1 Color Imprint",
    "imageNum": "8"
  },
  {
    "title": "Cancer Sucks",
    "type": "Navy 100% Cotton",
    "details": "2 Location Imprint",
    "imageNum": "17"
  },
  {
    "title": "Completed Baked",
    "type": "Teal 100% Cotton",
    "details": "1 Color Imprint",
    "imageNum": "20"
  },
  {
    "title": "VentureFizz",
    "type": "Black 50/50 Blend",
    "details": "4 Color Imprint",
    "imageNum": "21"
  },
  {
    "title": "BookBub",
    "type": "Black 50/50 Blend",
    "details": "1 Color Imprint",
    "imageNum": "22"
  },
  {
    "title": "Geek Week",
    "type": "Black 50/50 Blend",
    "details": "2 Color Imprint",
    "imageNum": "9"
  },
  {
    "title": "Mylestoned",
    "type": "Navy Triblend",
    "details": "2 Location Imprint",
    "imageNum": "16"
  },
  {
    "title": "Entrepreneur Games",
    "type": "Black 100% Cotton",
    "details": "2 Color Imprint",
    "imageNum": "7"
  }
];

$(document).ready(function() {
  // Variables
  var logoSlickActive = false;

  // Start Typed Js Text Rotation
  startTextRotation();

  // Logo bar init
  // if(window.innerWidth < 1200 && !logoSlickActive) {
  //   initLogoBar();
  // } else {
  //   $('.js-logo-bar').addClass('is-active');
  // }
  initLogoBar();
  // Clear HTMl and Render Products
  $('#js-product-carousel').html("");
  render(data);

  // Watch Scroll Values
  watchScroll();

  // Events
  $(window).on('resize', function(e) {
    startTextRotation();
    // if(window.innerWidth < 1200 && !logoSlickActive) {
    //   initLogoBar();
    // }
    //
    // if(window.innerWidth >= 1200 && logoSlickActive) {
    //   unslickLogoBar();
    // }
  });


  // Functions
  function watchScroll() {
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
    }) // end window.on(scroll)
  } // end watchScroll

  // Typed JS
  // https://github.com/mattboldt/typed.js/
  function startTextRotation() {
    var $textHook = $(".js-text-hook");
    $textHook.typed({
      strings: ["v-necks", "zip ups", "t-shirts", "hoodies", "tank tops", "zip ups", "t-shirts", "hoodies", "tank tops", "sweatshirts", "apparel"],
      typeSpeed: 45,
      backSpeed: 60,
      startDelay: 1000,
      backDelay: 2500,
      loop: false,
      shuffle: false,
      showCursor: false
    });
  }

  // Logo Bar Slick Settings
  // http://kenwheeler.github.io/slick/
  function initLogoBar() {
    $('.js-logo-bar').slick({
      slidesToShow: 5,
      slidesToScroll: 0,
      variableWidth: true,
      variableHeight: true,
      arrows: false,
      centerPadding: '40px',
      initialSlide: 5,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            arrows: false,
            centerPadding: '40px',
            centerMode: true,
            initialSlide: 2,
            autoplay: true,
            autoplaySpeed: 1500
          }
        },
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            initialSlide: 2,
            slidesToShow: 1,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 1500
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
            autoplay: true,
            autoplaySpeed: 1500,
            cssEase: 'ease-out'
          }
        }
      ]
    });
    //logoSlickActive = true;
    $('.js-logo-bar').addClass('is-active');
  } // end initLogoBar()

  // Deconstruct Logo Bar at Large Sizes
  // function unslickLogoBar() {
  //   $('.js-logo-bar').removeClass('is-active');
  //   $('.js-logo-bar').slick('unslick');
  //   $('.js-logo-bar').addClass('is-active');
  // }

  // Slick JS
  // http://kenwheeler.github.io/slick/
  function render(data) {
    data.forEach(function(product, index) {
      // Arrows to be prepended and appended
      var prevArrow = $('<div class="icon-arrow-prev js-prev-product"></div>');
      var nextArrow = $('<div class="icon-arrow-next js-next-product"></div>');
      var repeatArrow = $('<div class="fa fa-repeat icon-arrow-repeat js-first-product"></div>');

      // Item HTML jQuery template
      var item = $('<div class="product"><img src="assets/images/product-image-'+ product.imageNum +'.png" alt="'+product.title+' Product" class="product__image"><div class="product__description"><h4 class="product__title">'+product.title+'</h4><h5 class="product__type">'+product.type+'</h5><h5 class="product__details">'+product.details+'</h5><a href="mailto:andy@inktaco.com?subject=Interested&nbsp;in&nbsp;Custom&nbsp;Apparel" class="product__contact">Contact us about a similar product</a></div></div>');
      if(index < 1) {
        item.append(nextArrow);
        $('#js-product-carousel').append(item);
      } else if(index + 1 == data.length) {
        item.prepend(prevArrow);
        item.append(repeatArrow);
        $('#js-product-carousel').append(item);
      } else {
        item.prepend(prevArrow);
        item.append(nextArrow);
        $('#js-product-carousel').append(item);
      }
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
  } // end render

})
