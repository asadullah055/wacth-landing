const swiper1 = new Swiper(".swiper1", {
  loop: true,
  spaceBetween: 50,
  grabCursor: true,
});
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: 4,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    577: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 4,
    },
  },
});
const swiper2 = new Swiper(".swiper2", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  effect: "cube",
  cubeEffect: {
    shadow: false,
    slideShadows: false,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
