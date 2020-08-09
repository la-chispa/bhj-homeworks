
'use strict';
// Задание с повышенным уровнем сложности #1" 
const timer = document.getElementById('status')
let timeGetting = prompt('Сколько секунд будем ждать?');
const time = setInterval(showTimeAgain, 1000);

function showTimeAgain() {
	let timerAgain = new Date(parseInt(timeGetting) * 1000);	
	if (parseInt(timeGetting) > 0) {
		let counter = `${String(timerAgain.getUTCHours()).padStart(2, '0')}:${String(timerAgain.getMinutes()).padStart(2, '0')}:${String(timerAgain.getSeconds()).padStart(2, '0')}`;
		timer.textContent = counter;
	} else{
		clearInterval(time);
		alert('Вы очень терпеливы!\nДержите приз =)');
		location = 'https://steelinside.com/downloads/Rainbow-Over-Hyderabad.zip';
	}
	--timeGetting;
}

// Стандартное задание
// const timer = document.getElementById('timer');
// const time = setInterval(showTime, 1000);
// function showTime() {
// 	if (timer.textContent > 0) {
// 		timer.textContent = timer.textContent - 1;
// 	} else {
// 		clearInterval(time);
// 		alert('Вы победили в конкурсе!');
// 		location = 'https://steelinside.com/downloads/Rainbow-Over-Hyderabad.zip';
// 	}
// }