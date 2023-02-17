function isEmpty(obj) {
	for (let key in obj) {
		return false
	}
	return true
}

const emptyObject = {}
const notEmptyObject = { name: 'John' }

alert(isEmpty(emptyObject))
alert(isEmpty(notEmptyObject))
