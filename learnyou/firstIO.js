var fs = require('fs');

var inpu = process.argv[2];


var buffedfile = fs.readFileSync(inpu).toString();



console.log(buffedfile.split('\n').length -1)
