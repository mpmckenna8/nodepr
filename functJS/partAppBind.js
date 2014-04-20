module.exports = function(namespace) {
  // I was way overcomplicating this one till i cheated. SOLUTION GOES HERE
//  console.log(arguments);
  return console.log.bind(console, namespace);
}
