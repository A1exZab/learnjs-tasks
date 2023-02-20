function Calculator() {
	this.methods = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b
	}

	this.calculate = function (str) {
		const arr = str.split(' ')
		const a = +arr[0]
		const operator = arr[1]
		const b = +arr[2]

		if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
			return NaN
		}

		return this.methods[operator](a, b)
	}

	this.addMethod = function (operation, rule) {
		this.methods[operation] = rule
	}
}

const powerCalc = new Calculator()
powerCalc.addMethod('*', (a, b) => a * b)
powerCalc.addMethod('/', (a, b) => a / b)
powerCalc.addMethod('**', (a, b) => a ** b)

const sum = powerCalc.calculate('2 + 0')
alert(sum)
const dif = powerCalc.calculate('6 - 2')
alert(dif)
const mult = powerCalc.calculate('2 * 4')
alert(mult)
const div = powerCalc.calculate('32 / 2')
alert(div)
const pow = powerCalc.calculate('2 ** 5')
alert(pow)
