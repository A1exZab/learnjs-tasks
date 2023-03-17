const tree = document.querySelector('#tree')
const lis = tree.querySelectorAll('li')

for (let li of lis) {
	let span = document.createElement('span')
	li.prepend(span)
	span.append(span.nextSibling)
}

tree.addEventListener('click', (e) => {
	if (e.target.tagName != 'SPAN') {
		return
	}

	const childrenToHide = e.target.parentNode.querySelector('ul')

	if (!childrenToHide) return

	childrenToHide.hidden = !childrenToHide.hidden
})
