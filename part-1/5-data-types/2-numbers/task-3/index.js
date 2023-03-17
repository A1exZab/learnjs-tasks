function readNumber() {
	let value

	do {
		value = prompt('Введите число:')
	} while (!isFinite(value))

	if (value === null || value === '') {
		return null
	}

	return +value
}

alert(`Вы ввели: ${readNumber()}`)
