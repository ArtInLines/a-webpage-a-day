const content = document.querySelector('.content');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
});

ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(200, 20, 150, 100);

ctx.lineWidth = 5;
ctx.strokeStyle = 'yellow';
ctx.strokeRect(110, 30, 150, 80);

ctx.clearRect(25, 25, 140, 90);
