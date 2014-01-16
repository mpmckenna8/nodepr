var express = require('express'),
	app = express();

app.get('/', function(req, res){
	res.send("Heyo worldo");
});

app.get('*', function(req, res){
        res.send("Page not found", 404);
});

app.listen(8080);
console.log("express server a listening in 8080.");
