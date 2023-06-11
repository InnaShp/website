const carousel = document.querySelector('.partners__carousel');
const carouselInner = carousel.querySelector('.partners__carousel-inner');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
const partnerCards = carouselInner.querySelectorAll('.partner-card');

let currentIndex = 0;

function showNextSlide() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function updateCarousel(){
  currentIndex = currentIndex >= partnerCards.length - 1 ? currentIndex === 0 : currentIndex + 1;
  showNextSlide()
}
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + partnerCards.length) % partnerCards.length;
  showNextSlide();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % partnerCards.length;
  showNextSlide();
});

setInterval(updateCarousel, 3000);