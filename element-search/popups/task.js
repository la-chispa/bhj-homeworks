'use strict';
const activePopup = document.getElementById('modal_main');
activePopup.className = 'modal modal_active';

const successElem = document.querySelector('.show-success');
const successPopup = document.getElementById('modal_success');

successElem.onclick = () => {
	successPopup.className = 'modal modal_active';
}

const closePopup = Array.from(document.querySelectorAll('div.modal__close'));
const popups = Array.from(document.querySelectorAll('.modal'))

for (let i in closePopup) {
	closePopup[i].onclick = () => {
		for (let popup in popups) {
			popups[popup].className = 'modal';
		}
	}
}


	
