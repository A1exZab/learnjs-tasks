const contents = document.querySelector('#contents')

contents.addEventListener('click', (e) => {
	const link = e.target.closest('a').getAttribute('href')

	const check = confirm(`Вы действительно хотите перейти по адресу ${link}?`)

	if (!check) {
		e.preventDefault()
	}
})
