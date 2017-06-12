function alphabetWar(fight) {
  var array = fight.split("");
  var left = 0;
  var right = 0;
  for(var i=0;i<array.length;i++){
    if(array[i-1] === "*" || array[i+1] === "*"){
    }
    else{
      switch (array[i]){
        case "w": left+=4;
                  break;
        case "p": left+=3;
                  break;
        case "b": left+=2;
                  break;
        case "s": left++;
                  break;
        case "m": right+=4;
                  break;
        case "q": right+=3;
                  break;
        case "d": right+=2;
                  break;
        case "z": right++;
                  break;
      }
    }
  }
  if (left === right) {
    return "Let's fight again!";
  }
  else if(left>right) {
    return "Left side wins!";
  }
  else {
    return "Right side wins!";
  }
  
}
