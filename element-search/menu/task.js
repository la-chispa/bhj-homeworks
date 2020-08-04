'use strict';
const links = document.querySelectorAll('.menu__link');
const subMenu = Array.from(document.querySelectorAll('.menu_sub'));

for (let i = 0; i < links.length; i++) {
	links[i].onclick = () => {
		hideSubMenu();
		let menu = links[i].closest('.menu__item');
		if (menu.querySelector('.menu_sub')) {
			menu.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
			return false;
		}
	}
}

function hideSubMenu() {
	for (let subMenuItem in subMenu) {
		subMenu[subMenuItem].className = 'menu menu_sub';
	}
}