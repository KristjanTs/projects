function spinWords(){
  //TODO Have fun :)
  var array = arguments[0].split(" ");
  var answer = [];
  for (var i=0;i<array.length;i++){
    if(array[i].length>4){
      var letters = array[i].split("").reverse().join("");
      answer.push(letters);
    }
    else {
      answer.push(array[i]);
    }
  }
  
  return answer.join(" ");
  
}
