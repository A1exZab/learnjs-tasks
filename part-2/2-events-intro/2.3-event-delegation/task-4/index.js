let tooltip

document.addEventListener('mouseover', (e) => {
	const tooltipContent = e.target.dataset.tooltip

	if (!tooltipContent) return

	tooltip = document.createElement('div')
	tooltip.className = 'tooltip'
	tooltip.textContent = tooltipContent
	document.body.append(tooltip)

	const elemCoords = e.target.getBoundingClientRect()

	let left = elemCoords.left + elemCoords.width / 2 - tooltip.offsetWidth / 2

	if (elemCoords.left - tooltip.offsetWidth / 2 < 0) left = 0

	let top = elemCoords.top - tooltip.offsetHeight - 5

	if (elemCoords.top < tooltip.offsetHeight + 5) top = elemCoords.top + elemCoords.height + 5

	tooltip.style.left = left + 'px'
	tooltip.style.top = top + 'px'
})

document.addEventListener('mouseout', (e) => {
	if (tooltip) {
		tooltip.remove()
	}
})
