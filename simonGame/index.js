const RED = "RED";
const BLUE = "BLUE";
const ORANGE = "ORANGE";
const GREEN = "GREEN";

//"simon" object includes all the functions needed.
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
          //check win condition -> if true alert + start new game.
          if(simon.sequence.length==20){alert("Gz, you win!"); simon.reset();}
          simon.nextSequence();
          setTimeout(function(){ simon.hoverSequence(); }, 1500);
        }
        else {
          simon.step++;
        }
      }
      else {
        //wrong move:
        simon.errorSound.play();
        if(simon.strict==0){
          console.log("Wrong sequence!");
          simon.step = 0;
          setTimeout(function(){simon.hoverSequence(); }, 1500);
        }
        else if(simon.strict == 1) {
          simon.sequence = [];
          simon.step = 0;
          simon.audioSequence = [];
          $("#step").html("Current score: "+ 0);
        }
        
      }
    }
  },
  step: 0,
  strict: 0,
  reset:()=>{simon.sequence = []; simon.step = 0; simon.audioSequence = []; $("#step").html("Current score: "+ 0);},
  sequence: [],
  audioSequence: [],
  audioPlayer: (color, url) => {
    $("<audio></audio>").attr({ 
      'src':url, 
      'volume':0.3,
      'autoplay':'autoplay'
    }).appendTo("#"+color);
  },
  soundURL: {
    RED: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    BLUE: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    ORANGE: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    GREEN: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
  },
  errorSound: new Audio(src="https://www.soundjay.com/button/sounds/button-10.mp3"),
  colors: [RED, BLUE, ORANGE, GREEN],
  nextSequence: () => {let nextColor = simon.colors[Math.floor(Math.random()*simon.colors.length)];
    simon.sequence.push(nextColor); 
    switch(nextColor) {
      case "RED": simon.audioSequence.push(simon.soundURL.RED);
      break;
      case "BLUE": simon.audioSequence.push(simon.soundURL.BLUE);
      break;
      case "ORANGE": simon.audioSequence.push(simon.soundURL.ORANGE);
      break;
      case "GREEN": simon.audioSequence.push(simon.soundURL.GREEN);
      break;
    };
    // logs the current sequence -> #cheating                   
    //console.log(simon.sequence);
                      },
  hoverSequence: () => { //plays audio and highlights buttons
      let audio = new Audio(), i=0;
      if(i==0){
          $("#"+simon.sequence[0]).css("background-color", "dark"+simon.sequence[0]);
          setTimeout(function(){ $("#"+simon.sequence[0]).css("background-color", simon.sequence[0]); }, 130);
          }
      audio.addEventListener('ended', function () {
        i = ++i;
        audio.src = simon.audioSequence[i];
        
        $("#"+simon.sequence[i]).css("background-color", "dark"+simon.sequence[i]);
        setTimeout(function(){ $("#"+simon.sequence[i]).css("background-color", simon.sequence[i]); }, 130);
        audio.play();        
      }, true);
      audio.volume = 1;
      audio.loop = false;
      audio.src = simon.audioSequence[0];
      audio.play();
    }
  };
  

$(document).ready(function(){
    $("#RED").click(function(){
      simon.sendColor(RED);
      simon.audioPlayer("RED", simon.soundURL.RED);
    });
    $("#BLUE").click(function(){
      simon.sendColor(BLUE);
      simon.audioPlayer("BLUE", simon.soundURL.BLUE);
    });
    $("#ORANGE").click(function(){
      simon.sendColor(ORANGE);
      simon.audioPlayer("ORANGE", simon.soundURL.ORANGE);
    });
    $("#GREEN").click(function(){
      simon.sendColor(GREEN);
      simon.audioPlayer("GREEN", simon.soundURL.GREEN);
    });
    $("#start").click(function(){
      simon.nextSequence();
      simon.hoverSequence();
    });
    $("#reset").click(function(){
      simon.reset();
    });
    $("#strict").click(function(){
      if(simon.strict==0){
        simon.strict=1;
        $("#strict").html("ON");
        $("#strict").css("color", "#cc0606");
      }
      else if(simon.strict==1){
        simon.strict=0;
        $("#strict").html("OFF");
        $("#strict").css("color", "#4286f4");
      }
    });
  })
