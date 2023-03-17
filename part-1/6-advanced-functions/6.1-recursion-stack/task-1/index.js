// 1. Цикл

{
	function sumTo(n) {
		let sum = 0

		for (let i = 0; i <= n; i++) {
			sum += i
		}

		return sum
	}

	console.log(sumTo(100))
}

// 2. Рекурсия

{
	function sumTo(n) {
		if (n === 1) return n

		return n + sumTo(n - 1)
	}

	console.log(sumTo(100))
}

// 3. Арифметическая прогрессия

{
	function sumTo(n) {
		return ((1 + n) * n) / 2
	}

	console.log(sumTo(100))
}

// Самый быстрый вариант решения через арифметическую прогрессию, так как в данном случае используется наименьшее количество операций

// При рекурсивном расчете sumTo(100000) будет ошибка, так как стек переполнится
