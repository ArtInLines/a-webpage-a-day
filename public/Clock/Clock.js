const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');
const digitalClock = document.querySelector('#digitalClock');
const analogClock = document.querySelector('.analog');
const digitalBtn = document.getElementById('digital');
const analogBtn = document.getElementById('analog');

digitalBtn.addEventListener('click', () => {
	start();
	setDigital();
	setInterval(setDigital, 1000);
});

analogBtn.addEventListener('click', () => {
	digitalClock.style.display = 'none';
	digitalBtn.style.backgroundColor = 'transparent';
	analogClock.style.display = 'block';
	analogBtn.style.backgroundColor = 'blue';
	analogBtn.style.color = 'black';
	setInterval(setAnalog, 1);
});

function start() {
	analogClock.style.display = 'none';
	analogBtn.style.backgroundColor = 'transparent';
	digitalClock.style.display = 'block';
	digitalBtn.style.backgroundColor = 'blue';
	digitalBtn.style.color = 'black';
}

function setDigital() {
	let currentDate = new Date();
	let second = currentDate.getSeconds();
	let minute = currentDate.getMinutes();
	let hour = currentDate.getHours();
	digitalClock.innerHTML = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
}

function setAnalog() {
	let currentDate = new Date();
	let millisecondsRatio = currentDate.getMilliseconds() / 1000;
	let secondsRatio = (millisecondsRatio + currentDate.getSeconds()) / 60;
	let minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minuteRatio);
	setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', `${rotationRatio * 360}deg`);
}

start();
setDigital();
setInterval(setDigital, 1000);
