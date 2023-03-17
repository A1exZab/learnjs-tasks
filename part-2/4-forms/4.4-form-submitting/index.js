function showModal() {
	const modalDiv = document.createElement('div')
	modalDiv.className = 'modal-div'
	document.body.style.overflowY = 'hidden'

	document.body.append(modalDiv)
}

function hideModal() {
	document.querySelector('.modal-div').remove()
	document.body.style.overflowY = ''
}

function showPrompt(text, callback) {
	showModal()

	const form = document.querySelector('#prompt-form')
	form.text.value = ''
	form.text.focus()

	const formContainer = document.querySelector('#prompt-form-container')
	formContainer.style.display = 'block'

	document.querySelector('#prompt-message').innerHTML = text

	function completeForm(value) {
		hideModal()
		formContainer.style.display = 'none'
		document.onkeydown = null
		callback(value)
	}

	form.addEventListener('submit', function (e) {
		e.preventDefault()

		const value = form.text.value
		if (value === '') return

		completeForm(value)
	})

	form.cancel.addEventListener('click', function () {
		completeForm(null)
	})

	document.addEventListener('keydown', function (e) {
		if (e.key == 'Escape') completeForm(null)
	})
}

document.querySelector('#show-form').addEventListener('click', () => {
	showPrompt('Введите что-нибудь<br>...умное :)', function (value) {
		alert('Вы ввели: ' + value)
	})
})
