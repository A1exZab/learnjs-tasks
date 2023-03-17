function getSecondsToTomorrow() {
	const currentDate = new Date()
	const secondsFromMidnigth =
		currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds()

	return 24 * 3600 - secondsFromMidnigth
}

alert(getSecondsToTomorrow())
