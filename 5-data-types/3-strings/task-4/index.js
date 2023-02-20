function extractCurrencyValue(str) {
	return parseFloat(str.slice(1))
}

console.log(extractCurrencyValue('$120'))
