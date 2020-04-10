$(document).ready(function () {


    
  $('.burger').on("click", function () {

    $('.burger-menu').css('right', '0px');

    $('body').css('overflow-x', 'auto')
    $('.burger-menu').css('opacity', '1');
    $('.burger-menu').css('visibility', 'visible');

  });


  $('.close-burger-menu').on('click', function () {

    $('.burger-menu').css('right', '-900px');

    $('body').css('overflow-x', 'hidden')
  })

  // Slider
  getSlider();

  function getSlider() {
    $(document).on('click', '.number-1', function () {
      $('.item-1').removeClass('d-none');
      $('.item-3').addClass('d-none')
      $('.item-2').addClass('d-none')
    });
    $(document).on('click', '.number-2', function () {
      $('.item-2').removeClass('d-none');
      $('.item-3').addClass('d-none')
      $('.item-1').addClass('d-none')
    });
    $(document).on('click', '.number-3', function () {
      $('.item-3').removeClass('d-none');
      $('.item-1').addClass('d-none');
      $('.item-2').addClass('d-none');
    });
  }


 


  // Header Scroll
  $(window).scroll(function () {

    if ($('html').scrollTop() > 150) {
      $('header').addClass('header-active')
      $('.menu li a').css('color', ' #26313c')
      $('.img').attr('src', 'img/logo (1).png');
      $('.burger div').css('background', '#26313c');



    } else {
      $('header').removeClass('header-active')
      $('.img').attr('src', 'img/logo-transparent.png');
      $('.menu li a').css('color', ' white')
      $('.burger div').css('background', 'white');
    }
    // 


  });





  // 



  // 
  $('#our-work ul li span').hover(function name() {

      $('#our-work ul li span').each(function (index, element) {
        $(element).removeClass('active-our-work');
      })

      $(this).addClass('active-our-work')
    }),
    function () {


    };
   
  

 
  // 
// Slider Plugin Owl-Carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })

  // Slider Plugin Silck
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: false,
    cursor: 'grab',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
    
  });

// Aos
  AOS.init({
    delay: 1000
  });
    // Count
  $('.count_nums').counterUp({
    delay: 20,
    time: 3000
  });


  $('.people-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }); 
});

