'use strict';
const area = document.getElementById('editor');
const remove = document.getElementById('remove');

area.value = localStorage.getItem('area');

area.addEventListener('input', (event) => {
	localStorage.setItem('area', area.value);
});

remove.addEventListener('click', (event) => {
	localStorage.removeItem('area');
	area.value = '';
})
