const calculator = {
	read() {
		this.a = +prompt('Введите значение a')
		this.b = +prompt('Введите значение b')
	},

	sum() {
		return this.a + this.b
	},

	mul() {
		return this.a * this.b
	}
}

calculator.read()
alert(calculator.sum())
alert(calculator.mul())
