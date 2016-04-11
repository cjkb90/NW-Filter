'use strict';

app.controller('ProductCtrl', function($scope, ProductFactory){
	$scope.alphabet = ProductFactory.alphabet;
});