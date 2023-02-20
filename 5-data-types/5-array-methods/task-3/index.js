function filterRangeInPlace(arr, a, b) {
	arr.forEach((el, index) => {
		if (el < a || el > b) arr.splice(index, 1)
	})

	return arr
}

let arr = [5, 3, 8, 1]

filterRangeInPlace(arr, 1, 4)

alert(arr)
