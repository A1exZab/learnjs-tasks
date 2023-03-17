function sayHi() {
	alert(this.name)
}

sayHi.test = 5

let bound = sayHi.bind({
	name: 'Вася'
}) // тут создается уже другой объект, без свойства test

alert(bound.test) // undefined
