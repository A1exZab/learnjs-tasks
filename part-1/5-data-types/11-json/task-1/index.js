let user = {
	name: 'Василий Иванович',
	age: 35
}

const userCopy = JSON.parse(JSON.stringify(user))

console.log(userCopy)
