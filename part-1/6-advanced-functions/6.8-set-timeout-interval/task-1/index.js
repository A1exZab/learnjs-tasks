{
	function printNumbers(from, to) {
		let current = from

		let timer = setInterval(() => {
			console.log(current)
			if (current === to) clearInterval(timer)

			current++
		}, 1000)
	}
}

{
	function printNumbers(from, to) {
		let current = from
		;(function tick() {
			console.log(current)
			if (current < to) setTimeout(tick, 1000)

			current++
		})()
	}

	printNumbers(1, 10)
}
