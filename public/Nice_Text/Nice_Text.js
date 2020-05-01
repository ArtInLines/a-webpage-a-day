const niceText = document.getElementById('niceText');
const counter = document.getElementById('counter');
let textLength, wholeText, lastLetter, newString;

niceText.addEventListener('keyup', () => {
  textLength = niceText.value.length;
  wholeText = niceText.value.substring(0, textLength - 1);
  lastLetter = niceText.value.substr(textLength - 1, 1);
  wholeText.endsWith('6') ? (lastLetter = '9 ') : (lastLetter = '6');
  niceText.value = wholeText + lastLetter;
  if (niceText.value.length >= 3) {
    counter.innerText = `${Math.floor(niceText.value.length / 3)} 69s`;
  }
  if (counter.innerText == '69 69s') {
    EndScreen();
  }
});

function EndScreen() {
  document.querySelector('.content').innerHTML = `<div id="niceDiv">
  <p class="nice" id="nice">Nice square:</p>
  <p id="nice2" class="nice">69 69s</p>
  <div id="niceImgDiv"><img id="niceImg" onclick="gif()" src="assets/Nice_Text/69.png"></div>
  </div>`;
}

let gifArray = ['1', '2', '3', '4', '5', '6', '7', 'lesbian-1', 'lesbian-2', 'rough-1'];

function gif() {
  if (gifArray.length) {
    let img = document.getElementById('niceImg');
    let num = Math.floor(Math.random() * (gifArray.length - 1));
    img.src = `assets/Nice_Text/Nice_Gifs/${gifArray[num]}.gif`;
    gifArray.splice(num, 1);
  } else {
    location.reload();
  }
}
