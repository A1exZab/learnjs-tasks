function makeUser() {
	return {
		name: 'John',
		ref: this
	}
}

let user = makeUser()

alert(user.ref.name) // Каким будет результат?

// В данном случае this соответствует объект, содержащий в себе makeUser().
// Этим объектом, без 'use strict' является глобальный объект Window
// По-умолчанию, window.name === '', поэтому результат - пустая строка
