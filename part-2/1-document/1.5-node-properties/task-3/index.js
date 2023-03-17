let body = document.body

body.innerHTML = '<!--' + body.tagName + '-->'

// body.tagName = BODY
// body.firstChild - '<!--BODY-->'
// data для комментария является кго содержимое, т.е. BODY

console.log(body.firstChild.data) // выведет BODY
