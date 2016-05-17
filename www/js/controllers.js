angular.module('taskPlanner.controllers', [])

.controller('TaskPlannerCtrl', function($scope, $ionicModal, $state, StorageService) {

   // LocalStorage
   $scope.things = StorageService.getAll();

   $scope.add = function (newThing) {
     StorageService.add(newThing);
   };

   $scope.remove = function (thing) {
     StorageService.remove(thing);
   };

   // Changing State
   $scope.gotoEntertainment = function() {
     $state.go('app.entertainment');
   }

   $scope.gotoWork = function() {
     $state.go('app.work');
   }

   $scope.gotoGroceries = function() {
     $state.go('app.groceries');
   }

   $scope.gotoEvents = function() {
     $state.go('app.events');
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

.controller('WorkCtrl', function($scope, StorageService) {

    $scope.workTasks = StorageService.getAllWork();
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

.controller('EventsCtrl', function($scope) {

    $scope.calendarList = [
    {name:"Finish Something"},
    {name:"Do this"},
    {name:"Do that"},
    {name:"Do Other"}
  ]
})

.controller('OtherCtrl', function($scope, StorageService) {

  $scope.otherList = StorageService.getAllOther();
  $scope.listCanSwipe = true

  $scope.removeTask = function (task) {
    console.log("delete: " + task);
    StorageService.removeOther(task);
  }

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

.controller('AppCtrl', function($scope, $ionicModal, $state, StorageService) {

    /*
       Regarding 'Work'
    */

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

    // Add new 'Work' event
    $scope.workTasks = StorageService.getAllWork();
    $scope.workItemCount = $scope.workTasks.length;

    $scope.createWorkTask = function(name, deadline) {
      StorageService.addWork(name, deadline);
    }

    /*
      Events
    */

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

    // Add new 'Event'
    $scope.eventTasks = StorageService.getAllEvents();
    $scope.eventItemCount = $scope.eventTasks.length;
    $scope.createEventTask = function(name, date) {
      StorageService.addEvent(name, date);
    }

    /*
      Groceries
    */

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

    // Add new 'Groceries'
    $scope.groceriesTasks = StorageService.getAllGroceries();
    $scope.groceriesItemCount = $scope.groceriesTasks.length;

    $scope.createGroceriesTask = function(item, amount) {
      StorageService.addGroceries(item, amount);
    }

    /*
      Movies
    */

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

    // Add new 'Movie' event
    $scope.movieTasks = StorageService.getAllMovies();
    $scope.movieItemCount = $scope.movieTasks.length;

    $scope.createMovieTask = function(task) {
      console.log(task);
      StorageService.addMovie(task);
    }

   // State changing stuff
   $scope.goHome = function() {
     $state.go('app.task-planner');
   }


    /*
      Other
    */

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

     // Add new 'Other' event
     $scope.otherTasks = StorageService.getAllOther();
     $scope.otherItemCount = $scope.otherTasks.length;

     $scope.createOtherTask = function(task) {
       console.log(task);
       StorageService.addOther(task);
     }

    // State changing stuff
    $scope.goHome = function() {
      $state.go('app.task-planner');
    }

})


;
