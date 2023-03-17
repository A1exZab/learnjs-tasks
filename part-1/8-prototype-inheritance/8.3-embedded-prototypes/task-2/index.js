Function.prototype.defer = function (ms) {
	const func = this

	return function (...args) {
		setTimeout(() => func.apply(this, args), ms)
	}
}

function f(a, b) {
	console.log(a + b)
}

f.defer(2000)(1, 2)
