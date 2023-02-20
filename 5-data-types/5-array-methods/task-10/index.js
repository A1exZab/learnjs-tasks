let arr = [1, 2, 3]
// 1й вариант решения
function shuffle1(arr) {
	const arrCopy = [...arr]
	const resArr = []

	do {
		const rand = Math.floor(Math.random() * arrCopy.length)
		resArr.push(arrCopy[rand])
		arrCopy.splice(rand, 1)
	} while (arrCopy.length > 0)

	return resArr
}

console.log(shuffle1(arr))

// 2й вариант решения
function shuffle2(arr) {
	for (i = arr.length - 1; i > 0; i--) {
		const current = arr[i]
		const rand = Math.floor(Math.random() * (i + 1))

		arr[i] = arr[rand]
		arr[rand] = current
	}

	return arr
}

console.log(shuffle2(arr))
