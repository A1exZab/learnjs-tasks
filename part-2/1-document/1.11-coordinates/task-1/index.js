const field = document.querySelector('#field')
const coords = field.getBoundingClientRect()

const point1 = [coords.left, coords.top]
console.log('1: x: ' + point1[0] + ' y: ' + point1[1])

const point2 = [coords.right, coords.bottom]
console.log('2: x: ' + point2[0] + ' y: ' + point2[1])

const point3 = [coords.left + field.clientLeft, coords.top + field.clientTop]
console.log('3: x: ' + point3[0] + ' y: ' + point3[1])

const point4 = [coords.right - field.clientLeft, coords.bottom - field.clientTop]
console.log('4: x: ' + point4[0] + ' y: ' + point4[1])
