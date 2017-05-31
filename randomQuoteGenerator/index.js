var quote;

//getting the quote from API
$("#getQuote").on("click",function(){

  $.ajaxSetup ({cache: false});

  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data) {
    quote=data[0].content.replace('<p>','').replace('</p>','').replace("\'",'A'); //removing <p> tags with .replace()
    $(".message").html(data[0].content + " - " + data[0].title) //changing the message in html
  });

});

//background color changing

var btn = document.getElementById('getQuote');


var generator = function() {
  newColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  if(newColor.length < 7) {
    generator();
  }
}

btn.addEventListener('click', function() {
  generator();

  document.body.style.background = newColor;
});

// twitter button

$("#tweet").on("click", function(){
  window.open("https://twitter.com/intent/tweet?text="+quote);

});
