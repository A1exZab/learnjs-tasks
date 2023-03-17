const links = document.querySelectorAll('a')

for (let link of links) {
	const href = link.getAttribute('href')
	const check = href && href.includes('://') && !href.startsWith('http://internal.com')

	if (check) {
		link.style.color = 'orange'
	}
}
