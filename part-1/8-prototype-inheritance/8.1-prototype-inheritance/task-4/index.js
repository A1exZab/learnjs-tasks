let hamster = {
	stomach: [],

	eat(food) {
		this.stomach.push(food)
	}
}

let speedy = {
	stomach: [],
	__proto__: hamster
}

let lazy = {
	stomach: [],
	__proto__: hamster
}

// Этот хомяк нашёл еду
speedy.eat('apple')
alert(speedy.stomach) // apple

alert(lazy.stomach) // apple

// У хомяков нет собственного свойства stomach, поэтому apple добавляется в stomach общего прототипа hamster
