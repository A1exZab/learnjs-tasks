function pow(x, n) {
	let result = x;
	n = Math.round(n);

	for (i = 1; i < n; i++) {
		result *= x;
	}
	return result;
}

const x = +prompt('Введите x');
const n = +prompt('Введите n');

if (n < 1) {
	alert('n должно быть больше 1');
} else {
	alert(pow(x, n));
}
