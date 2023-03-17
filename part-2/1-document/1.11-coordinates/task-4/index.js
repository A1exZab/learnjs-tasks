function getCoords(elem) {
	let box = elem.getBoundingClientRect()

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	}
}

function positionAt(anchor, position, elem) {
	let anchorCoords = getCoords(anchor)

	switch (position) {
		case 'top-out':
			elem.style.left = anchorCoords.left + 'px'
			elem.style.top = anchorCoords.top - elem.offsetHeight + 'px'
			break

		case 'right-out':
			elem.style.left = anchorCoords.left + anchor.offsetWidth + 'px'
			elem.style.top = anchorCoords.top + 'px'
			break

		case 'bottom-out':
			elem.style.left = anchorCoords.left + 'px'
			elem.style.top = anchorCoords.top + anchor.offsetHeight + 'px'
			break

		case 'top-in':
			elem.style.left = anchorCoords.left + 'px'
			elem.style.top = anchorCoords.top + 'px'
			break

		case 'right-in':
			elem.style.top = anchorCoords.top + 'px'
			elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + 'px'
			break

		case 'bottom-in':
			elem.style.left = anchorCoords.left + 'px'
			elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + 'px'
			break
	}
}

function showNote(anchor, position, html) {
	const note = document.createElement('div')
	note.className = 'note'
	note.textContent = html
	document.body.append(note)

	positionAt(anchor, position, note)
}

const blockquote = document.querySelector('blockquote')

showNote(blockquote, 'top-out', 'top-out')
showNote(blockquote, 'right-out', 'right-out')
showNote(blockquote, 'bottom-out', 'bottom-out')
showNote(blockquote, 'top-in', 'top-in')
showNote(blockquote, 'right-in', 'right-in')
showNote(blockquote, 'bottom-in', 'bottom-in')
