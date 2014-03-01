var mongoose = require("mongoose");
var express = require('express');


mongoose.connect("mongodb://localhost", function(err){
  if(err) throw err;
  console.log('we done connected!');

  var app = express();
  app.get('/', function(req, res){
	res.send(200, 'my mongoosey backed platform will develop here');
})
  app.listen(3000,function(){
	console.log('hopefully something is a listening on port 3000');
})

  mongoose.disconnect();
})
