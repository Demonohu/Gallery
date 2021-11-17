const swiper = new Swiper('.mySwiper', {

  speed: 400,
  spaceBetween: 100,
  effect: 'coverflow',

  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});