function Spy(target, method) {
  // SOLUTION GOES HERE
  var realFunc = target[method];
  var thods = {count:0};

  target[method] = function(){


  thods.count++;
  return realFunc.apply(this,arguments);
}
  return thods;
  //console.log(method);
}

module.exports = Spy
