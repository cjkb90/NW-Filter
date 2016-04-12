'use strict';

app.config(function($stateProvider){
	$stateProvider
		.state('products', {
			url: '/products',
			templateUrl: '/browser/products/products.html',
			controller: 'ProductCtrl'
		})
});
