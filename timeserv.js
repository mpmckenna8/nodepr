var net = require('net');

function zerofill(i){
return (i<10 ? '0' : '') +i
}

function now(){
var d = new Date()
return d.getFullYear() + '-'
	+ zerofill(d.getMonth() +1) + '-'
	+ zerofill(d.getDate()) + ' '
	+ zerofill(d.getHours()) + ':'
	+ zerofill(d.getMinutes()) + '\n'
}

var server = net.createServer(function(socket){
console.log('I think my server is connected');
socket.on('end', function(){
console.log('server connection ended')
})
socket.end(now())

})

 
server.listen(process.argv[2])

