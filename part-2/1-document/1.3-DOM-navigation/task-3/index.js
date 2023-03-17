const table = document.body.firstElementChild

for (let i = 0; i < table.rows.length; i++) {
	const row = table.rows[i]
	row.cells[i].style.background = 'red'
}
