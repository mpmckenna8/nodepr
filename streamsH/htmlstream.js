var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

var lou = tr.select('.loud').createStream();

lou.pipe(through(function(buf){
    this.queue(buf.toString().toUpperCase());
  })).pipe(lou);

process.stdin.pipe(tr).pipe(process.stdout);
