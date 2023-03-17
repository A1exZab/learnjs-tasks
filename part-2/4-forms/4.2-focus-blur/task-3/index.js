const mouse = document.querySelector('#mouse')

mouse.tabIndex = 0

mouse.addEventListener('click', function () {
	const mouseCoords = this.getBoundingClientRect()

	this.style.left = mouseCoords.left + 'px'
	this.style.top = mouseCoords.top + 'px'

	this.style.position = 'fixed'

	mouse.onkeydown = function (e) {
		switch (e.key) {
			case 'ArrowLeft':
				this.style.left = mouseCoords.left - this.offsetWidth + 'px'
				break
			case 'ArrowUp':
				this.style.top = mouseCoords.top - this.offsetHeight + 'px'
				break
			case 'ArrowRight':
				this.style.left = mouseCoords.left + this.offsetWidth + 'px'
				break
			case 'ArrowDown':
				this.style.top = mouseCoords.top + this.offsetHeight + 'px'
				break
		}
	}
})
