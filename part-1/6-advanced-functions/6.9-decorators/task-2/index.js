function f(x) {
	console.log(x)
}

function delay(func, ms) {
	return function () {
		setTimeout(() => {
			func.call(this, ...arguments)
		}, ms)
	}
}

let f1000 = delay(f, 1000)
let f1500 = delay(f, 2000)

f1000('test1')
f1500('test2')
