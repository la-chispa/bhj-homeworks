const timer = document.getElementById('timer');
const time = setInterval(showTime, 1000);
function showTime() {
	if (timer.textContent > 0) {
		timer.textContent = timer.textContent - 1;
	} else {
		clearInterval(time);
		alert('Вы победили в конкурсе!');
		location = 'https://steelinside.com/downloads/Rainbow-Over-Hyderabad.zip';
	}
}

/* Это должно было быть доп. задание "Повышенный уровень сложности #1". 
Но я споткнулась на том, чтобы заставить числа быть двузначными.
Если подскажете, буду благодарна.*/
// const timer2 = document.getElementById('status')
// let timeGetting = prompt('Сколько секунд будем ждать?');
// const time2 = setInterval(showTimeAgain, 1000);

// function showTimeAgain() {
// 	let timerAgain = new Date(parseInt(timeGetting) * 1000);	
// 	if (parseInt(timeGetting) > 0){
// 		let counter = `${timerAgain.getUTCHours()}:${timerAgain.getMinutes()}:${timerAgain.getSeconds()}`;
// 		timer2.textContent = counter;
// 	} else{
// 		clearInterval(time2);
// 		alert('Вы очень терпеливы!\nДержите приз =)');
// 		location = 'https://steelinside.com/downloads/Rainbow-Over-Hyderabad.zip';
// 	}
// 	--timeGetting;
// }