// Main js file

$(function () {

  //OWL CAROUSEL
  let carousel = $('.owl-carousel');
  carousel.owlCarousel({
    items: 7,
    loop: true,
    dots: false,
    navContainer: '.carousel__navs',
    nav: false,
    navClass: ['carousel__arr carousel__arr--prev','carousel__arr carousel__arr--next'],
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 600,
    responsiveClass:true,
    responsive: {
      0: {
        items: 1,
        autoplay: false
      },
      768: {
        items: 3,
        autoplay: false
      },
      992: {
        items: 5,
        autoplay: true
      },
      1200: {
        items: 7,
        autoplay: true
      }
    }
  });
});