let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

function isEmpty(obj) {
	for (let key in obj) {
		return false
	}
	return true
}

function sumSalaries(obj) {
	let sum = 0

	if (isEmpty(obj)) {
		return sum
	} else {
		for (let key in obj) {
			sum += obj[key]
		}
		return sum
	}
}

alert(sumSalaries(salaries))
