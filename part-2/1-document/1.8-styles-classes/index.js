function showNotification({ top = 0, right = 0, className, html }) {
	notification = document.createElement('div')
	notification.classList.add('notification')

	if (className) {
		notification.classList.add(className)
	}

	notification.style.top = top + 'px'
	notification.style.right = right + 'px'

	notification.textContent = html

	document.body.append(notification)

	setTimeout(() => notification.remove(), 1500)
}

showNotification({
	top: 20,
	right: 20,
	html: "You're welcome!",
	className: 'welcome'
})
