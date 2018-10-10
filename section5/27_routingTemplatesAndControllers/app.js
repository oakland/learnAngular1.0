var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "pages/home.html",
		controller: "mainController"
	})
	.when("/forecast", {
		templateUrl: "pages/forecast.html",
		controller: "secondController"
	})
})

myApp.controller("mainController", ["$scope", "$location", "$log", function($scope, $location, $log) {

	$scope.name = "main";

}]);