let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250
}

function sumSalaries(salaries) {
	const salariesArr = Object.values(salaries)
	let sum = 0

	for (let salary of salariesArr) {
		sum += salary
	}

	return sum
}

alert(sumSalaries(salaries))
