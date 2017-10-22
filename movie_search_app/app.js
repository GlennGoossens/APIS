var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");


app.get("/",function(req,res){
  res.render("search");
});

app.get("/results",function(req,res){
  var name = req.query.search;
  var url = "http://www.omdbapi.com/?s=" + name + "&apikey=thewdb";
  request(url,function(err,response,body){
    if(!err && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("results",{data:data});
    }
  });
});



app.listen(3000,function(req,res){
  console.log("Server has been started and is listening on port 3000");
});



/*
http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb
http://www.omdbapi.com/?i=tt3896198&apikey=thewdb
&apikey=thewdb
*/
