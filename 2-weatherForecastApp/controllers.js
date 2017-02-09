// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
    	cityService.city = $scope.city;
    })

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';

    $scope.API = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=5e291601749826c80cf9a382c7de31e3", {callback: "JSON_CALLBACK"
    }, {get: {method: "JSONP"}});

    $scope.weatherResult = $scope.API.get({q: $scope.city, cnt: $scope.days});

    $scope.convertToFahrenheit = function(degK) {
    	return Math.round(1.8*(degK - 273) + 32);
    }

    $scope.convertToDate = function(dt) {
    	return new Date(dt * 1000);
    }

}]);