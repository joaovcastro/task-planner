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
		work: [],
		events: [],
		groceries: [],
		movies: [],
		other: []
	});

	var _getAll = function () {
		console.log($localStorage.other);
	  return $localStorage.other;
	};

	var _add = function (thing) {
	  $localStorage.things.push(thing);
	}

	var _remove = function (thing) {
	  $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
	}

	// Regarding 'Work'
	var _getAllWork = function() {
		return $localStorage.work;
	}

	var _addWork = function(name, deadline) {
		$localStorage.work.push(JSON.stringify({name, deadline}));
	}

	// Regarding 'Groceries'
	var _getAllGroceries = function() {
		return $localStorage.groceries;
	}

	var _addGroceries = function(item, amount) {
		$localStorage.groceries.push(JSON.stringify({item, amount}));
	}

	// Regarding 'Movie' tasks
	var _getAllMovies = function() {
		return $localStorage.movies;
	}

	var _addMovie = function(task) {
		$localStorage.movies.push(task);
	}

	// Regarding 'Event' tasks
	var _getAllEvents = function() {
		return $localStorage.events;
	}

	var _addEvent = function(name, date) {
		$localStorage.events.push(JSON.stringify({name, date}));
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
    getAll: _getAll,
    add: _add,
    remove: _remove,
		// regarding 'Work'
		getAllWork: _getAllWork,
		addWork: _addWork,
		// regarding 'Events'
		getAllEvents: _getAllEvents,
		addEvent: _addEvent,
		// regarding 'Groceries'
		getAllGroceries: _getAllGroceries,
		addGroceries: _addGroceries,
		// Regarding 'Movie'
		getAllMovies: _getAllMovies,
		addMovie: _addMovie,
		// regarding 'Other'
		getAllOther: _getAllOther,
		addOther: _addOther,
		removeOther: _removeOther
  };
})

	;
