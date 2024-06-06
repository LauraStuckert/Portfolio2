let currentIndex = 0;
const slidesToShow = 1;

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-images');
    const totalItems = items.length;
    let newIndex = index;

    if (index >= totalItems) {
        newIndex = 0;
    } else if (index < 0) {
        newIndex = totalItems - 1;
    }

    currentIndex = newIndex;
    const newTransform = -currentIndex * (100 / slidesToShow);
    const carouselWrapper = document.querySelector('.carousel_wrapper');
    carouselWrapper.style.transform = `translateX(${newTransform}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the carousel by showing the first slide
showSlide(currentIndex);