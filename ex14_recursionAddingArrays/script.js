var superSum = function(arr) {
	var sum = 0;

	var addArray = function(val) {
		if ( Array.isArray(val) ) {
			val.forEach(addArray);
		} else {
			sum = sum + val;
			return sum;			
		}

	}

	arr.forEach(addArray);
	return sum;

}

var superReduce = function(arr) {

	return arr.reduce( function(previousValue, currentValue) {
		if ( Array.isArray(currentValue) ) {
			return previousValue + superReduce(currentValue);
		} else {
			return previousValue + currentValue;
		}	
	}, 0 );
}

console.log(" superSum([1,2,3,[1,2,3]]) ", superSum([1,2,3,[1,2,3]]));

console.log(" superReduce([1,2,3,[1,[4,5],2,3]]) ", superReduce([1,2,3,[1,[4,5],2,3]]) );