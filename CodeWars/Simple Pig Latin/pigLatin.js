function pigIt(str){
  //Code here
  var result = [];
  var array = str.split(" ");
  for(var i=0; i<array.length; i++) {
    var secondArray = array[i].split("");
    secondArray.push(secondArray[0], "ay");
    secondArray.splice(0,1);
    var word = secondArray.join("");
    result.push(word);
  }
  return result.join(" ");
}
