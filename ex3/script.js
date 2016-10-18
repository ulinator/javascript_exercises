var isVowel = function(char) {
	var vowels = ["a","e","o","i","u","y"];
	var c = char.toLowerCase();

	function isChar(input) {
    	return input === c; 
	}

	return vowels.some(isChar);
}

console.log("isVowel C? ", isVowel("c"));