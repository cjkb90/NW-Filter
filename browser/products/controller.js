'use strict';

app.controller('ProductCtrl', function($scope, ProductFactory){
	$scope.alphabet = ProductFactory.alphabet;
	$scope.letterExists = ProductFactory.letterExists;
});

app.controller('ProductListCtrl', function($scope, productsList){
	$scope.productsList = productsList;

});