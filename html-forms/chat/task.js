'use strict';
const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const container = document.querySelector('.chat-widget__messages-container');

let checker = 0;

chatWidget.addEventListener('click', openChat);
document.addEventListener('keyup', sendMessage);

function openChat() {
	chatWidget.classList.add('chat-widget_active');
}

function sendMessage(event) {
	const clientMessage = document.querySelector('.chat-widget__input');
	const botMessages = [ 
	'Earth is closed today', 
	'I had strings, but now I\'m free', 
	'I don\'t care',
	'Language!',
	'I can do this all day.',
	'Кто здесь?', 
	'Нет меня — я покинул Расею',
	'А теперь проваливайте.',
	]
	let botMessage = botMessages[Math.floor(Math.random() * Math.floor(botMessages.length))];
	clearTimeout(checker);
	
	if (event.keyCode === 13 && clientMessage.value) {
		getMessage(clientMessage.value);
		document.querySelector('.chat-widget__messages').lastElementChild.classList.add('message_client'); 
		clientMessage.value = '';
		getMessage(botMessage);
		container.scrollTop = 9999;
		checker = setTimeout(() => {
			getMessage('Что молчим? Кого ждём?');
			container.scrollTop = 9999;
		}, 30000);
	}
}

function getMessage(message) {
	let date = new Date();
		messages.innerHTML += `
  		  <div class="message">
    	  <div class="message__time">${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}</div>
   		    <div class="message__text">
      		  ${message}
    	    </div>
 		  </div>
		`;
}