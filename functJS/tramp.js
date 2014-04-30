function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return
  // console.log(num);
return  function(){
  operation()
//  else if(num > 1000){throw err}
  return repeat(operation, --num)
}}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  while (fn && typeof fn === 'function'){
    fn = fn()
  }
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  trampoline(function(){
  return repeat(operation, num)
})
}
// I was a cheater but was kind of getting there on my own...
