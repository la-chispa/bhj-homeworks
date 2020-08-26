'use strict';
const elements = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltips = elements.map(i => {
	let tooltip = document.createElement('div');
	tooltip.className = 'tooltip';
	tooltip.innerText = i.title;
	return tooltip;
});

setTooltips();

function setTooltips() {
	for (let element of elements) {
		element.insertAdjacentElement('afterEnd', tooltips[elements.indexOf(element)]);
	}
}

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', (event) => {
		event.preventDefault();
		let tooltip = tooltips[i];
		if (tooltip.classList.contains('tooltip_active')) {
			tooltip.classList.remove('tooltip_active');
			return false;
		}
		if (document.querySelector('.tooltip_active')) {
			document.querySelector('.tooltip_active').classList.remove('tooltip_active');
		}

		tooltip.style.left = `${event.target.getBoundingClientRect().left}px`;
		tooltip.style.top = `${event.target.getBoundingClientRect().bottom}px`;
		tooltip.classList.add('tooltip_active');
	});
}

