let currentIndex = 0;

function moveSlide(n) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentIndex += n;

  // Loop back to the first slide if we reach the end
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  // Move slides
  slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}
