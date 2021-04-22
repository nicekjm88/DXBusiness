  var swiper = new Swiper('.swiper-container.main-visual', {
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      notificationClass: 'swiper-notification' 
    },   
    // breakpoints: {
    //   1024: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //   },
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //   }
    // }
  });
  var swiper = new Swiper('.swiper-container.intro-slider', {
    speed: 750,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });





