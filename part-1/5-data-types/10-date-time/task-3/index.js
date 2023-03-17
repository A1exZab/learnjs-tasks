function getLocalDate(date) {
	let dayNumber = date.getDay()

	if (dayNumber === 0) {
		dayNumber = 7
	}

	return dayNumber
}

let date = new Date(2012, 0, 3)
alert(getLocalDate(date))
