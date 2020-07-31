'use strict';
//В процессе этой игры ни одно животное не пострадало
//Убивать кротов было жалко, поэтому в моей игре их нужно ловить, гладить и отпускать
const catchMole = document.getElementById('catch');
const missMole = document.getElementById('lost');

function checkHole(index) {
	return document.getElementById(`hole${index}`)
}

for (let i = 1; i <= 9; i++) {
	let hole = checkHole(i);
	hole.onclick = function() {
		if (checkHole(i).className.includes('hole_has-mole')) {
			++catchMole.textContent;
			checkWinning();
		} else {
			++missMole.textContent;
			checkLosing();
		}
	}
}

function checkWinning() {
	if (parseInt(catchMole.textContent) === 10) {
		alert('Вы победили!\nВы шустрый, и кротам нравится играть с вами.\nДавайте ещё!')	
		location.reload(true);
	}
}
function checkLosing() {
	if (parseInt(missMole.textContent) === 5) {
		alert('Вы проиграли.\nВы пока не очень ловкий, тренируйтесь');
		location.reload(true);
	}
}