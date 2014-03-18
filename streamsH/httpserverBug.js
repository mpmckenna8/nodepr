var http = require('http');
var through = require('through');
var fs = require('fs');

var tr = through(function(buf){
  this.queue(buf.toString().toUpperCase())
});

var server = http.createServer(function(req,res){
  if (req.method === 'POST'){
    req.pipe(tr).pipe(res);
  }
   res.end('bbeeper\n');
});

server.listen(parseInt(process.argv[2]));
