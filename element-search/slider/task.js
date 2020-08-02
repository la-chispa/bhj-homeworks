'use strict';
const slides = Array.from(document.getElementsByClassName('slider__item'));
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');


next.onclick = () => {
	let x = 0;
	for (let i = 0; i < slides.length; i++) {
		if (slides[i].className === 'slider__item slider__item_active') {
			x = i;
		}
	}
	let y = x + 1;
	if (x >= slides.length - 1) {
		y = 0;
	}
	slides[x].className = 'slider__item';
	slides[y].className = 'slider__item slider__item_active';
}

prev.onclick = () => {
	let x = 0;
	for (let i = slides.length - 1; i >= 0; i--) {
		if (slides[i].className === 'slider__item slider__item_active') {
			x = i;
		}
	}
	let y = x - 1;
	if (x === 0) {
		y = slides.length - 1;
	}
	slides[x].className = 'slider__item';
	slides[y].className = 'slider__item slider__item_active';
}		
