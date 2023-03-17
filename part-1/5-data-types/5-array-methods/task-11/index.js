let vasya = { name: 'Вася', age: 25 }
let petya = { name: 'Петя', age: 30 }
let masha = { name: 'Маша', age: 29 }

let arr = [vasya, petya, masha]

function getAverageAge(arr) {
	const averageAge = arr.reduce((sum, user) => (sum += user.age), 0) / arr.length

	return averageAge
}

console.log(getAverageAge(arr))
