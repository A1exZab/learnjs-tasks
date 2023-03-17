let phrase = 'Hello'

if (true) {
	let user = 'John'

	function sayHi() {
		alert(`${phrase}, ${user}`)
	}
}

sayHi()

// Результат вызова: ошибка, т.к. функция объявлена внутри блока if и к ней нет доступа из внешнего окружения
