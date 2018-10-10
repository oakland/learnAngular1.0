// SERVICE
weatherApp.service('cityService', function() {
	this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {

	this.GetWeather = function(city, days) {
		var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=5e291601749826c80cf9a382c7de31e3", {callback: "JSON_CALLBACK"
	    }, {get: {method: "JSONP"}});

	    return weatherAPI.get({q: city, cnt: days});
	}
}]);