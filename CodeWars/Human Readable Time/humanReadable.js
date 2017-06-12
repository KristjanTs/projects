function humanReadable(seconds) {
  // TODO
  var hours = 0;
  var minutes = 0;
  var seconds1 = 0;
  while (seconds>0) {
    if (seconds>3599){
      hours += 1;
      seconds -= 3600;
    }
    else if (seconds > 59) {
      minutes +=1;
      seconds -= 60;
    }
    else {
      seconds1 = seconds;
      seconds -= seconds;
    }
  }
  if(hours<10) {
    hours = "0"+hours.toString();
  }
  else {
    hours = hours.toString();
  }
  if(minutes<10) {
    minutes = "0"+minutes.toString();
  }
  else {
    minutes = minutes.toString();
  }
  if (seconds1<10) {
    seconds1 = "0"+seconds1.toString();
  }
  else {
    seconds1 = seconds1.toString();
  }
  
  return hours + ":" + minutes + ":" + seconds1;
  
}
