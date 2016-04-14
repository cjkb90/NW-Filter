var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname, '..', 'index.js'));
var Product = db.Product;

router.get('/products/all', function(req, res){
	Product.find()
	.then(function(response){
		res.send(response);
	});
});

router.get('/products/letter/findOne/:letter', function(req,res){
	var letter = new RegExp('^'+req.params.letter,'i');
	Product.findOne({
		"name": { "$regex": letter } 
	})
	.then(function(response){
		if(response){
			res.send(true);
		}
		else {
			res.send(false);
		}
	})
});

router.get('/products/letter/:letter', function(req,res){
	var letter = new RegExp('^'+req.params.letter,'i');
	Product.find({
		"name": { "$regex": letter } 
	})
	.then(function(response){
		res.send(response);
	});
});

router.get('/products/add/:prodName', function(req, res){
	var newProd = new Product({name: req.params.prodName})
	newProd.save()
	.then(function(response){
		res.send(response);
	})
});

module.exports = router;
