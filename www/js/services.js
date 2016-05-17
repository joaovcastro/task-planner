angular.module('taskPlanner.services', [])

// IMDB API call
.factory('Movies', function($http) {
	return {
		get: function(title) {
			return $http({
        url:"http://www.omdbapi.com/?s=" + title,
	      method: "GET"
			});
		}
	}
})

// LocalStorage
.factory ('StorageService', function ($localStorage) {

	$localStorage = $localStorage.$default({
		today: [],
		work: [],
		events: [],
		groceries: [],
		movies: [],
		other: []
	});


	// Regarding 'Today'
	var _getAllToday = function() {
		return $localStorage.today;
	}

	var _addToday = function(task) {
		$localStorage.today.push(task);
	}

	var _removeToday = function (task) {
		$localStorage.today.splice($localStorage.today.indexOf(task), 1);
	}

	// Regarding 'Work'
	var _getAllWork = function() {
		return $localStorage.work;
	}

	var _addWork = function(name, deadline) {
		$localStorage.work.push({"name": name, "deadline":deadline});
	}

	var _removeWork = function (name, date) {
		$localStorage.work.splice($localStorage.work.indexOf(name), 1);
	}

	// Regarding 'Groceries'
	var _getAllGroceries = function() {
		return $localStorage.groceries;
	}

	var _addGroceries = function(item, amount) {
		$localStorage.groceries.push({"item": item, "amount": amount});
	}

	var _removeGroceries = function (item) {
	  $localStorage.groceries.splice($localStorage.groceries.indexOf(item), 1);
	}

	// Regarding 'Movie' tasks
	var _getAllMovies = function() {
		return $localStorage.movies;
	}

	var _addMovie = function(task) {
		$localStorage.movies.push(task);
	}

	var _removeMovie = function (movie) {
	  $localStorage.movies.splice($localStorage.movies.indexOf(movie), 1);
	}

	// Regarding 'Event' tasks
	var _getAllEvents = function() {
		return $localStorage.events;
	}

	var _addEvent = function(name, date) {
		$localStorage.events.push({"name":name, "date":date});
	}

	var _removeEvent = function (name, date) {
	  $localStorage.events.splice($localStorage.events.indexOf(name), 1);
	}

	// Regarding 'Other' tasks
	var _getAllOther = function() {
		return $localStorage.other;
	}

	var _addOther = function(task) {
		$localStorage.other.push(task);
	}

	var _removeOther = function (task) {
	  $localStorage.other.splice($localStorage.other.indexOf(task), 1);
	}

	return {
		// regarding 'Today'
		getAllToday: _getAllToday,
		addToday: _addToday,
		removeToday: _removeToday,
		// regarding 'Work'
		getAllWork: _getAllWork,
		addWork: _addWork,
		removeWork: _removeWork,
		// regarding 'Events'
		getAllEvents: _getAllEvents,
		addEvent: _addEvent,
		removeEvent: _removeEvent,
		// regarding 'Groceries'
		getAllGroceries: _getAllGroceries,
		addGroceries: _addGroceries,
		removeGroceries: _removeGroceries,
		// Regarding 'Movie'
		getAllMovies: _getAllMovies,
		addMovie: _addMovie,
		removeMovie: _removeMovie,
		// regarding 'Other'
		getAllOther: _getAllOther,
		addOther: _addOther,
		removeOther: _removeOther
  };
})

	;
