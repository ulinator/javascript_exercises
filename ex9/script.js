var filterLongWords = function(arr, i) {

	var isLonger = function(string) {
		return string.length > i;
	}

	var filtered = arr.filter(isLonger);
	return filtered;
}

console.log( filterLongWords(['Funcita','Pelgaiusancin','Ant','Firenza','Kucik'], 3) );