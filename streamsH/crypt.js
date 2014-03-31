

var crypto = require('crypto');
var data = process.stdin;
//will return the available ciphers for encrypted stuff me thinks
//console.log(crypto.getCiphers())

var decip = crypto.createDecipher('aes256',process.argv[2]);

data.pipe(decip).pipe(process.stdout);
