'use strict';

const slides = Array.from(document.getElementsByClassName('slider__item'));
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const dots = Array.from(document.getElementsByClassName('slider__dot'));

dots[0].className = 'slider__dot slider__dot_active';

next.onclick = () => {
	let currentNumber = slides.findIndex(findCurrentSlide);
	let nextNumber = currentNumber + 1;
	if (currentNumber >= slides.length - 1) {
		nextNumber = 0;
	}
	slideImage(currentNumber, nextNumber);
}

prev.onclick = () => {
	let currentNumber = slides.findIndex(findCurrentSlide);
	let nextNumber = currentNumber - 1;
	if (currentNumber === 0) {
		nextNumber = slides.length - 1;
	}
	slideImage(currentNumber, nextNumber);
}

for (let i = 0; i < dots.length; i++) {
	dots[i].onclick = () => {
		slideImage(slides.findIndex(findCurrentSlide), i);
	}
}

function findCurrentSlide(slide) {
	return slide.className.includes('slider__item_active');
}

function slideImage(currentNumber = 0, nextNumber = 0) {
	slides[currentNumber].className = 'slider__item';
	slides[nextNumber].className = 'slider__item slider__item_active';
	dots[nextNumber].className = 'slider__dot slider__dot_active';
	dots[currentNumber].className = 'slider__dot';
}
