var express = require('express');

module.exports = function(app){
  app.use(express.logger('dev'));


// if I were ever developing for production I'd probably want to use connect-mongo or something of the like for the next part.
  app.use(express.cookieParser());
  app.use(express.session({secret:'first attempt at mongoose platform'}));
  app.use(express.bodyParser());

  //expose session to views
  app.use(function(req,res,next){
    res.locals.session = require.session;
    next();
})
}

