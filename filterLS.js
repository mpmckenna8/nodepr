var fs = require('fs');

var path = require('path');

fs.readdir(process.argv[2], function(err, files ){
	console.log(files);

})
