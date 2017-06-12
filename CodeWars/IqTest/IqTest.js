function iqTest(numbers){
  // ...
  var odd = 0;
  var even = 0;
  var array = numbers.split(" ");
  for(var i=0;i<array.length;i++){
    if(array[i]%2===0){
      even++;
    }
    else{
      odd++;
    }  
  }
  if(odd>even){
    for(var i=0;i<array.length;i++){
      if(array[i]%2===0){
        return i+1;
      }
    }
  }
  else{
    for(var i=0;i<array.length;i++){
      if(array[i]%2 != 0){
        return i+1;
      }
    }
  }
}
