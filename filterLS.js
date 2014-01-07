var fs = require('fs');

var path = require('path');

fs.readdir(process.argv[2], function(err, files ){
	for(i=0; i < files.length; i++){
	console.log(files[i])
}

})
