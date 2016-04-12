'use strict';

app.factory('ProductFactory', function($http){
	var ProductFactory = {};

	ProductFactory.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

	ProductFactory.getList = function(letter){
		return $http.get('/api/products/letter/' + letter)
		.then(function(response){
			//console.log(response.data);
			return(response.data)

		})
	}

	ProductFactory.letterExists = function(letter){
		return $http.get('api/products/letter/findOne/' + letter)
		.then(function(response){
			return response.data;
		})
	}

	return ProductFactory;
});