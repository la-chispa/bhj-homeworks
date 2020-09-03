'use strict';
const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', function() {
	if (this.readyState === xhr.DONE && this.status === 200) {
		let data = JSON.parse(this.responseText);
		let content = data.data;
		title.textContent = content.title;

		for (let key of content.answers) {
			answers.innerHTML += `
			  <button class="poll__answer">
        	    ${key}
        	  </button>
			`;
		}

		const buttons = Array.from(document.getElementsByClassName('poll__answer'));
		
		for (let button of buttons) {
			button.addEventListener('click', getResults);
		}
	}	
})

function getResults(event) {
	alert('Спасибо, ваш голос засчитан!');

	let answer = Array.from(answers.getElementsByClassName('poll__answer')).findIndex(i => i === event.target);
	let vote = JSON.parse(xhr.responseText).id;

	const results = new XMLHttpRequest;
	results.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
	results.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	results.send(`vote=${vote}&answer=${answer}`);

	results.addEventListener('readystatechange', function() {
		if (this.readyState === results.DONE && this.status === 200) {
			let data = JSON.parse(this.responseText).stat;

			answers.classList.remove('poll__answers_active');

			const stats = document.createElement('div');
			stats.className = 'poll__stats';
			document.querySelector('.poll').insertAdjacentElement('beforeEnd', stats);

			let sum = 0;

			for (let i = 0; i < data.length; i++) {
				sum += data[i].votes;
			}

			for (let i = 0; i < data.length; i++) {
				let result = ((data[i].votes / sum) * 100).toFixed(2);

				stats.innerHTML += `
			  	  <div class="poll__stat">
        	        ${data[i].answer}: <span class="poll__stat-percent">${result}%</span>
        	  	  </div>
				`;

			}
		}
	});
}
