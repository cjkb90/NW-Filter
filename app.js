var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send("hi");
});

var PORT = process.env.PORT || 1337;

app.listen(PORT, function(){
	console.log('Listening at port '+PORT);
});