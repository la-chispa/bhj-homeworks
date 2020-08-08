'use strict';
const links = document.querySelectorAll('.menu__link');
const subMenu = Array.from(document.querySelectorAll('.menu_sub'));

for (let i = 0; i < links.length; i++) {
	links[i].onclick = function() {
		let menu = this.closest('.menu__item');
		if (menu.querySelector('.menu_sub').classList.contains('menu_active')) {
			menu.querySelector('.menu_sub').classList.remove('menu_active');
		} else {
			hideSubMenu();
			if (menu.querySelector('.menu_sub')) {
				menu.querySelector('.menu_sub').classList.add('menu_active');
				return false;
			}
		}
	}
}

function hideSubMenu() {
	for (let subMenuItem in subMenu) {
		subMenu[subMenuItem].className = 'menu menu_sub';
	}
}


