const button = document.querySelector('#hider')
const text = document.querySelector('#text')

button.addEventListener('click', () => {
	text.setAttribute('hidden', true)
})
