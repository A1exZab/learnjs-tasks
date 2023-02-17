const userAnswer = prompt('Какое официальное название JavaScript?')
const correctAnswer = 'ECMAScript'

if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
	alert('Верно!')
} else {
	alert(`Не знаете?\n${correctAnswer}!`)
}
