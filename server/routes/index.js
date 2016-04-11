var express = require('express');
var router = express.Router();
var path = require('path');

var landingPage = path.join(__dirname, '..', '..', 'public/index.html');
var Product = require(path.join(__dirname, '..', 'index.js'));

router.use('/browser', express.static(path.join(__dirname, '..', '..', 'browser')));

router.get('/', function(req, res){
	res.sendFile(landingPage);
});

module.exports = router;