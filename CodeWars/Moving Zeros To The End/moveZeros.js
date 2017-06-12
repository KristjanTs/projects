var moveZeros = function (arr) {
  // TODO: Program me
  var zeroes = [];
  
  for(var i=0;i<arr.length; i++){
    if(arr[i]===0){
      zeroes.push(0);
      arr.splice(i,1);
      i--;
    }
  }
  return arr.concat(zeroes);
}
