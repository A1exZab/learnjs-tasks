const table = document.querySelector('table')

const rowsArr = [...table.rows].slice(1)

const sortedRows = rowsArr.sort((rowA, rowB) => {
	const a = rowA.cells[0].textContent
	const b = rowB.cells[0].textContent

	return a > b ? 1 : -1
})

table.tBodies[0].append(...sortedRows)
