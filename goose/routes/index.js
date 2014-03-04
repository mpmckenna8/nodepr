
module.exports = function(app){
  //slash page
  app.get('/', function(req, res){
    res.render('home.jade');
})
  
}
