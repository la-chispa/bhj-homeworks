'use strict';
const progress = document.getElementById('progress');
const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let formData = new FormData(form);

	let xhr = new XMLHttpRequest();
	xhr.upload.addEventListener('progress', (event) => progress.value = (event.loaded / event.total).toFixed(1));
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.send(formData);
});