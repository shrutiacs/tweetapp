var express= require("express");
var app= express();
var bodyParser=require('body-parser')
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/serviceClients", function (req, res) { 
    res.json([]);
});

app.post("$scope.serviceClients", function(req, res){
    var svc= req.body;
    console.log(svc);
});

app.listen(3000);