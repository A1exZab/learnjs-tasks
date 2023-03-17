/*Отличия между getComputedStyle(elem).width и elem.clientWidth:*/

// 1. clientWidth возвращает число, getComputedStyle(elem).width – 'число + px'
// 2. getComputedStyle может вернуть CSS свойство, равное "auto"
// 3. В случае с getComputedStyle изменение box-sizing, может 'сломать' JavaScript
