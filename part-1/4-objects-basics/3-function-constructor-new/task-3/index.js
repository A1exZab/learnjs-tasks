function Accumulator(startingValue) {
	this.value = startingValue

	this.read = function () {
		const add = +prompt('Введите добавочное значение')
		this.value += add
	}
}

const accumulator = new Accumulator(1)
accumulator.read()
accumulator.read()
alert(accumulator.value)
