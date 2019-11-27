const carousleslide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clienWidth;

carousleslide.style.transform = 'translateX(' + (-size*counter) + 'px)';