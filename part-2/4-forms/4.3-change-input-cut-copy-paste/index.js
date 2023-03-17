const form = document.forms.calculator

form.money.oninput = calculate
form.months.onchange = calculate
form.interest.oninput = calculate

function calculate() {
	const data = {
		initial: +form.money.value,
		interest: +form.interest.value * 0.01,
		years: form.months.value / 12
	}

	let result = Math.round(data.initial * (1 + data.interest) ** data.years)

	let height = (result / form.money.value) * 100 + 'px'

	document.querySelector('#height-after').style.height = height

	document.querySelector('#money-before').textContent = form.money.value
	document.querySelector('#money-after').textContent = result
}

calculate()
