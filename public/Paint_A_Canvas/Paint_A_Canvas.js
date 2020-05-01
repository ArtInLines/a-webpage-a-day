// get color Btns
const colorBtn = document.querySelectorAll('.colorBtn');
const btnTransparent = document.getElementById('btnTransparent');
const btnRed = document.getElementById('btnRed');
const btnGreen = document.getElementById('btnGreen');
const btnBlue = document.getElementById('btnBlue');

const toggleCanvasBorders = document.getElementById('toggleCanvasBorders');
const canvasItems = document.querySelectorAll('.canvasItem');

toggleCanvasBorders.addEventListener('click', () => {
  canvasItems.forEach((element) => {
    element.classList.toggle('border');
  });
});

const colorInput = document.getElementById('colorInput');
const btnChosen = document.getElementById('btnChosen');

// set btnChosen to hex color of colorInput
colorInput.addEventListener('keyup', () => {
  // first letter has to be '#':
  if (colorInput.value.charAt(0) == '#') {
  } else {
    colorInput.value = `#${colorInput.value}`;
  }
  // if input is a valid hexcolor:
  if (colorInput.value.length == 7 || colorInput.value.length == 4) {
    btnChosen.style.backgroundColor = colorInput.value;
  }
  // if input is not a valid hexcolor
  else {
    btnChosen.style.backgroundColor = 'transparent';
  }
});

// variable activeColor
let activeColor;

// chose color
function choseColor(param) {
  // show active color
  colorBtn.forEach((element) => {
    element.classList.remove('active');
  });
  event.target.classList.add('active');
  // save chosen color as active
  if (param == 'hexcolor') {
    activeColor = event.target.style.backgroundColor;
  } else {
    activeColor = param;
  }
}

// Coloring() colors the clicked canvasItem with chosen color
function Coloring() {
  // color the canvas item
  event.target.style.backgroundColor = activeColor;
}
