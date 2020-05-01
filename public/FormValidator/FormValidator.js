const btn = document.querySelector('.btn');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const passwordAgainInput = document.getElementById('password-again');
const emailInput = document.getElementById('email');
const birthdateInput = document.getElementById('birthday');

let userData = {
	name: {
		value: '',
		valid: false,
	},
	password: {
		value: '',
		valid: false,
	},
	email: {
		value: '',
		valid: false,
	},
	gender: {
		value: '',
		valid: false,
	},
	birthdate: Date.now(),
	_birthdateValid: false,
	age: 0,
};

btn.addEventListener('click', btnClick);

function btnClick() {
	getName();
	getPassword();
	getEmail();
	/* 	
	getGender()
	getBirthdate();
	getAge();
	*/
	const { name, password, email, birthdate, age } = userData;
	const data = {
		name: name.value,
		password: password.value,
		email: email.value,
	};
	if (name.valid == true && password.valid == true && email.valid == true) newPage(data);
}

function invalidInput(element) {
	element.classList.add('false');
	element.classList.remove('valid');
	element.previousElementSibling.style.display = 'block';
}

function validInput(element, object) {
	element.classList.add('valid');
	element.classList.remove('false');
	if (object) {
		object.value = element.value;
		object.valid = true;
	}
}

//
nameInput.addEventListener('change', () => {
	getName();
});
passwordInput.addEventListener('change', () => {
	getPassword();
});
passwordAgainInput.addEventListener('change', () => {
	getPassword();
});
emailInput.addEventListener('change', () => {
	getEmail();
});
//

const getName = () => {
	if (nameInput.value == '') {
		invalidInput(nameInput);
	} else {
		validInput(nameInput, userData.name);
	}
};

const getPassword = () => {
	const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!a-z|A-Z|0-9])(?=.{8,})/;
	if (passwordInput.value == '') {
		console.log('passwordInput.value == ""');
		invalidInput(passwordInput);
		if (passwordAgainInput.value == '') invalidInput(passwordAgainInput) && console.log("passwordAgainInput.value == ''");
	} else if (passwordInput.value.length < 8) {
		invalidInput(passwordInput);
		invalidInput(passwordAgainInput);
		console.log('passwordInput.value.length < 8');
	} else if (passwordInput.value != passwordAgainInput.value) {
		invalidInput(passwordAgainInput);
		console.log('passwordInput.value != passwordAgainInput.value');
	} else if (passwordRegEx.test(passwordInput.value) == false) {
		invalidInput(passwordInput);
		console.log("Password doesn't equal the conditions");
	} else {
		console.log('valid');
		validInput(passwordInput, userData.password);
		validInput(passwordAgainInput);
	}
};

const getEmail = () => {
	const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (emailRegEx.test(emailInput.value)) {
		validInput(emailInput, userData.email);
	} else {
		invalidInput(emailInput);
	}
};

const passwordEye = document.getElementById('passwordEye');
const passwordAgainEye = document.getElementById('passwordAgainEye');

passwordEye.addEventListener('click', () => {
	changePasswordVisibility(passwordInput, passwordEye);
});
passwordAgainEye.addEventListener('click', () => {
	changePasswordVisibility(passwordAgainInput, passwordAgainEye);
});

function changePasswordVisibility(element, img) {
	if (element.type === 'password') {
		element.type = 'text';
		img.src = '/assets/FormValidator/showPassword.jpg';
		img.alt = 'Hide Password';
	} else {
		element.type = 'password';
		img.src = '/assets/FormValidator/hidePassword.jpg';
		img.alt = 'Show Password';
	}
}

const infoImg = document.querySelector('.infoImg');
const infoDiv = document.getElementById('infoDiv');
infoImg.addEventListener('mouseover', () => {
	infoDiv.style.display = 'block';
});
infoImg.addEventListener('mouseout', () => {
	infoDiv.style.display = 'none';
});
infoDiv.addEventListener('mouseover', () => {
	infoDiv.style.display = 'block';
});
infoDiv.addEventListener('mouseout', () => {
	infoDiv.style.display = 'none';
});

//			//
//			//
// New Page //
//			//
//			//

const newPage = (data) => {
	document.getElementById('form').style.display = 'none';
	document.querySelector('.content').insertAdjacentHTML(
		'beforeend',
		`<div class="npContainer">
			<h2 class="npTitle">Hello ${data.name}</h2>
			<ul class="npInfo">
				<li>Your email address is '${data.email}'</li>
				<li>You chose the dumb password ‘${data.password}‘</li>
				${data.birthdate ? `<li>You have been born ${data.birthdate} years and ${data.birthdate} days ago</li>` : ''}
			</div>
		</div>`,
		// TODO: Add calculation of birtdate years | days
	);
};
