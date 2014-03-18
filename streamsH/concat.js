var concat = require('concat-stream');

var rever = concat(function(data){
  console.log(data.toString().split('').reverse().join(''));
});

process.stdin.pipe(rever)
