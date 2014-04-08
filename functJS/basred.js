
function countWords(inputWords) {
  // SOLUTION GOES HERE
  var wordsObj = {};
  return inputWords.reduce(function(a, b){

    a[b]=++a[b] || 1
    return a
  }, {})
}

module.exports = countWords
