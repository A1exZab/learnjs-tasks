const itemWidth = 130
const itemsCount = 3

const list = carousel.querySelector('ul')
const listItems = carousel.querySelectorAll('li')
const nextBtn = carousel.querySelector('.next')
const prevBtn = carousel.querySelector('.prev')

let position = 0

nextBtn.addEventListener('click', handleNextArrowClick)
prevBtn.addEventListener('click', handlePrevArrowClick)

function handleNextArrowClick() {
	position -= itemWidth * itemsCount

	const a = -itemWidth * (listItems.length - itemsCount)

	position = Math.max(position, -itemWidth * (listItems.length - itemsCount))
	list.style.marginLeft = position + 'px'
}

function handlePrevArrowClick() {
	position += itemWidth * itemsCount

	position = Math.min(position, 0)

	list.style.marginLeft = position + 'px'
}
