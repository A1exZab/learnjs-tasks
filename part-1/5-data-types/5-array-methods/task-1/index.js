function camelize(str) {
	const splitStr = str.split('-')

	return (
		splitStr[0] +
		splitStr
			.splice(1)
			.map((el) => el[0].toUpperCase() + el.slice(1))
			.join('')
	)
}

console.log(camelize('background-color'))
console.log(camelize('list-style-image'))
console.log(camelize('-webkit-transition'))
