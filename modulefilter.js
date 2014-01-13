var fs = require('fs');

var path = require('path');

module.exports = function(mods, filterSt, callback){
 fs.readdir(mods, function(err, files ){
	if(err)
		return callback(err)
	files = files.filter(function(file){
		return path.extname(file) === '.' + filterSt

})
	callback(null, files)
//console.log(process.argv[3]) need to add my callback!
	})
	}
