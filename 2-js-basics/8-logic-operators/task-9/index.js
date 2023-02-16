const login = prompt('Кто там?');

if (login === 'Админ') {
	const password = prompt('Пароль?');
	if (password === 'Я главный') {
		alert('Здравствуйте!');
	} else if (password === '' || password === null) {
		alert('Отменено');
	} else {
		alert('Неверынй пароль');
	}
} else if (login === '' || login === null) {
	alert('Отменено');
} else {
	alert('Я вас не знаю');
}

window.location.reload();
