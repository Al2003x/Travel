let navbar = document.querySelector(".navbar__list");
let searchForm = document.querySelector(".search-form");

// @ts-ignore
document.querySelector('#menu-btn').onclick = () =>{
  // @ts-ignore
  navbar.classList.add('active');
}

// @ts-ignore
document.querySelector('#search-btn').onclick = () =>{
  // @ts-ignore
  searchForm.classList.add('active');
}

// @ts-ignore
document.querySelector('#close-search').onclick = () =>{
  // @ts-ignore
  searchForm.classList.remove('active');
}

// @ts-ignore
document.querySelector('#nav-close').onclick = () =>{
  // @ts-ignore
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  // @ts-ignore
  navbar.classList.remove('active');

  if(window.scrollY > 0){
      // @ts-ignore
      document.querySelector('.header').classList.add('active');
  }else{
      // @ts-ignore
      document.querySelector('.header').classList.remove('active');
  }
};

window.onload = () =>{
  if(window.scrollY > 0){
      // @ts-ignore
      document.querySelector('.header').classList.add('active');
  }else{
      // @ts-ignore
      document.querySelector('.header').classList.remove('active');
  }
};

// @ts-ignore
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// @ts-ignore
var swiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// @ts-ignore
var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

// @ts-ignore
var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// @ts-ignore
var swiper = new Swiper(".clients-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
  },
});
