var duplexer = require('duplexer');

var spawn = require('child_process').spawn;

module.exports = function(cmd, ards){
  var parame = spawn(cmd,ards);
  return duplexer(parame.stdin,parame.stdout);
}
