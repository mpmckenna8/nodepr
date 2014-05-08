var fs = require('fs');

var fileP = (process.argv[2]);

fs.readFile(fileP, 'utf8', function(err,data){
  if (err) return err;
  var datstr = data.split('\n');
  console.log(datstr.length);

});
