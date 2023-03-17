function getSecondsToday() {
	const currentDate = new Date()
	const secondsFromMidnigth =
		currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds()

	return secondsFromMidnigth
}

alert(getSecondsToday())
