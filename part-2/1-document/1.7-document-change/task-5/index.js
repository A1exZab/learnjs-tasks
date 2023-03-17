let data = {
	Рыбы: {
		форель: {},
		лосось: {}
	},

	Деревья: {
		Огромные: {
			секвойя: {},
			дуб: {}
		},
		Цветковые: {
			яблоня: {
				Сливолистная: {},
				Ягодная: {},
				Декоративная: {}
			},
			магнолия: {}
		}
	}
}

function createTree(container, obj) {
	container.append(createDom(obj))
}

function createDom(obj) {
	if (!Object.keys(obj).length) return

	const ul = document.createElement('ul')

	for (let key in obj) {
		const li = document.createElement('li')
		li.innerHTML = key

		const ulChild = createDom(obj[key])

		if (ulChild) {
			li.append(ulChild)
		}

		ul.append(li)
	}

	return ul
}

let container = document.querySelector('.container')
createTree(container, data)
