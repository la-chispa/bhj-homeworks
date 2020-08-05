'use strict';

const slides = Array.from(document.getElementsByClassName('slider__item'));
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const dots = Array.from(document.getElementsByClassName('slider__dot'));

let currentNumber = 0;
let nextNumber = 0;

dots[0].className = 'slider__dot slider__dot_active';

next.onclick = () => {
	currentNumber = slides.findIndex(findCurrentSlide);
	nextNumber = currentNumber + 1;
	if (currentNumber >= slides.length - 1) {
		nextNumber = 0;
	}
	slideImage();
}

prev.onclick = () => {
	currentNumber = slides.findIndex(findCurrentSlide);
	nextNumber = currentNumber - 1;
	if (currentNumber === 0) {
		nextNumber = slides.length - 1;
	}
	slideImage();
}

for (let i = 0; i < dots.length; i++) {
	dots[i].onclick = () => {
		currentNumber = slides.findIndex(findCurrentSlide);
		nextNumber = i;
		slideImage();
	}
}

function findCurrentSlide(slide) {
	return slide.className.includes('slider__item_active');
}

function slideImage() {
	slides[currentNumber].className = 'slider__item';
	slides[nextNumber].className = 'slider__item slider__item_active';
	dots[nextNumber].className = 'slider__dot slider__dot_active';
	dots[currentNumber].className = 'slider__dot';
}
