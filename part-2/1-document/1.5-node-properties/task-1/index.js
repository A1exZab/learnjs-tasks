for (let li of document.querySelectorAll('li')) {
	const text = li.firstChild.data.trim()

	const count = li.querySelectorAll('li').length

	console.log('Текст: ' + text + ', потомки: ' + count)
}
