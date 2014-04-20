function duckCount() {
  // SOLUTION GOES HERE
//  console.log(Array.prototype.slice.call(arguments));
  if (0 in arguments){
  return Array.prototype.slice.call(arguments).filter(function(obj){
    return Object.prototype.hasOwnProperty.call(obj,'quack')
  }).length
}
}

module.exports = duckCount
