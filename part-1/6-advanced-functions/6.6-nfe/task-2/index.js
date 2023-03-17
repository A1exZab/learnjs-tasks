function sum(a) {
	let currentSum = a

	function nextSum(b) {
		currentSum += b
		return nextSum
	}

	nextSum.valueOf = function () {
		return currentSum
	}

	return nextSum
}

console.log(+sum(1)(2))
console.log(+sum(5)(-1)(2))
console.log(+sum(6)(-1)(-2)(-3))
console.log(+sum(0)(1)(2)(3)(4)(5))
