'use strict';

app.config(function($stateProvider){
	$stateProvider
		.state('products', {
			url: '/products',
			templateUrl: '/browser/products/products.html',
			controller: 'ProductCtrl'
		})
		.state('products.list', {
			url: '/:letter',
			templateUrl: 'browser/products/productsList.html',
			controller: 'ProductListCtrl',
			resolve: {
				productsList: function(ProductFactory, $stateParams){
					//console.log(ProductFactory.getList($stateParams.letter))
					return ProductFactory.getList($stateParams.letter);
				}
			}
		})
});
