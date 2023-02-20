function ucFirst(str) {
	if (!str) return str

	const result = str[0].toUpperCase() + str.slice(1)

	return result
}

alert(ucFirst('василий'))
