function getLastDayOfMonth(year, month) {
	const date = new Date(year, month + 1, 0)

	return date.getDate()
}

alert(getLastDayOfMonth(2012, 0))
alert(getLastDayOfMonth(2012, 1))
alert(getLastDayOfMonth(2013, 1))
