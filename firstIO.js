var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var stingy = buffer.toString();

console.log(stingy.split('\n').length-1)

//completed third learnyounode but had to kind of cheat for process.argv[2] to get the filename.
