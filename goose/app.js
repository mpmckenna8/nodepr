var mongoose = require("mongoose");
var express = require('express');
var routes = require('./routes')

mongoose.connect("mongodb://localhost", function(err){
  if(err) throw err;
  console.log('we done connected!');

  var app = express();

  routes(app);	

  app.listen(3000,function(){
	console.log('hopefully something is a listening on port 3000');

})
})


