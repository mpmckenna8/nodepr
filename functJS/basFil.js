
module.exports = function getShortMessages(messages) {
  //


function arrayify(stuff){
  return '[' + stuff + ']'
};

return messages
.filter(function(m){ return m.message.length < 50;})
.map(function(y){
  return y.message
})

}
