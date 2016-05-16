angular.module('starter.services', [])

.factory('Movies', function($http) {
	return {
		get: function(title) {
			return $http({
				url: "http://www.omdbapi.com?t="+title+"&y=&plot=full&r=json",
	            method: "GET"
			});
		}
	}
});
