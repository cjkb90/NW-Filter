var express = require('express');
var router = express.Router();
var path = require('path');

var landingPage = path.join(__dirname, '..', '..', 'public/index.html');

router.use('/browser', express.static(path.join(__dirname, '..', '..', 'browser')));
router.use('/api', require('./apiIndex.js'));

router.get('/', function(req, res){
	res.sendFile(landingPage);
});

module.exports = router;