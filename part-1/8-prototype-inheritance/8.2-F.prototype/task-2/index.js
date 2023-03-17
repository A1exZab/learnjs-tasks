{
	function Animal(name) {
		this.name = name
	}

	let cat = new Animal('Jinx')
	let dog = new cat.constructor('Muffin')

	console.log(dog.name) // Muffin
}

{
	function Animal(name) {
		this.name = name
	}

	Animal.prototype = {}

	let cat = new Animal('Jinx')
	let dog = new cat.constructor('Muffin')

	console.log(dog.name) // undefined
}
