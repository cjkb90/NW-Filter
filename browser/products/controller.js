'use strict';

app.controller('ProductCtrl', function($scope, ProductFactory){
	$scope.alphabet = ProductFactory.alphabet;
});

app.controller('ProductListCtrl', function($scope, productsList){
	$scope.productsList = productsList;

});