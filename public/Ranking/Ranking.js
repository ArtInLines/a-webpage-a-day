import { charArray } from 'assets/Ranking/charArray.js';
import { arrayHouses } from 'assets/Ranking/arrayHouses.js';
import { arrayBooks } from 'assets/Ranking/arrayBooks.js';

let arrayPOVChars = [];
charArray.forEach((element) => {
	/*   if (element.important  === true) {
    arrayImportantChars.push(element)
  } */
	if (element.povInBook !== 0) {
		arrayPOVChars.push(element);
	}
});
let arrayMajorHouses = [];
arrayHouses.forEach((element) => {
	if (element.important === true) {
		arrayMajorHouses.push(element);
	}
});

// DOM Elements
let title = document.getElementById('title');
let char1El = document.getElementById('char1');
let char2El = document.getElementById('char2');
let char1NameEl = document.getElementById('char1Name');
let char2NameEl = document.getElementById('char2Name');
let char1ImgEl = document.getElementById('char1Img');
let char2ImgEl = document.getElementById('char2Img');
let btn = document.getElementById('btn');

// counter variable
let cardOneCounter = 0;
let cardTwoCounter = 1;

// variable for array
let collection = charArray;

// change depending on select option
let selectValue = select.options[select.selectedIndex].value;
select.addEventListener('change', () => {
	changeSelectValue();
});

function changeSelectValue() {
	selectValue = select.options[select.selectedIndex].value;
	switch (selectValue) {
		case 'chars':
			collection = charArray;
			title.innerHTML = 'Select your favorite <code>Character</code>';
			p.innerHTML = `You changed to rank only the <code> id="loser"important Characters</code>`;
			break;
		case 'povChars':
			collection = arrayPOVChars;
			title.innerHTML = 'Select your favorite <code>POV-Character</code>';
			p.innerHTML = `You changed to rank all <code id="loser">POV-Characters</code>`;
			break;
		case 'books':
			collection = arrayBooks;
			title.innerHTML = 'Select your favorite <code>Book</code> in the series';
			p.innerHTML = `You changed to rank all <code id="loser">Books</code>`;
			break;
		case 'importantHouses':
			collection = arrayMajorHouses;
			title.innerHTML = 'Select your favorite <code>House</code> of the very important houses in the series';
			p.innerHTML = `You changed to rank all <code id="loser">important Houses</code>`;
			break;
		case 'houses':
			collection = arrayHouses;
			title.innerHTML = 'Select your favorite <code>House</code>';
			p.innerHTML = `You changed to rank <code id="loser">Houses</code>`;
			break;
		/* case 'scenes':
      collection = arraysScenes;
      break; */
	}
	cardOneCounter = 0;
	cardTwoCounter = 1;
	displayChars(collection[cardOneCounter], collection[cardTwoCounter]);
}

// displays the first two characters on load
window.addEventListener('load', () => {
	displayChars(collection[cardOneCounter], collection[cardTwoCounter]);
});

// On click of first character
char1El.addEventListener('click', () => {
	countUp(collection[cardOneCounter]);
	p.innerHTML = `You chose <code id="winner">${char1El.innerText}</code> over <code id="loser">${char2El.innerText}</code>`;
	if (cardTwoCounter == collection.length) {
		cardOneCounter++;
		cardTwoCounter = cardOneCounter + 1;
	}
	if (collection[cardOneCounter] == collection[collection.length - 1]) {
		return sortResult(collection);
	}
	displayChars(collection[cardOneCounter], collection[cardTwoCounter]);
});

// On click of second character
char2El.addEventListener('click', () => {
	countUp(collection[cardTwoCounter]);
	p.innerHTML = `You chose <code id="winner">${char2El.innerText}</code> over <code id="loser">${char1El.innerText}</code>`;
	if (cardTwoCounter == collection.length) {
		cardOneCounter++;
		cardTwoCounter = cardOneCounter + 1;
	}
	if (collection[cardOneCounter] == collection[collection.length - 1]) {
		return sortResult(collection);
	}
	displayChars(collection[cardOneCounter], collection[cardTwoCounter]);
});

// on btn click
btn.addEventListener('click', () => {
	cardTwoCounter++;
	p.innerText = `You couldn't decide`;
	if (cardTwoCounter == collection.length) {
		cardOneCounter++;
		cardTwoCounter = cardOneCounter + 1;
	}
	if (collection[cardOneCounter] == collection[collection.length - 1]) {
		return sortResult(collection);
	}
	displayChars(collection[cardOneCounter], collection[cardTwoCounter]);
});

// Counting up on click
function countUp(obj) {
	obj.counter++;
	cardTwoCounter++;
}

// Display the two chararacters
function displayChars(char1, char2) {
	char1NameEl.innerText = char1.name;
	char2NameEl.innerText = char2.name;
	if (Array.isArray(char1.img)) {
		char1ImgEl.style.backgroundImage = `url(assets/Ranking/RankingImgs/${char1.img[Math.floor(Math.random() * (char1.img.length - 1))]}.jpg)`;
		char2ImgEl.style.backgroundImage = `url(assets/Ranking/RankingImgs/${char2.img[Math.floor(Math.random() * (char2.img.length - 1))]}.jpg)`;
	} else {
		char1ImgEl.style.backgroundImage = `url(assets/Ranking/RankingImgs/${char1.img})`;
		char2ImgEl.style.backgroundImage = `url(assets/Ranking/RankingImgs/${char2.img})`;
	}
}

let shownResultArray = [];

// Sort chars after their counter property
function sortResult(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		for (let j = 1; j <= i; j++) {
			if (arr[j - 1].counter < arr[j].counter) {
				let temp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = temp;
			}
		}
	}

	// Display the first ten ranked items
	select.style.display = 'none';
	content.innerHTML = `<ol id="endList"><ol>`;
	document
		.getElementById('endList')
		.insertAdjacentHTML('beforebegin', `<div id="endBtns"><button class="btn" onclick="location.reload()">Start again</button><button class=btn id="saveBtn">Save your results</button></div>`);
	document.getElementById('endList').insertAdjacentHTML(
		'afterend',
		`<div id="showMoreBtnsContainer"><button class="showMoreBtn" id="showMoreBtn">Show more Characters</button>
    <button class="showMoreBtn" id="showAllBtn">Show all characters</button></div>`,
	);
	showResult(arr, 0, 10, arr.length);
}

document.addEventListener('click', (e) => {
	if (e.target.id === 'showMoreBtn') {
		showResult(collection, shownResultArray.length, shownResultArray.length + 10, collection.length);
	} else if (e.target.id === 'showAllBtn') {
		showResult(collection, shownResultArray.length, collection.length, collection.length);
	}
});

function showResult(arr, num1, num2, len) {
	for (let newIndex = num1; newIndex < num2 && newIndex < len; newIndex++) {
		let element = document.createElement('li');
		element.innerText = `${arr[newIndex].name} 
              (Chosen ${arr[newIndex].counter} ${arr[newIndex].counter == 1 ? 'time' : 'times'})`;
		if (newIndex < 3) {
			newIndex < 1 ? element.classList.add('gold') : newIndex < 2 ? element.classList.add('silver') : element.classList.add('bronze');
		}
		document.getElementById('endList').insertAdjacentElement('beforeend', element);
		shownResultArray.push(newIndex);
		if (len == shownResultArray.length) {
			document.getElementById('showMoreBtnsContainer').style.display = 'none';
		}
	}
}
