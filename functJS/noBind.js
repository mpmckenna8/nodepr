var slice = Array.prototype.slice

function logger(namespace) {
  // SOLUTION GOES HERE
  return function(){
    console.log.apply(this, [namespace].concat(slice.call(arguments)))}
//  namespace.slice
}

module.exports = logger
//I was a pretty big cheater on this one. couldn't really figure out how to get started. but I kind of understand apply now.
