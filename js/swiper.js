const swiper = new Swiper('.co_workers', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const portfolioSwiper = new Swiper(".portfolioSwiper", {
  direction: 'horizontal',  
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  initialSlide:1,
  // If we need pagination
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper1 = new Swiper('.pSwiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor:true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper2 = new Swiper('.pSwiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor:true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper3 = new Swiper('.pSwiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor:true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});