var Stream = require('stream');
var stream = new Stream;
stream.readable = true;

var c = 64;
var iv = setInterval(function () {
                     if (++c >= 100) {
                     clearInterval(iv);
                     stream.emit('end');
                     }
                     else stream.emit('data', String.fromCharCode(c));
                     }, 100);

stream.pipe(process.stdout);



//Not terribly exciting example of getting data charcode in process and printing it to the console w/ little delays between each character. https://github.com/substack/stream-handbook