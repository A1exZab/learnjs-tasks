const grid = document.querySelector('#grid')

grid.addEventListener('click', (e) => {
	if (e.target.tagName != 'TH') return

	const columnIndex = e.target.cellIndex
	const dataType = e.target.dataset.type

	sortTable(columnIndex, dataType)
})

function sortTable(columnIndex, dataType) {
	const tbody = grid.querySelector('tbody')

	const rowsArray = [...tbody.rows]

	let compareFunc

	if (dataType === 'number') {
		compareFunc = (rowA, rowB) => {
			return rowA.cells[columnIndex].textContent - rowB.cells[columnIndex].textContent
		}
	} else if (dataType === 'string') {
		compareFunc = (rowA, rowB) => {
			return rowA.cells[columnIndex].textContent > rowB.cells[columnIndex].textContent ? 1 : -1
		}
	} else return

	const sortedTable = rowsArray.sort(compareFunc)

	tbody.append(...sortedTable)
}
