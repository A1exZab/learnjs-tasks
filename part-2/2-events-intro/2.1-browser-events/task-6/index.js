const removeBtns = document.querySelectorAll('.remove-button')

for (removeBtn of removeBtns) {
	removeBtn.addEventListener('click', (event) => {
		event.target.closest('.pane').remove()
	})
}
