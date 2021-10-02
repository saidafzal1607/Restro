"use strict";

var menu = document.querySelector('#menu-bars');
var navbar = document.querySelector('.navbar');

menu.onclick = function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

var section = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = function () {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  section.forEach(function (sec) {
    var top = window.scrollY;
    var height = sec.offsetHeight;
    var offset = sec.offsetTop - 150;
    var id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(function (links) {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
      });
    }

    ;
  });
};

document.querySelector('#search-icon').onclick = function () {
  document.querySelector('#search-form').classList.toggle('active');
};

document.querySelector('#close').onclick = function () {
  document.querySelector('#search-form').classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop: true
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;