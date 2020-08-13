'use strict';
const links = document.querySelectorAll('.menu__link');

for (let i = 0; i < links.length; i++) {
	links[i].onclick = function() {
		let menu = this.closest('.menu__item');
		if (menu.querySelector('.menu_sub').classList.contains('menu_active')) {
			menu.querySelector('.menu_sub').classList.remove('menu_active');
			return false;
		} 
		hideSubMenu();
		if (menu.querySelector('.menu_sub')) {
			menu.querySelector('.menu_sub').classList.add('menu_active');
			return false;

		}
	}
}

function hideSubMenu() {
	let subMenu = Array.from(document.querySelectorAll('.menu_sub')).find(i => i.classList.contains('menu_active'));
	if (subMenu) {
		subMenu.classList.remove('menu_active');
	}
}


