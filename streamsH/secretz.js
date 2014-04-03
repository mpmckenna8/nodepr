var through = require('through');
var zlib = require('zlib');
var crypto = require('crypto');
// still need to npm intall tar
var tar = require('tar');
var parser = tar.Parse();


parser.on('entry',function(e){
  if(e.type!=='File')return;


  var h = crypto.createHash('md5',{encoding:'hex'});
  e.pipe(h).pipe(through(null,end)).pipe(process.stdout);

  function end(){this.queue(' '+e.path+'\n')}
});


var data = process.stdin;
//will return the available ciphers for encrypted stuff me thinks
//console.log(crypto.getCiphers())


var decip = crypto.createDecipher(process.argv[2], process.argv[3]);
var unzip = zlib.createGunzip();


data.pipe(decip).pipe(unzip).pipe(parser);


//
