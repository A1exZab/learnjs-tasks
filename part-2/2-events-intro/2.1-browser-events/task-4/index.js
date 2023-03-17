const field = document.querySelector('#field')
const ball = document.querySelector('#ball')

field.addEventListener('click', (event) => {
	const ballCoords = {
		left: event.clientX - field.offsetLeft - field.clientLeft - ball.width / 2,
		top: event.clientY - field.offsetTop - field.clientTop - ball.height / 2
	}

	if (ballCoords.left < 0) {
		ballCoords.left = 0
	}

	if (ballCoords.left + ball.clientWidth > field.clientWidth) {
		ballCoords.left = field.clientWidth - ball.clientWidth
	}

	if (ballCoords.top + ball.clientHeight > field.clientHeight) {
		ballCoords.top = field.clientHeight - ball.clientHeight
	}

	if (ballCoords.top < 0) {
		ballCoords.top = 0
	}

	ball.style.left = ballCoords.left + 'px'
	ball.style.top = ballCoords.top + 'px'
	ball.classList.toggle('rotate')
})
