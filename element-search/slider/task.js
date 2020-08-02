'use strict';

const slides = Array.from(document.getElementsByClassName('slider__item'));
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');

let currentNumber = 0;
let nextNumber = 0;

next.onclick = () => {
	for (let i = 0; i < slides.length; i++) {
		if (slides[i].className === 'slider__item slider__item_active') {
			currentNumber = i;
		}
	}
	nextNumber = currentNumber + 1;
	if (currentNumber >= slides.length - 1) {
		nextNumber = 0;
	}
	slideImage();
}

prev.onclick = () => {
	for (let i = slides.length - 1; i >= 0; i--) {
		if (slides[i].className === 'slider__item slider__item_active') {
			currentNumber = i;
		}
	}
	nextNumber = currentNumber - 1;
	if (currentNumber === 0) {
		nextNumber = slides.length - 1;
	}
	slideImage();
}

function slideImage() {
	slides[currentNumber].className = 'slider__item';
	slides[nextNumber].className = 'slider__item slider__item_active';
}