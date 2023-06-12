const carousel = document.querySelector('.partners__carousel');
const carouselInner = carousel.querySelector('.partners__carousel-inner');
const partnerCards = carouselInner.querySelectorAll('.partner-card');

let currentIndex = 0;
let isForward = true;

function showNextSlide() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function updateCarousel() {
  if (isForward) {
    currentIndex++;
    if (currentIndex === partnerCards.length - 1) {
      isForward = false;
    }
  } else {
    currentIndex--;
    if (currentIndex === 0) {
      isForward = true;
    }
  }
  showNextSlide();
}

setInterval(updateCarousel, 3000);