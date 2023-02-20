function checkSpam(str) {
	const viagraCheck = str.toLowerCase().includes('viagra')

	const xxxCheck = str.toLowerCase().includes('xxx')

	return viagraCheck || xxxCheck
}

alert(checkSpam('buy ViAgRA now'))
alert(checkSpam('free xxxxx'))
alert(checkSpam('innocent rabbit'))
