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
          setTimeout(function(){ simon.hoverSequence(); }, 1500);
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
    YELLOW: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    GREEN: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
  },
  colors: [RED, BLUE, YELLOW, GREEN],
  nextSequence: () => {let nextColor = simon.colors[Math.floor(Math.random()*simon.colors.length)];
    simon.sequence.push(nextColor); 
    switch(nextColor) {
      case "RED": simon.audioSequence.push(simon.soundURL.RED);
      break;
      case "BLUE": simon.audioSequence.push(simon.soundURL.BLUE);
      break;
      case "YELLOW": simon.audioSequence.push(simon.soundURL.YELLOW);
      break;
      case "GREEN": simon.audioSequence.push(simon.soundURL.GREEN);
      break;
    }
    console.log(simon.sequence);
    ;                      },
    hoverSequence: () => {
      let audio = new Audio(), i=0;
      audio.addEventListener('ended', function () {
        i = ++i;
        audio.src = simon.audioSequence[i];
        audio.play();
        console.log("#"+simon.sequence[i]);
        
        
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
    $("#YELLOW").click(function(){
      simon.sendColor(YELLOW);
      simon.audioPlayer("YELLOW", simon.soundURL.YELLOW);
    });
    $("#GREEN").click(function(){
      simon.sendColor(GREEN);
      simon.audioPlayer("GREEN", simon.soundURL.GREEN);
    });
    $("#start").click(function(){
      simon.nextSequence();
    });
    $("#reset").click(function(){
      simon.sequence = [];
      simon.step = 0;
      simon.audioSequence = [];
      $("#step").html("Current score: "+ 0);
    });
  })
