/* global angular */
(function() {
	'use strict';

	angular.module('register.controller', [])
		.controller('registerController', ['$scope', function ($scope) {
			$scope.errorMessages = [{
				type: 'coast',
				text: 'You are too far from the coast'
			}];
		}]);
})();
