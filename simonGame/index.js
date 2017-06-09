$(document).ready(function(){
  var numOrder = [];
  var counter= 0;
  
  $("#start").click(function(){
      $("#start").hide();
      for(var i=0; i<20; i++){
      numOrder.push(Math.floor(Math.random()*4)+1);
    }

    $("#first").click(function(){
      if(numOrder[counter]!==1){
        $("#text").html("Nope");
      }
      else {
        counter +=1;
      }
    });

    $("#second").click(function(){
      console.log(2);
      if(numOrder[counter]!==2){
        $("#text").html("Nope");
      }
      else {
        counter +=1;
      }
    });

    $("#third").click(function(){
      console.log(3);
      if(numOrder[counter]!==3){
        $("#text").html("Nope");
      }
      else {
        counter +=1;
      }
    });

    $("#fourth").click(function(){
      console.log(4);
      if(numOrder[counter]!==4){
        $("#text").html("Nope");
      }
      else {
        counter +=1;
      }
    });
    console.log(numOrder);
  });
  
});
