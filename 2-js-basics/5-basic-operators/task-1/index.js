let a = 1,
	b = 1

let c = ++a
let d = b++

// a = 2, т.к. инкрементируем а
// b = 2 т.к. инкрементируем b
// c = 2, т.к. ++a вернет увеличенное значение
// d = 1, т.к. b++ вернет значение до инкремента

console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`)
