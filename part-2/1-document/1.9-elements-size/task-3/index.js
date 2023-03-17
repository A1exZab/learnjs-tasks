const field = document.querySelector('#field')
const ball = document.querySelector('#ball')

const middleX = (field.clientWidth - ball.clientWidth) / 2

const middleY = (field.clientHeight - ball.clientHeight) / 2

ball.style.left = middleX + 'px'
ball.style.top = middleY + 'px'
