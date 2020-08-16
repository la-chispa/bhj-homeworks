'use strict';
const tabs = Array.from(document.getElementsByClassName('tab'));
const contents = Array.from(document.getElementsByClassName('tab__content'));

for (let tab of tabs) {
	tab.addEventListener('click', activate)
}

function activate() {
	if (this.classList.contains('tab_active')) {
		return false;
	}
	tabs.find(i => i.classList.contains('tab_active')).classList.remove('tab_active');
	contents.find(i => i.classList.contains('tab__content_active')).classList.remove('tab__content_active');
	this.classList.add('tab_active');
	contents[tabs.indexOf(this)].classList.add('tab__content_active');
}