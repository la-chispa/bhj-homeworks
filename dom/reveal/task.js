'use strict';

function locate(block) {
	const location = block.getBoundingClientRect();
	const viewportHeight = window.innerHeight;
	const top = location.top > 0 && location.top < viewportHeight;
	const bottom = location.bottom < viewportHeight && location.bottom > 0;
	return top || bottom;
}

function show() {
	const blocks = Array.from(document.getElementsByClassName('reveal'));
	for (let block of blocks) {
		if (locate(block)) {
			block.classList.add('reveal_active');
		} else {
			block.classList.remove('reveal_active');
		}
	}
}

window.addEventListener('scroll', show);