const someObject = {}

function A() {
	return someObject
}

function B() {
	return someObject
}

let a = new A()
let b = new B()

alert(a === b)
