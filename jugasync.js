const http = require('http');
const bl = require('bl');

results=[];

count = 0


function printRes(){
	for(i=0; i < 3; i++){
		console.log(results[i])
}
}



function gethttp(index)
{ http.get(process.argv[2 + index], function(response){response.pipe(bl(function(err, data){
 if(err)
	return console.err(data)
 results[index] = data.toString()
 count++
 if(count == 3)
    printRes()
}))
});
}

for(i=0; i<3; i++){
	gethttp(i)
}
 
