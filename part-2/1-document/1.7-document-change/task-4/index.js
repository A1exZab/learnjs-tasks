const ul = document.createElement('ul')
document.body.append(ul)

while (true) {
	let text = prompt('Введите содержимое пункта списка').trim()

	if (!text) {
		break
	}

	const li = document.createElement('li')
	li.textContent = text
	ul.append(li)
}
