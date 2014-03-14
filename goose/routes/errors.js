module.export = function(app){
//404s
  app.use(function(req, res, next){
    res.status(404);
    if(req.accepts('html')){
      return res.send("<h2>Sorry that page couldn't be located</h2>");
    }
    if(req.accecpts('json')){
      return res.json({error:'not found'});
    }
    res.type('txt');
    res.send("Huh, don't find that no where...");   
    
})

//500's

  app.use(function(err,req,res,next){
    console.error('error at %s\n', req.url, err);
    res.send(500, "Ooopas a daisies, found an error");
})
}
