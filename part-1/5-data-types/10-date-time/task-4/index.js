function getDateAgo(date, days) {
	const newDateStamp = date - days * 24 * 60 * 60 * 1000

	return new Date(newDateStamp).getDate()
}

let date = new Date(2015, 0, 2)

alert(getDateAgo(date, 1))
alert(getDateAgo(date, 2))
alert(getDateAgo(date, 365))
