'use strict';

let cookies = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let speed = document.getElementById('clicker__speed');
let lastClick = Date.now();

function countClicks() {
	++counter.textContent;

	let newClick = Date.now();
	speed.textContent = (1000 / (newClick - lastClick)).toFixed(2);
	lastClick = newClick;

//По просьбам мужа печенька будет непрерывно увеличиваться, пока не дорастёт до полного размера изображения =)
	if (cookies.width <= 1024) {
		cookies.width = cookies.width + 10;
	} else {
		cookies.width = 200;
	}
}

cookies.onclick = countClicks;