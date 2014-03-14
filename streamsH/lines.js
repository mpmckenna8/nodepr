var through = require('through');
var split = require('split');

var linecou = 0;

var tr = through(function(buf){

var line = buf.toString();

   this.queue(linecou%2===0
     ? line.toLowerCase() +'\n'
     : line.toUpperCase() + '\n'
); 
linecou ++
});

var spl2 = 0;

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
