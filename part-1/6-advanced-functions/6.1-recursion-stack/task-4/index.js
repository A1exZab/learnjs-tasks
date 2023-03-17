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
	function printList(list) {
		let current = list

		for (current; current !== null; current = current.next) {
			console.log(current.value)
		}
	}

	printList(list)
}

{
	function printList(list) {
		console.log(list.value)

		if (list.next) {
			printList(list.next)
		}
	}

	printList(list)
}
