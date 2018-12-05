module.exports = function needleInHaystack(haystack) {
  function findNeedle (item){
    return item == 'needle';
  }
  let needleIndex = haystack.findIndex(findNeedle);
  if (needleIndex >= 0){
    console.log('needleIndex', needleIndex);
    return needleIndex;
  } else if (needleIndex <= -1){
    console.log('false');
    return false;
  }
}