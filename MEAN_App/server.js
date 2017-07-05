var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("contactList", ["contactList"]);

app.use(express.static(__dirname + "/public"));

app.get("/contactList", function(req, res){
  console.log("GET request success");

  db.contactList.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

app.listen(3000);
console.log("server running at port 3000");
