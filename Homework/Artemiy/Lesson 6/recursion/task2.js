function getFactorial(n) {
	if (n == 1) {
		return n;
	}
	return n * getFactorial(n - 1);
}

console.log(getFactorial(4));
