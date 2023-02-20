let arr = ['a', 'b']

arr.push(function () {
	alert(this)
})

arr[2]()

// В данном случае this является массив, в котором находится вызываемая функция
// alert преобразует arr к строке
// Поэтому выведет a,b,function(){...}
