var encoder = new Cipher('c');

console.log( "to encrypt: abcxyz; result: ", encoder.encrypt('abcxyz') );
console.log( "to decrypt: cdezab; result: ", encoder.decrypt('cdezab') );