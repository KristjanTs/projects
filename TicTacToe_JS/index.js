var turn="X";
var winner=null;
var draw=null;
board.style.visibility = "hidden";

$("#O").click(function(){
  turn = "O";
  board.style.visibility = "visible";
  startGame();
});

$("#X").click(function(){
  turn="X";
  board.style.visibility="visible";
  startGame();
})

function startGame(){
  for(var i=1;i<10;i++){
    clearSquare(i);
  }
  winner = null;
  draw=null;
  setMessage(turn+" gets to start.");
}

function setMessage(msg){
  document.getElementById("message").innerHTML = msg;
}

function nextMove(square){
  if(winner != null){
    setMessage(turn + " already won!");
  }
  else if(draw==true){
    setMessage("It's a draw, try again!");
  }
  else if(square.innerHTML == ""){
    square.innerHTML=turn;
    switchTurn();
    pcTurn();
  }
  else {
    setMessage("That square is already taken!");
  }
  
}

function switchTurn(){
  if(checkWinner(turn)){
    setMessage("Congratulations, " + turn +"! You win!");
    winner = true;
    setTimeout(function(){
      startGame();
    }, 1500);
    
  }
  else if(checkDraw()){
    setMessage("It's a draw!");
    draw = true;
    setTimeout(function(){
      startGame();
    }, 1500);
  }
  else if(turn=="X"){
    turn="O";
    setMessage("It's "+turn+"'s turn!");
  }
  else{
    turn="X";
    setMessage("It's "+turn+"'s turn!");
  }
}

function pcTurn(){
  if(winner==null){
    var array = [];
  for(var i=1;i<10;i++){
    if(checkSquare(i)==""){
      array.push(i);
    }
  }
  setTimeout(function(){
    document.getElementById(array[Math.floor(Math.random()*array.length)]).innerHTML = turn;
    switchTurn();
  }, 100);
      
  }
}

function checkDraw(){
  for(var i=1;i<10;i++){
    if(checkSquare(i)==""){
      return false;
    }
  }
  return true;;
}

function checkWinner(move){
  var result = false;
  if(checkWin(1,2,3, move)==true || 
     checkWin(4,5,6, move)==true || 
     checkWin(7,8,9, move)==true || 
     checkWin(1,4,7, move)==true || 
     checkWin(2,5,8, move)==true || 
     checkWin(3,6,9, move)==true || 
     checkWin(1,5,9, move)==true || 
     checkWin(3,5,7, move)==true) {
    result=true;
  }
  return result;
}

function checkWin(a,b,c, move){
  var result = false;
  if(checkSquare(a)== move && checkSquare(b)== move && checkSquare(c)==move){
    result = true;
  }
  return result;
}

function checkSquare(number){
  return document.getElementById(number).innerHTML;;
}

function clearSquare(number){
  document.getElementById(number).innerHTML = "";
}
