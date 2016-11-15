function Cipher(key) {
	this.keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	this.key = key || "d";
	this.keyVal = this.keys.indexOf(key);
}

/* input your keys as a string */
Cipher.prototype.setKeys = function(keyset) {
	this.keys = keyset.split("");
}

/* input your string to be encrypted */
Cipher.prototype.encrypt = function(text) {
	var keyVal = this.keyVal;
	var keys = this.keys;

	var addKey = function(char) {
		var charVal = keys.indexOf(char);
		var newChar;
		var dif = charVal + keyVal;

		// if ( dif < keys.length ) {
		// 	newChar = keys[dif];
		// } else {
		// 	newChar = keys[dif - keys.length];
		// }
		// newChar = keys[dif];
		// return newChar;

/* BETTER VERSION BELOW */

		return keys[dif % keys.length];
	}

	return text.split("").map(addKey).join("");;
};

/* input your string to be decrypted */
Cipher.prototype.decrypt = function(text) {
	var keyVal = this.keyVal;
	var keys = this.keys;

	var substractKey = function(char) {
		var charVal = keys.indexOf(char);
		var dif = charVal - keyVal;
		var newChar = keys[dif >= 0 ? dif : keys.length + dif];
		return newChar;

	}

	return text.split("").map(substractKey).join("");
};