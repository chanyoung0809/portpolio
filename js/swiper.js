// strength 스와이퍼
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
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// 포트폴리오 목록 스와이퍼
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

// 포트폴리오 내 스와이퍼들 반복문 처리
const swiperOptions = {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const numOfSwipers = 3;
const swipers = [];

for (let i = 1; i <= numOfSwipers; i++) {
  const swiperSelector = `.pSwiper${i}`;
  const swiper = new Swiper(swiperSelector, swiperOptions);
  swipers.push(swiper);
}