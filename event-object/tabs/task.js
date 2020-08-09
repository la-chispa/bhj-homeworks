'use strict';
const tabs = Array.from(document.getElementsByClassName('tab'));
const contents = Array.from(document.getElementsByClassName('tab__content'));

for (let tab of tabs) {
	tab.onclick = function() {
		activate(tab);
	}
}

function activate(tab) {
	tabs.forEach(tab => tab.classList.remove('tab_active'));
	contents.forEach(content => content.classList.remove('tab__content_active'));
	tab.classList.add('tab_active');
	contents[tabs.indexOf(tab)].classList.add('tab__content_active');
}