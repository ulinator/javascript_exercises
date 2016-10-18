var charFreq = function(arr) {
	var charList = {
	}

	var splitArr = arr.split("");

	var countChar = function(char) {

		if (charList[char]) {
			charList[char] = charList[char] + 1;
		} else {
			charList[char] = 1;
		}

		return charList;
	}

	splitArr.forEach(countChar);
	return charList;

}

console.log( charFreq("aabbccdefgha") );