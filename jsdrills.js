function wisePerson(wiseType, whatToSay) {
  return 'A wise ' + wiseType + ' once said: "' + whatToSay + '".';
}

function shouter(whatToShout) {
  return whatToShout.toUpperCase() + '!!!';
}

function textNormalizer(text) {
  return text.toLowerCase().trim()
}

function computeArea(width, height) {
	return (width * height)
}

function celsToFahr(celsTemp) {
	return (celsTemp * 1.8 + 32)
}

function fahrToCels(fahrTemp) {
	return ((fahrTemp - 32) / 1.8)
}

function isDivisible(divisee, divisor) {
	return divisee % divisor === 0;
}