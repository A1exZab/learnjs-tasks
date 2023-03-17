function createCalendar(elem, year, month) {
	const realMonth = month - 1
	const date = new Date(year, realMonth)

	let table =
		'<table><tr><th>Пн</th><th>Вт</th><th>Cр</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr><tr>'

	for (let i = 0; i < getWeekDay(date); i++) {
		table += '<td></td>'
	}

	while (date.getMonth() === realMonth) {
		table += '<td>' + date.getDate() + '</td>'

		if (getWeekDay(date) % 7 === 6) {
			table += '</tr><tr>'
		}

		date.setDate(date.getDate() + 1)
	}

	if (getWeekDay(date) != 0) {
		for (let i = getWeekDay(date); i < 7; i++) {
			table += '<td></td>'
		}
	}

	table += '</tr></table>'

	elem.innerHTML = table
}

function getWeekDay(date) {
	let day = date.getDay()
	if (day === 0) day = 7
	return day - 1
}

createCalendar(calendar, 2023, 3)
