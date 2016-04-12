var express = require('express');
var app = express();
var routes = require('./server/routes/index.js');


app.use(routes);

var PORT = process.env.PORT || 1337;

app.listen(PORT, function(){
	console.log('Listening at port '+PORT);
});