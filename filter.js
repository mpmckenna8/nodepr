var fil = require('./modulefilter.js');
var mods = process.argv[2];
var filterSt = process.argv[3];

fil(mods, filterSt, function(err, files){
	if(err)
		return console.log('There was an error:', err)
	files.forEach(function(file){
		console.log(file)
})
});
