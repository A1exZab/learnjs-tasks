let animal = {
	eat() {
		this.full = true
	}
}

let rabbit = {
	__proto__: animal
}

rabbit.eat() // в данном случае при вызове eat у this=rabbit, так что rabbit получит свойство full
