var url = require('url');
var http = require('http');
 
function  partime(time){
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}

}


function unixtime(time){
return {unixtime:time.getTime()}
}
var repath = '/api/parsetime/'
var  unirepath = '/api/unixtime/'

var server = http.createServer(function(req, res){
	//need to start this shabang using url

	var parsedURL = url.parse(req.url, true)
	var time = new Date(parsedURL.query.iso)
	var result
if(/^\/api\/parsetime/.test(req.url))
	result = partime(time);

else if(/^\/api\/unixtime/.test(req.url))
	result = unixtime(time);



if (result){
	res.writeHead(200, {'Content-Type':'application/json'})
res.end(JSON.stringify(result))}
else{
	res.writehead(404)
	res.end()}

///	if(req.method != 'GET') return res.end('this needs to be a get request from the right path')
})

 
server.listen(Number(process.argv[2]))

