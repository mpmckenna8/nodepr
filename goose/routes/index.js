var errors = require('./errors');
var login = require('./login');

module.exports = function(app){
  //slash page
  app.get('/', function(req, res){
    res.render('home.jade');
})
// loginroutes
    login(app);

//errors route connect
  errors(app);  
}
