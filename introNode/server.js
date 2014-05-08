var http = require('http');
var content = '<html><body><p>Hello World</p><script type=”text/javascript”'
    +'>alert(“Hi!”);</script></body></html>';
http.createServer(function (request, response) {
   response.end(content);
}).listen(8081, 'localhost');
console.log('Server running at http://localhost:8081/.');

//from http://book.mixu.net/node/ch2.html
