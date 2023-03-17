const lis = document.getElementsByTagName('li')

for (let li of lis) {
	const count = li.querySelectorAll('li').length

	if (!count) continue

	li.firstChild.textContent += ' [' + count + ']'
}
