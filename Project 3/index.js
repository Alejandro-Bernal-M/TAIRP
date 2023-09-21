const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showImage(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

showImage(currentIndex);
