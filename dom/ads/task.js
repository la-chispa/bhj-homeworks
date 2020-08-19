'use strict';

let speed = document.querySelector('.rotator__case_active').dataset.speed;

setTimeout(function rotate() {
	const activeCase = document.querySelector('.rotator__case_active');
	let nextCase = activeCase.nextElementSibling;
	activeCase.style.color = activeCase.dataset.color;
	activeCase.classList.remove('rotator__case_active');
	if (nextCase) {
		nextCase.classList.add('rotator__case_active');
		nextCase.style.color = nextCase.dataset.color;
	} else {
		nextCase = activeCase.closest('.rotator').firstElementChild;
		nextCase.classList.add('rotator__case_active');
	}
	speed = nextCase.dataset.speed;
	setTimeout(rotate, speed);
}, speed);