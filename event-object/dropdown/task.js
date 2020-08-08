'use strict';

const listItems = Array.from(document.querySelectorAll('.dropdown__item'));

document.querySelector('.dropdown__value').addEventListener('click', switchList);

for (let item of listItems) {
	item.onclick = function() {
		document.querySelector('.dropdown__value').textContent = this.textContent;
		switchList();
		return false;
	}
}

function switchList() {
	document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
}