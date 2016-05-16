angular.module('starter.controllers', [])

.controller('TaskPlannerCtrl', function($scope, $ionicModal, $state) {

   $scope.gotoEntertainment = function() {
     $state.go('app.entertainment');
   }

   $scope.gotoWork = function() {
     $state.go('app.work');
   }

   $scope.gotoGroceries = function() {
     $state.go('app.groceries');
   }

   $scope.gotoCalendar = function() {
     $state.go('app.calendar');
   }

   $scope.gotoOther = function() {
     $state.go('app.other');
   }

   $scope.gotoMovies = function() {
     $state.go('app.movies');
   }

})


.controller('EntertainmentCtrl', function($scope) {

    $scope.entertainmentTaskList = [
    {name:"The Matrix"},
    {name:"Deadpool"},
    {name:"Captain America: Civil War"}
  ]
})

.controller('WorkCtrl', function($scope) {

    $scope.workTaskList = [
    {name:"Finish Something"},
    {name:"Do this"},
    {name:"Do that"},
    {name:"Do Other"}
  ]
})

.controller('GroceriesCtrl', function($scope) {

    $scope.groceriesList = [
    {
      name:"Tomato",
      amount: '4'
    },
    {name:"Onions",
    amount: '4'},
    {name:"Cocaine",
    amount: '12'},
    {name:"Cyrup",
    amount: '4'},
    {name:"Giraffe",
    amount: '6'}
  ]
})

.controller('CalendarCtrl', function($scope) {

    $scope.calendarList = [
    {name:"Finish Something"},
    {name:"Do this"},
    {name:"Do that"},
    {name:"Do Other"}
  ]
})

.controller('OtherCtrl', function($scope) {

    $scope.otherList = [
    {name:"Finish Something"},
    {name:"Do this"},
    {name:"Do that"},
    {name:"Do Other"}
  ]
})

.controller('MoviesCtrl', function($scope, $http, Movies) {

    $scope.movieList = [
    {name:"Mean Girls"},
    {name:"Jaws"},
    {name:"WWE RAW"},
    {name:"WWE Smackdown"},
    {name:"WWE NXT"}
  ];

  $scope.searchmovie = 'no';
	$scope.showloader = 'no';

	$scope.search = function()	{
    // Show loader while fetchin information
		$scope.showloader = 'yes';

	 	Movies.get(document.getElementById('movie-title').value)
	   .success(function(data) {
			  $scope.searchmovie = 'yes';
        $scope.results = data.Search;
	   		if(data['Response'] == 'False') {
	   			$scope.error = data['Error'];
	   		}

	   		$scope.showloader = "no";
	   });
	}
})

.factory('Movies', function($http) {
	return {
		get: function(title) {
			return $http({
      /*  method: 'GET',
        url:"http://www.imdb.com/xml/find?json=1&nr=1&nm=on&q=" + title,
        dataType: 'jsonp',
        cache: true,
        jsonp: false,*/
			//	url: "http://www.omdbapi.com?t="+title+"&y=&plot=full&r=json",
        url:"http://www.omdbapi.com/?s=" + title,
	      method: "GET"
			});
		}
	}
})


.controller('AppCtrl', function($scope, $ionicModal, $state) {

   // Modal for work
   $scope.openWorkModal = function() {
      $scope.workModal.show();
   };

   $scope.closeWorkModal = function() {
      $scope.workModal.hide();
   };

   $ionicModal.fromTemplateUrl('templates/new-work.html', {
       scope: $scope,
       animation: 'slide-in-up',
    }).then(function(modal) {
       $scope.workModal = modal;
    });

   // Modal for events
   $scope.openEventsModal = function() {
      $scope.eventsModal.show();
   };

   $scope.closeEventsModal = function() {
      $scope.eventsModal.hide();
   };

   $ionicModal.fromTemplateUrl('templates/new-event.html', {
       scope: $scope,
       animation: 'slide-in-up',
    }).then(function(modal) {
       $scope.eventsModal = modal;
    });


   // Modal for groceries
   $scope.openGroceriesModal = function() {
      $scope.groceriesModal.show();
   };

   $scope.closeGroceriesModal = function() {
      $scope.groceriesModal.hide();
   };

   $ionicModal.fromTemplateUrl('templates/new-groceries.html', {
       scope: $scope,
       animation: 'slide-in-up',
    }).then(function(modal) {
       $scope.groceriesModal = modal;
    });


   // Modal for Movies
   $scope.openMovieModal = function() {
      $scope.movieModal.show();
   };

   $scope.closeMovieModal = function() {
      $scope.movieModal.hide();
   };

   $ionicModal.fromTemplateUrl('templates/new-movie.html', {
       scope: $scope,
       animation: 'slide-in-up',
    }).then(function(modal) {
       $scope.movieModal = modal;
    });

    // Modal for Other
    $scope.openOtherModal = function() {
       $scope.otherModal.show();
    };

    $scope.closeOtherModal = function() {
       $scope.otherModal.hide();
    };

    $ionicModal.fromTemplateUrl('templates/new-other.html', {
        scope: $scope,
        animation: 'slide-in-up',
     }).then(function(modal) {
        $scope.otherModal = modal;
     });


  // State changing stuff
  $scope.goHome = function() {
    $state.go('app.task-planner');
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


;
