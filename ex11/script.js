var hammingDist = function(string1, string2) {
	var sS1 = string1.split("");
	var sS2 = string2.split("");
	var hamDist = 0;
	var maxLen = Math.max(string1.length,string2.length);

	for (var i = 0; i < maxLen; i++) {

		if ( sS1[i] != sS2[i] ) {
			hamDist = hamDist + 1;
		} 
	}

	return hamDist;
}

console.log( hammingDist("abcd", "abced") );