$(document).ready(function(){  
  var buzzer = $("#buzzer")[0];
  buzzer.volume = 0.5;
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  console.log(breakTime);

  $("#reset").hide();
  
  $("#start").click(function(){
    var counter = setInterval(timer,1000);
    count *= 60;
    function timer(){
      $("#start, #minus5Clock, #add5Clock, #minus1Break, #add1Break, #breakNum, #title2, #title1").hide();
      $("#timeType").show();
      $("#timeType").html("Session time: ");
      count -= 1;      
      if (count === 0) {
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();
      }
      
      if(count%60 >= 10){
        $("#num").html(Math.floor(count/60) + ":" + count%60);
            
      }         
      else {
         $("#num").html(Math.floor(count/60) + ":" + "0" + count%60);
         }
      
      
      
      function breakTimer(){
      $("#timeType").html("Break time: ");
      $("#breakNum").show();
      breakTime *= 60;
      breakTime -= 1;
      if(breakTime === 0){
        clearInterval(startBreak);
        $("#reset").show();
        buzzer.play();
        $("#breakNum, #timeType").hide();
      }
        if(breakTime%60 >= 10){
        $("#breakNum").html(Math.floor(breakTime/60) + ":" + breakTime%60);
            
      }         
      else {
         $("#breakNum").html(Math.floor(breakTime/60) + ":" + "0" + breakTime%60);
         }
        $("#timeType").show();
      
    };
    }
    
  });
  
  $("#reset").click(function(){
    count = 25;
    breakTime = 5;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#start, #minus5Clock, #add5Clock, #minus1Break, #add1Break, #breakNum, #num, #title1, #title2").show();
    $("#timeType, #reset").hide();
  });
  
  $("#minus5Clock").click(function(){
    if(count>0){
      count -=5;
      $("#num").html(count);
    }    
  });
  
  $("#add5Clock").click(function(){
    count += 5;
    $("#num").html(count);
  });
  
  $("#minus1Break").click(function(){
    if(breakTime>0){
      breakTime -=1;
      $("#breakNum").html(breakTime);
    }    
  });
  
  $("#add1Break").click(function(){
    breakTime += 1;
    $("#breakNum").html(breakTime);
  });
});