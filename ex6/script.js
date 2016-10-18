/* method 1 */
var reverseStr = function(string) {
	var reversedString = string.split("").reverse().join("");
	return reversedString;
}

/* method 2 */
var reverse = function(string) {
	var splitString = string.split("");	
	var emptyString = "";

	function reverseArray(array) {
		for (var i = array.length-1; i >= 0; i--) {
			emptyString = emptyString + array[i];
		}
		return emptyString;
	}

	var reversedArr = reverseArray(splitString);
	return reversedArr;

}

/* method 3 */
var reverseaRd = function(string) {
    var splitString = string.split("");
 
    function reverseArray(array) {
        for (var i = 0; i < array.length / 2; i++) {
            var tmp = array[array.length - i - 1];
            array[array.length - i - 1] = array[i];
            array[i] = tmp;
          
        }
        return array;
    }
 
    var reversedArr = reverseArray(splitString).join("");
    return reversedArr;
 
}

console.log("Method 1: ", reverseStr("abcd"));
console.log("Method 1: ", reverse("abcd"));
console.log("Method 1: ", reverseaRd("abcd"));