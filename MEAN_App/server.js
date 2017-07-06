var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList', ['contactList']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/contactList", function(req, res){
  console.log("GET request success");

  db.contactList.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactList', function (req, res){
  db.contactList.insert(req.body, function (err, doc){
    res.json(doc);
  });
});

app.listen(3000);
console.log("server running at port 3000");
