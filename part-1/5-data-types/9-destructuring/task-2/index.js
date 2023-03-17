let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250
}

function topSalary(salaries) {
	if (Object.entries(salaries).length === 0) return null

	let topSalary = 0
	let topSalaryOwner = ''

	Object.entries(salaries).forEach(([name, salary]) => {
		if (topSalary < salary) {
			topSalary = salary
			topSalaryOwner = name
		}
	})

	return topSalaryOwner
}

alert(topSalary(salaries))
