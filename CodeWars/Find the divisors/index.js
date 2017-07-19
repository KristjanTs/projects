function divisors(integer) {
  var count=[];
  for(var i=2; i<integer; i++){
    if(integer%i==0){
      count.push(i);
    }
  }
  if(count.length==0){
    return integer+" is prime";
  }
  else{
    return count;
  }
};
