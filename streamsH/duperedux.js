// cheated pretty bad on this one but think I get it now.

var duplexer = require('duplexer');
var through = require('through');

// console.log(process.stdin);
module.exports = function(counter){ var counts = {};
var input = through(write,end);
return duplexer(input,counter);

function write(row){
  counts[row.country] = (counts[row.country] || 0)+1;
}
function end(){counter.setCounts(counts)}
};
