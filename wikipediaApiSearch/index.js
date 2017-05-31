$(document).ready(function(){
  $("#search").on("click", function(){
    //console.log("hah");
    var searchText = $("#searchText").val();
    console.log(searchText);
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchText+"&format=json&callback=?";
    console.log(url);
    $.getJSON(url,function(data){
      console.log(data[1][2].title);
      var html="";
      for(var i=0;i<data[1].length;i++){
        //console.log(finalData[1][1]);
        html+="<a target='_blank' href="+data[3][i]+">"
        html+="<h5>"+data[1][i]+"</h5>";
        html+="<p>"+data[2][i]+"</p></a><br />";
      };
      //adding data to html
      $("#results").html(html);
      //console.log(html);
    });
    $("#searchResult").html("Wikipedia results for: " + searchText);
  });
  
  //pressing enter == clicking #search
  $("#searchText").keypress(function(e){
    if(e.which===13){
      $("#search").click();
    }
  });
  
});
