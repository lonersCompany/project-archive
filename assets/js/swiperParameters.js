export const baseImage = {
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  speed: 0,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
};

export const cards = {
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  speed: 500,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    850: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
};
