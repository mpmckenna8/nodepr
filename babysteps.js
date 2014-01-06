var proc = process.argv;

var count = 0;
for(i=2; i < proc.length; i++){

count+=Number(proc[i]);
}

console.log(count)