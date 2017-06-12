function findOdd(A) {
  //happy coding!
  for(var i=0; i<A.length; i++) {
    var counter = 0;
    for(var j=0; j<A.length;j++){
      if(A[j] === A[i]) {
        counter += 1;
      }
    }
    if(counter%2 != 0){
      return A[i];
    }
  }
}
