var http = require('http')
    fs = require('fs')
var map = require('through2-map')
var port = process.argv[3];

var server = http.createServer(function (req, res){
	if(req.method != 'POST' ) 
		return res.end('gimme a Post pls!\n')
		
	
	req.pipe(map(function(chunk){
	return chunk.toString().toUpperCase()
} )).pipe(res)


	})

server.listen(Number(process.argv[2]))
