function fib(n) {
	let prev = 1
	let current = 1

	for (let i = 3; i <= n; i++) {
		let next = prev + current
		prev = current
		current = next
	}

	return current
}

console.log(fib(77))
