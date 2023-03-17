let fruits = ['Яблоки', 'Груша', 'Апельсин']

let shoppingCart = fruits
shoppingCart.push('Банан') // fruits также изменяется, т.к. ссылка на область памяти та же

alert(fruits.length) // выведет 4
