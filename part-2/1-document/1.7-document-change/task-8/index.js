function clock() {
	const date = new Date()

	let hours = date.getHours()
	if (hours < 10) hours = '0' + hours
	document.querySelector('.hours').textContent = hours

	let minutes = date.getMinutes()
	if (minutes < 10) minutes = '0' + minutes
	document.querySelector('.minutes').textContent = minutes

	let seconds = date.getSeconds()
	if (seconds < 10) seconds = '0' + seconds
	document.querySelector('.seconds').textContent = seconds
}

let timerId

function clockStart() {
	timerId = setInterval(clock, 1000)
	clock()
}

function clockStop() {
	clearInterval(timerId)
}

const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')

startBtn.addEventListener('click', () => clockStart())
stopBtn.addEventListener('click', () => clockStop())
