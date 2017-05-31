$(document).ready(function(){
  
  var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "voyboy"];
  
  var fccURL = "https://api.twitch.tv/kraken/streams/freecodecamp/?client_id=zxfyukrsw5szceqlmjzsp10g76i2r8";
    //checking fcc stream outside the for loop
    $.getJSON(fccURL, function(data1){
      var link;
      if(data1.stream === null){
        $("#fcc").append("<a href='https://www.twitch.tv/freecodecamp'><div id='stream'><img src='https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png'> Freecodecamp twitch stream is offline</div></a></br></br>");
      }
      else{
        link = "https://www.twitch.tv/freecodecamp";
        $("#fcc").append("<a href='https://www.twitch.tv/freecodecamp'><div id='stream'><img src='https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png'> Freecodecamp twitch stream is online!</div></a></br></br>");
      }
    });
  //looping through the streams array
  for(var i=0; i<streams.length; i++){
    var streamsUrl = "https://api.twitch.tv/kraken/streams/" + streams[i] + "/?client_id=zxfyukrsw5szceqlmjzsp10g76i2r8";
    
    $.getJSON(streamsUrl).done(function(data2){
      var name;
      var logo;
      var status;
      var url;
      
      //if online display stream status etc
      if(data2.stream != null){
        name = data2.stream.channel.name;
        logo = data2.stream.channel.logo;
        status = data2.stream.channel.status;
        url = data2.stream.channel.url;
        
        //checking if current stream has a logo, if not use default twitch icon
        if (logo) {
          $("#online").append("<div id='stream'><a href="+ url + "><img src="+ logo + "> " + name + " - " + status + "</a></div></br></br></br>");
        }
        else {
          $("#online").append("<div id='stream'><a href="+ url + "><img src='https://pbs.twimg.com/profile_images/2349866958/m9pjwl1x1n3nvzf8x8rc.png'> " + name + " - " + status + "</a></div></br></br></br>");
        }
        
    }
      //if offline get info from channels 
      else if (data2.stream === null){
        $.getJSON(data2._links.channel + "/?client_id=zxfyukrsw5szceqlmjzsp10g76i2r8", function(data3){
          //checking if stream has valid id, if not display error that stream doesn't exist;
          if (data3._id) {
            //checking if current stream has a logo, if not use default twitch icon
            if (data3.logo) {
              $("#offline").append("<div id='stream'><a href="+data3.url+"><img src="+ data3.logo+ "> " + data3.name + " - offline</a></div></br></br></br>");
                }
            else {
              $("#offline").append("<div id='stream'><a href="+data3.url+"><img src='https://pbs.twimg.com/profile_images/2349866958/m9pjwl1x1n3nvzf8x8rc.png'> " + data3.name + " - offline</a></div></br></br></br>");
            }
          }
          else {
            $("#offline").append(data3.name + " account doesn't exist");
          }
                                
        });
      }      
      
    });    
  }  
  
  var offline = document.getElementById("offline");
  $(document.getElementById("click")).click(function(){
    if (offline.style.display === "none"){
      offline.style.display = "block";
    }
    else {
      offline.style.display = "none";
    }
  });
  
})
