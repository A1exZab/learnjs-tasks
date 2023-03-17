let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
}

{
	function printReversedList(list) {
		let arr = []
		let current = list

		for (current; current !== null; current = current.next) {
			arr.push(current.value)
		}

		for (i = arr.length - 1; i >= 0; i--) {
			console.log(arr[i])
		}
	}

	printReversedList(list)
}

{
	function printReversedList(list) {
		if (list.next) {
			printReversedList(list.next)
		}

		console.log(list.value)
	}

	printReversedList(list)
}
