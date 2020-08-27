'use strict';
const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const list = document.getElementById('tasks__list');

form.addEventListener('submit', (event) => {
	if (input.value) {
		event.preventDefault();
		setTask(input.value);
		input.value = '';
	}
});

function setTask(text) {

	let task = document.createElement('div');
	task.className = 'task';

	let todo = document.createElement('div');
	todo.className = 'task__title';
	todo.innerText = input.value;

	let cancel = document.createElement('a');
	cancel.setAttribute('href', '#');
	cancel.className = 'task__remove';
	cancel.innerHTML = '&times;';

	list.insertAdjacentElement('beforeEnd', task);
	task.insertAdjacentElement('beforeEnd', todo);
	task.insertAdjacentElement('beforeEnd', cancel);

	cancel.addEventListener('click', (event) => task.remove());
}