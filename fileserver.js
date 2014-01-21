var http = require('http')
    fs = require('fs')

var port = process.argv[3];

var server = http.createServer(function (req, res){
	
	fs.createReadStream(port).pipe(res)
})

server.listen(Number(process.argv[2]))
