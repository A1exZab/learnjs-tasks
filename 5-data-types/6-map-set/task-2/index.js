let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

function aclean(arr) {
	const obj = {}

	arr.forEach((el, index) => {
		const sorted = el.toLowerCase().split('').sort().join('')
		obj[sorted] = arr[index]
	})

	return Object.values(obj)
}

alert(aclean(arr))
