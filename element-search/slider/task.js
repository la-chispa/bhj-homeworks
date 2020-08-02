'use strict';

const slides = Array.from(document.getElementsByClassName('slider__item'));
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const dots = Array.from(document.getElementsByClassName('slider__dot'));

let currentNumber = 0;
let nextNumber = 0;

next.onclick = () => {
	currentNumber = findCurrentSlide();
	nextNumber = currentNumber + 1;
	if (currentNumber >= slides.length - 1) {
		nextNumber = 0;
	}
	slideImage();
}

prev.onclick = () => {
	currentNumber = findCurrentSlide();
	nextNumber = currentNumber - 1;
	if (currentNumber === 0) {
		nextNumber = slides.length - 1;
	}
	slideImage();
}

for (let i = 0; i < dots.length; i++) {
	dots[i].onclick = () => {
		currentNumber = findCurrentSlide();
		nextNumber = i;
		slideImage();
	}
}

function findCurrentSlide() {
	for (let i = 0; i < slides.length; i++) {
		if (slides[i].className === 'slider__item slider__item_active') {
			return i;
		}
	}
}

function slideImage() {
	slides[currentNumber].className = 'slider__item';
	slides[nextNumber].className = 'slider__item slider__item_active';
}