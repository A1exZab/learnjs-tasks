const user = {
	name: 'John'
}

user.name = 'Pete'

// Содержимое объекта, объявленного через const можно изменить.

// Нельзя переопределить сам объект
user = {} // такое работать не будет
