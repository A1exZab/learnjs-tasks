let table = document.getElementById('bagua-table')

let tdToEdit

table.addEventListener('click', function (e) {
	let target = e.target.closest('.cancel,.ok,td')

	if (!table.contains(target)) return

	if (target.className === 'cancel') {
		finishEditing(tdToEdit.elem, false)
	} else if (target.className == 'ok') {
		finishEditing(tdToEdit.elem, true)
	} else if (target.tagName == 'TD') {
		if (tdToEdit) return

		startEditing(target)
	}
})

function startEditing(td) {
	tdToEdit = {
		elem: td,
		data: td.innerHTML
	}

	td.classList.add('td-edit')

	const textArea = document.createElement('textarea')

	textArea.style.width = td.clientWidth + 'px'
	textArea.style.height = td.clientHeight + 'px'
	textArea.value = td.innerHTML

	td.innerHTML = ''
	td.append(textArea)
	textArea.focus()

	td.insertAdjacentHTML(
		'beforeEnd',
		'<div class="edit-buttons"><button class="ok">Подтвердить</button><button class="cancel">Отмена</button></div>'
	)
}

function finishEditing(td, confirm) {
	if (confirm) {
		td.innerHTML = td.firstChild.value
	} else {
		td.innerHTML = tdToEdit.data
	}
	td.classList.remove('td-edit')
	tdToEdit = null
}
