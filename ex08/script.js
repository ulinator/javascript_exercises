/* method 1 */
var findLongestWord = function(arr) {

	var longest = 0;

	for (var i = 0; i < arr.length ; i++) {
		if ( arr[i].length > longest) {
			longest = arr[i].length;
		}
	}

	return longest;
}

/* method 2 */
var findLongestWordFE = function(arr) {
	var longest = 0;

	var isLongest = function(string) {
		if ( string.length > longest ) {
			longest = string.length;
		}
	}
	arr.forEach(isLongest);
	return longest;
}

console.log( findLongestWord(['Ala','Lubi','Nienie','fjfejfoejeo']) );
console.log( findLongestWordFE(['Ala','Lubi','Nienie','fjfejfoejeo']) );