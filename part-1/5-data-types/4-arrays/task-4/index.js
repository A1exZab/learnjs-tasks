function sumInput() {
	let numbersArr = []
	while (true) {
		let value = prompt('Введите число:')

		if (value === null || value === '' || !isFinite(value)) break

		numbersArr.push(+value)
	}

	let sum = 0
	for (let i = 0; i < numbersArr.length; i++) {
		sum += numbersArr[i]
	}

	return sum
}

console.log(sumInput())
