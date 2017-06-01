$(document).ready(function(){  
  var buzzer = $("#buzzer")[0];
  buzzer.volume = 0.5;
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  console.log(breakTime);

  $("#reset").hide();
  
  $("#start").click(function(){
    var counter = setInterval(timer,1000);
    
    function timer(){
      $("#start, #minus5Clock, #add5Clock, #minus1Break, #add1Break, #breakNum, #title2, #title1").hide();
      $("#timeType").html("Session time: ");
      count -= 1;      
      if (count === 0) {
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();
      }
      
      $("#num").html(count);
      
      function breakTimer(){
      $("#timeType").html("Break time: ");
      $("#breakNum").show();
      breakTime -= 1;
      if(breakTime === 0){
        clearInterval(startBreak);
        $("#reset").show();
        buzzer.play();
        $("#breakNum, #timeType").hide();
      }
        $("#breakNum").html(breakTime);
      
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
