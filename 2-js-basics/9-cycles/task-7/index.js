const from = 2;
const to = 10;

nextStep: for (let i = from; i <= to; i++) {
	for (let j = from; j < i; j++) {
		if (i % j == 0) continue nextStep;
	}
	alert(i);
}
