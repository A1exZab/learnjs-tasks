function unique(arr) {
	return arr.filter((el, index) => {
		return index === arr.indexOf(el)
	})
}

let strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O']

alert(unique(strings))
