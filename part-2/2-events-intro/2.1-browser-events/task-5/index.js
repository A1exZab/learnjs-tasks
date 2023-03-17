const title = document.querySelector('.title')
const arrow = document.querySelector('.arrow')
const sweets = document.querySelector('.sweets')

title.addEventListener('click', () => {
	arrow.classList.toggle('rotate')
	sweets.toggleAttribute('hidden')
})
