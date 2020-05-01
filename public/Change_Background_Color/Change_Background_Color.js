'use strict;';

document.getElementById('changeBackgroundColorBtn').addEventListener('click', () => {
	let randomHexNum = `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
	while (document.body.style.backgroundColor == randomHexNum) {
		randomHexNum = `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
	}
	document.body.style.backgroundColor = randomHexNum;
	document.getElementById('changeBackgroundColorBtn').style.color = randomHexNum;
	document.getElementById('backgroundColor').innerText = randomHexNum;
});
