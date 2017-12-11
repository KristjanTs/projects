function formatDuration (seconds) {
  var endingCheck = (number) => (number > 1) ? "s" : "";
  // Complete this function
    if (Number.isFinite(seconds)){
      if(seconds === 0){
        return "now";
      }
      let years = Math.trunc(seconds/31536000);
      let days = Math.trunc((seconds %= 31536000) / 86400);
      let hours = Math.trunc((seconds %= 86400) / 3600);
      let minutes = Math.trunc((seconds %= 3600) / 60);
      let secondsCounter = seconds % 60;
      let string = [];
      let finalString = "";
      if(years){
        string.push(years + " year" + endingCheck(years));
      }
      if (days) {
        string.push(days + " day" + endingCheck(days));
      }
      if (hours) {
        string.push(hours + " hour" + endingCheck(hours));
      }
      if (minutes) {
        string.push(minutes + " minute" + endingCheck(minutes));
      }
      if (secondsCounter) {
        string.push(secondsCounter + " second" + endingCheck(secondsCounter));
      }
      for(var i=0; i<string.length; i++) {
        if(i === string.length-1){
          finalString += string[i];
        }
        else if( i === string.length-2) {
          finalString += string[i] + " and ";
        }
        else {
          finalString += string[i] + ", ";
        }
      }
      return finalString;
  }
  else {
    return "Not a number";
  }
}
