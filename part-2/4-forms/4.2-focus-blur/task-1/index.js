const view = document.querySelector('#view')
let textarea = null

view.addEventListener('click', () => {
	textarea = document.createElement('textarea')
	textarea.className = 'edit'
	textarea.value = view.innerHTML

	textarea.onkeydown = function (e) {
		if (e.key === 'Enter') {
			this.blur()
		}
	}

	textarea.onblur = () => {
		view.innerHTML = textarea.value
		textarea.replaceWith(view)
	}

	view.replaceWith(textarea)
	textarea.focus()
})
