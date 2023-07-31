var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints:{
      1220:{
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1000:{
        slidesPerView: 3,
        spaceBetween: 30,
      },
      600:{
        slidesPerView: 2,
        spaceBetween: 30,
      },
      400:{
        slidesPerView: 1,
      },
    },

});

var swiper = new Swiper(".say_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints:{
      1000:{
        slidesPerView: 3,
        spaceBetween: 30,
      },
      680:{
        slidesPerView: 2,
        spaceBetween: 30,
      },
      400:{
        slidesPerView: 1,
      },
    },

});

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});
