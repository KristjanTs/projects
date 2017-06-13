function validBraces(braces){
  //TODO 
  var array = braces.split("");
  for(var i=0;i<array.length;i++){
    if(array[i]==="(" && array[i+1]===")"){
          array.splice(i,2);
          i-=2;
    }
    if(array[i]==="[" && array[i+1]==="]"){
          array.splice(i,2);
          i-=2;
    }
    if(array[i]==="{" && array[i+1]==="}"){
          array.splice(i,2);
          i-=2;
    }
  }

  if(array.length===0){
    return true;
  }
  else{
    return false;
  }
}
