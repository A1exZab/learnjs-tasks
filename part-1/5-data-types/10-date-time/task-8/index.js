function formatDate(date) {
	const diff = new Date() - date
	const diffInSeconds = Math.floor(diff / 1000)
	const diffInMinutes = Math.floor(diff / (60 * 1000))

	if (diffInSeconds < 1) return 'Прямо сейчас'
	if (diffInSeconds < 60) return `${diffInSeconds} секунд назад`
	if (diffInMinutes < 60) return `${diffInMinutes} минут назад`

	function formatTimeMeasure(timeMeasure) {
		return timeMeasure < 10 ? (timeMeasure = '0' + timeMeasure) : timeMeasure
	}

	let day = date.getDate()
	day = formatTimeMeasure(day)

	let month = date.getMonth() + 1
	month = formatTimeMeasure(month)

	let year = date.getFullYear()
	year = year.toString().slice(2)

	let hours = date.getHours()
	hours = formatTimeMeasure(hours)

	let minutes = date.getMinutes()
	minutes = formatTimeMeasure(minutes)

	return `${day}.${month}.${year} ${hours}:${minutes}`
}

alert(formatDate(new Date(new Date() - 1)))
alert(formatDate(new Date(new Date() - 37 * 1000)))
alert(formatDate(new Date(new Date() - 5 * 60 * 1000)))
alert(formatDate(new Date(new Date() - 86400 * 1000)))
