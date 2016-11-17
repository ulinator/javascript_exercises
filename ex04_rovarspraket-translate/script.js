var isVowel = function(char) {
	var vowels = ["a","e","o","i","u","y"," "];
	var c = char.toLowerCase();

	function isVowel(input) {
    	return input === c; 
	}

	return vowels.some(isVowel);
}

var translate = function(string) {
	var splitString = string.split("");

	var transformConsonant = function(char) {
		if ( !isVowel(char) ) {
			var newChar = char + "o" + char;
			return newChar;
		} else {
			return char;
		}
	}

	var mappedString = splitString.map(transformConsonant).join("");
	return mappedString;
}

console.log("Translated 'randomstring':", translate("randomstring"));