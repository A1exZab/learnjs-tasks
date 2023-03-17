const num = +prompt('Введите число')

if (num > 0) {
	alert('1')
} else if (num < 0) {
	alert('-1')
} else if (num === 0) {
	alert('0')
} else {
	alert('Введенные данные не являются числом!')
}
