module.exports = function cookieProblem(array) {
  var largest  = Math.max.apply(null , array);
  var total = [];
  console.log(
    "**************", array, largest
  );
  array.forEach(function(i) {
    var shouldAdd = largest - i;
    console.log('shouldAdd', shouldAdd);
    total.push(shouldAdd);  
  });
  let actualyTotal = total.reduce((acc, cur) =>{
    return acc + cur;
  });
  return actualyTotal;
}