var sum = function(arr) {
	var sum = 0;
	var addValue = function(val) {
		sum = sum + val;
		return sum;
	}

	arr.forEach(addValue);
	return sum;
}

var multiply = function(arr) {
	var sum = 1;

	var multiplyValue = function(val) {
		sum = sum * val;
		return sum;
	}

	arr.forEach(multiplyValue);
	return sum;
}

console.log("sum([1,2,3,4]) = " + sum([1,2,3,4]) );
console.log("multiply([1,2,3,4]) = " + multiply([1,2,3,4]) );