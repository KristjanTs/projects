
$(document).ready(function(){
  $.ajaxSetup ({cache: false});
  //getting the users location(latitude, longitude, city)
  var api="https://ipinfo.io/json";
  
  $.getJSON(api, function(data){
    console.log(api);
    console.log(data);
    var city = data.city;
    var country = data.country;
    var location = (data.loc).split(",");
    
    var latitude = parseFloat(location[0]);
    var longitude = parseFloat(location[1]);
    console.log(latitude.toFixed(2));
    //using the received latitude and longitude in openweather url for local weather info
    var wurl="https://cors.5apps.com/?uri=http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=936e860c72edb8cb527707e7d59da1ea&units=metric";
        //"http://api.openweathermap.org/data/2.5/weather?lat="+latitude.toFixed(2)+"&lon="+longitude.toFixed(2)+"&units=metric&APPID=7937581d3b3d62a52fdcb8412fe8b62f";
    console.log(wurl);
    $("#location").html(city+", "+country);
    
    $.getJSON(wurl,function(data){
      var temp = data.main.temp;
      console.log(temp);
      var weather = data.weather[0].main;
      var w_description = data.weather[0].description;
      var icon = data.weather[0].icon;
      //console.log(temp+" "+weather+" "+w_description + " " + icon);
      //getting an icon according to weather
      var iconUrl = "http://openweathermap.org/img/w/"+icon+".png"; 
      $("#icon").attr("src",iconUrl);
      $("#temp").html(temp + " &deg;C");
      $("#weather").html(weather+": ");
      $("#w_description").html(w_description);
      units = "celsius";
      
      function convert(temp){
        var fahrenheit = (temp*(9/5)+32).toFixed(2);
        return fahrenheit;
      };
      
      $("#temp").on("click",function(){
        
        if(units==="celsius"){
          $("#temp").html(convert(temp)+" &deg;F");
          units="fahrenheit";
        }
        else {
          $("#temp").html(temp+" &deg;C");
          units="celsius";
        }
        
      });                         
  });
  });    
});
  
