angular
	.module('App', [])
	.controller('LoginFormController', function ($scope) {

		$scope.login = function(clickEvent) {
			// Do no submit form on click
	      	clickEvent.preventDefault();
	    };

	 });