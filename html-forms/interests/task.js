'use strict';

const allInterests = document.querySelectorAll('.interest__check');

for (let i = 0; i < allInterests.length; i++) {
	allInterests[i].addEventListener('change', check);
}

function check(event) {
	const current = this.closest('ul');
	const interests = this.closest('.interest').querySelectorAll('.interest__check');

	for (let interest of interests) {
		interest.checked = (this.checked) ? true : false;
		interest.indeterminate = false;
	}

	if (current.classList.contains('interests_active')) {
		checkPrev(current);
	}
}

function checkPrev(list) {
	const prev = list.closest('.interest').querySelector('.interest__check');
	const items = Array.from(list.querySelectorAll('.interest__check'));

	if (items.every(item => item.checked)) {
		prev.indeterminate = false;
		prev.checked = true;
	} else if (items.some(item => item.checked)) {
		prev.indeterminate = true;
	} else {
		prev.indeterminate = false;
		prev.checked = false;
	}

	if (prev.closest('ul').closest('.interest')) {
		checkPrev(prev.closest('ul'));
	} else {
		return;
	}
}