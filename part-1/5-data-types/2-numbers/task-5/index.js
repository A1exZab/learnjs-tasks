function random(min, max) {
	const result = Math.random() * (max - min) + min
	return result.toFixed(10)
}

alert(random(3, 7))
alert(random(3, 7))
alert(random(3, 7))
