var url = require('url');
var http = require('http');
 
function  partime(time){
	return {
		hour: time.getHours;
		minute: time.getMinutes;
		second: time.getSeconds;
	}

}


function unixtime(time){
return {unixtime:time.getTime()}
}
var repath = '/api/parsetime'
var  unirepath = '/api/unixtime'

var server = http.createServer(function(req, res){
	//need to start this shabang using url

	var parsedURL = url.parse(req.url)
	var time = new Date(parsedURL.query.iso)

if(/^repath.test(req.url))
	result = partime(time);

if(


	if(req.method != 'GET') return res.end('this needs to be a get request from the right path')

	


console.log('I think my server is connected');
socket.on('end', function(){
console.log('server connection ended')
})
socket.end(now())

})

 
server.listen(Number(process.argv[2]))

