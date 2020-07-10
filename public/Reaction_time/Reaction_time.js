window.addEventListener('load', function () {
	setTimeout(function () {
		document.body.style.backgroundColor = 'blue';
		let start = Date.now();

		document.body.addEventListener(
			'click',
			function () {
				let end = Date.now();
				alert('Your reaction took ' + (end - start) / 1000 + ' seconds');
				document.location.reload();
			},
			false,
		);
	}, 2500 + Math.random() * 5000);
});
