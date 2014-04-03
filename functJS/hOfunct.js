function repeat(operation, num) {
  // SOLUTION GOES HERE
  for(i=0; i<num;i++){
    operation();
  }
}

module.exports = repeat
