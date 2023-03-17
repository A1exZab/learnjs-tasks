const gallery = document.querySelector('#thumbs')

gallery.addEventListener('click', (e) => {
	if (e.target.closest('a')) e.preventDefault()

	const href = e.target.closest('a').getAttribute('href')
	console.log(href)

	const largeImg = document.querySelector('#largeImg')

	largeImg.setAttribute('src', href)
})
