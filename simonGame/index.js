const RED = "RED";
const BLUE = "BLUE";
const YELLOW = "YELLOW";
const GREEN = "GREEN";

let simon = {
  sendColor: color => { 
    if(!simon.sequence.length){
    }
    else {
      if(color===simon.sequence[simon.step]){
        //next step
        if(simon.step === simon.sequence.length-1){
          $("#step").html("Current score: "+simon.sequence.length);
          simon.step = 0;
          simon.nextSequence();
          simon.hoverSequence();
        }
        else {
          simon.step++;
        }
      }
      else {
        //loss
        alert("Wrong sequence!");
        simon.sequence = [];
        simon.step = 0;
        $("#step").html("Current score: "+0);
      }
    }
  },
  step: 0,
  sequence: [],
  colors: [RED, BLUE, YELLOW, GREEN],
  nextSequence: () => {let nextColor = simon.colors[Math.floor(Math.random()*simon.colors.length)];
                      simon.sequence.push(nextColor);
;                      },
  hoverSequence: () => {
    for(var item of simon.sequence){
     
      console.log(item);
    }
  }
};

$(document).ready(function(){
  $("#RED").click(function(){
    $("#RED").css("background-color", "darkred");
    window.setTimeout(function(){
      $("#RED").css("background-color", "red");
    }, 500);
    simon.sendColor(RED);
  });
  $("#BLUE").click(function(){
    $("#BLUE").css("background-color", "darkblue");
    window.setTimeout(function(){
      $("#BLUE").css("background-color", "blue");
    }, 500);
    simon.sendColor(BLUE);
  });
  $("#YELLOW").click(function(){
    simon.sendColor(YELLOW);
  });
  $("#GREEN").click(function(){
    $("#GREEN").css("background-color", "darkgreen");
    window.setTimeout(function(){
      $("#GREEN").css("background-color", "green");
    }, 500);
    simon.sendColor(GREEN);
  });
  $("#start").click(function(){
    simon.nextSequence();
    simon.hoverSequence();
  });
  $("#reset").click(function(){
    simon.sequence = [];
    simon.step = 0;
    $("#step").html("Current score: "+ 0);
  });
})
