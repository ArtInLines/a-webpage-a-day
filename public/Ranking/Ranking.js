let charCollection = [
  {
    name: 'Eddard Stark',
    img: 'Eddard_Stark.jpg',
    counter: 0,
  },
  {
    name: 'Catelyn Tully',
    img: 'Catelyn_Tully.jpg',
    counter: 0,
  },
  {
    name: 'Jon Snow',
    img: 'Jon_Snow.jpg',
    counter: 0,
  },
  {
    name: 'Tyrion Lannister',
    img: 'Tyrion_Lannister.jpg',
    counter: 0,
  },
  {
    name: 'Robert Baratheon',
    img: 'Robert_Baratheon.jpeg',
    counter: 0,
  },
  {
    name: 'Robb Stark',
    img: 'Robb_Stark.jpg',
    counter: 0,
  },
  {
    name: 'Sansa Stark',
    img: 'Sansa_Stark.jpg',
    counter: 0,
  },
  {
    name: 'Arya Stark',
    img: 'Arya_Stark.jpg',
    counter: 0,
  },
  {
    name: 'Rickon Stark',
    img: 'Rickon_Stark.jpg',
    counter: 0,
  },
  {
    name: 'Jamie Lannister',
    img: 'Jamie_Lannister.jpg',
    counter: 0,
  },
  {
    name: 'Tywin Lannister',
    img: 'Tywin_Lannister.jpg',
    counter: 0,
  },
];

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
let collection = charCollection;

// displays the first two characters on load
window.addEventListener('load', () => {
  displayChars(collection[cardOneCounter], collection[cardTwoCounter]);
});

// On click of first character
char1El.addEventListener('click', () => {
  countUp(collection[cardOneCounter]);
  if (cardTwoCounter == collection.length) {
    cardOneCounter++;
    cardTwoCounter = cardOneCounter + 1;
  }
  if (collection[cardOneCounter] == collection[collection.length - 1]) {
    sortResult(collection);
  } else {
    displayChars(collection[cardOneCounter], collection[cardTwoCounter]);
  }
});

// On click of second character
char2El.addEventListener('click', () => {
  countUp(collection[cardTwoCounter]);
  if (cardTwoCounter == collection.length) {
    cardOneCounter++;
    cardTwoCounter = cardOneCounter + 1;
  }
  if (collection[cardOneCounter] == collection[collection.length - 1]) {
    sortResult(collection);
  } else {
    displayChars(collection[cardOneCounter], collection[cardTwoCounter]);
  }
});

// on btn click
btn.addEventListener('click', () => {
  cardTwoCounter++;
  if (cardTwoCounter == collection.length) {
    cardOneCounter++;
    cardTwoCounter = cardOneCounter + 1;
  }
  if (collection[cardOneCounter] == collection[collection.length - 1]) {
    sortResult(collection);
  } else {
    displayChars(collection[cardOneCounter], collection[cardTwoCounter]);
  }
});

// Counting up on click
function countUp(obj) {
  obj.counter++;
  cardTwoCounter++;
}

// Display the two chararacters
function displayChars(char1, char2) {
  char1NameEl.innerText = char1.name;
  char1ImgEl.style.backgroundImage = `url(assets/Ranking/RankingImgs/${char1.img})`;
  char2NameEl.innerText = char2.name;
  char2ImgEl.style.backgroundImage = `url(assets/Ranking/RankingImgs/${char2.img})`;
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
  let content = document.querySelector('.content');
  content.innerHTML = `<ol id="endList"><ol>`;
  showResult(arr, 0, 10, arr.length);
  document.getElementById('endList').insertAdjacentHTML(
    'afterend',
    `<div id="showMoreBtnsContainer"><button class="showMoreBtn" onclick="showResult(collection, shownResultArray.length, shownResultArray.length + 10, collection.length)">Show more Characters</button>
  <button class="showMoreBtn" onclick="showResult(collection, shownResultArray.length, collection.length, collection.length)">Show all characters</button></div>`
  );
}

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
