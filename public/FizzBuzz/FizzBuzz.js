const fizzNumEl = document.querySelector('#fizzNum');
const fizzTextEl = document.querySelector('#fizzText');
const buzzNumEl = document.querySelector('#buzzNum');
const buzzTextEl = document.querySelector('#buzzText');
const fizzBuzzTextEl = document.querySelector('#fizzBuzzText');
const startNumEl = document.querySelector('#startNum');
const endNumEl = document.querySelector('#endNum');
const autoEl = document.querySelector('#auto');
const manuEl = document.querySelector('#manu');
const halfEl = document.querySelector('#half');
const resultEl = document.querySelector('#result');
const stepEl = document.querySelector('#stepInput');

let fizzNum = fizzNumEl.value,
	fizzText = fizzTextEl.value,
	buzzNum = buzzNumEl.value,
	buzzText = buzzTextEl.value,
	fizzBuzzText = fizzBuzzTextEl.value,
	startNum = Number(startNumEl.value),
	endNum = Number(endNumEl.value),
	step = Number(stepEl.value),
	counter = 0,
	result;

fizzTextEl.addEventListener('keyup', () => {
	fizzText = fizzTextEl.value;
	fizzBuzzTextEl.value = fizzText + buzzText;
	fizzBuzzText = fizzBuzzTextEl.value;
});

buzzTextEl.addEventListener('keyup', () => {
	buzzText = buzzTextEl.value;
	fizzBuzzTextEl.value = fizzText + buzzText;
	fizzBuzzText = fizzBuzzTextEl.value;
});

fizzBuzzTextEl.addEventListener('keyup', () => {
	fizzBuzzText = fizzBuzzTextEl.value;
});

fizzNumEl.addEventListener('change', () => {
	fizzNum = fizzNumEl.value;
});

buzzNumEl.addEventListener('change', () => {
	buzzNum = buzzNumEl.value;
});

startNumEl.addEventListener('change', () => {
	startNum = Number(startNumEl.value);
});

endNumEl.addEventListener('change', () => {
	endNum = Number(endNumEl.value);
});

stepEl.addEventListener('change', () => {
	step = Number(stepEl.value);
});

autoEl.addEventListener('click', () => {
	resultEl.innerHTML = '';
	counter = startNum;
	setInterval(() => {
		if (counter <= endNum) {
			setResult(counter);
			resultEl.insertAdjacentHTML('beforeend', `<li class="resultListItem">${result}</li>`);
			window.scrollTo(0, document.body.scrollHeight);
			counter += step;
		}
	}, 100);
});

function setResult(counter) {
	counter % fizzNum === 0 ? (counter % buzzNum === 0 ? (result = fizzBuzzText) : (result = fizzText)) : counter % buzzNum === 0 ? (result = buzzText) : (result = counter);
	return result;
}
