const div = document.createElement('div')
div.className = 'container'

document.body.append(div)

const scrollWidth = div.offsetWidth - div.clientWidth

console.log(scrollWidth)
