var encoder = new Cipher('c');

console.log( "to encrypt: abcdefgh; result: ", encoder.encrypt('abcdefgh') );
console.log( "to decrypt: abcdefgh; result: ", encoder.decrypt('abcdefgh') );
