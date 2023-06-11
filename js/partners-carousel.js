const slides = [
  '<a href="https://www.google.com/"><img src="img/logos/google.png" alt="Google"></a>',
  '<a href="https://www.amazon.com/"><img src="img/logos/amazon.png" alt="Amazon"></a>',
  '<a href="https://www.microsoft.com/"><img src="img/logos/microsoft.png" alt="Microsoft"></a>',
  '<a href="https://www.uber.com/"><img src="img/logos/uber.png" alt="Uber"></a>',
  '<a href="https://www.dropbox.com/"><img src="img/logos/dropbox.png" alt="Dropbox"></a>'
];

let currentSlide = 0;

const slideContainer = document.querySelector('.partners__carousel-slide');

function showCurrentSlide() {
  slideContainer.innerHTML = slides[currentSlide];
  if (window.innerWidth > 800) {
    const secondSlideIdx = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.innerWidth > 1024) {
      const thirdSlideIdx = secondSlideIdx === slides.length - 1 ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
    }
    
  }
}

function nextSlide() {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  showCurrentSlide();
}

function prevSlide() {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  showCurrentSlide();
}

showCurrentSlide();

const nextSlideButton = document.querySelector('.partners__carousel-button--next');
nextSlideButton.addEventListener('click', nextSlide);

const prevSlideButton = document.querySelector('.partners__carousel-button--prev');
prevSlideButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);
window.addEventListener('resize', showCurrentSlide);