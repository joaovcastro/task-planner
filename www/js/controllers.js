angular.module('taskPlanner.controllers', [])

.controller('TaskPlannerCtrl', function($scope, $ionicModal, $state) {

   $scope.gotoToday = function() {
     $state.go('app.today');
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

.controller('TodayCtrl', function($scope, StorageService) {

  $scope.todayList = StorageService.getAllToday();
  $scope.listCanSwipe = true;

  $scope.removeTask = function (task) {
    console.log("delete work: " + task);
    StorageService.removeToday(task);
  }
})

.controller('WorkCtrl', function($scope, StorageService) {

  $scope.workList = StorageService.getAllWork();
  $scope.listCanSwipe = true;

  $scope.removeTask = function (task) {
    console.log("delete work: " + task.name);
    StorageService.removeWork(task);
  }
})

.controller('GroceriesCtrl', function($scope, StorageService) {

  $scope.groceriesList = StorageService.getAllGroceries();
  $scope.listCanSwipe = true;

  $scope.removeTask = function (item) {
    console.log("delete item: " + item.item);
    StorageService.removeGroceries(item);
  }
})

.controller('EventsCtrl', function($scope, StorageService) {

  $scope.eventList = StorageService.getAllEvents();
  $scope.listCanSwipe = true;

  $scope.removeTask = function (task) {
    console.log("delete event: " + task.name);
    StorageService.removeEvent(task);
  }

})

.controller('OtherCtrl', function($scope, StorageService) {

  $scope.otherList = StorageService.getAllOther();
  $scope.listCanSwipe = true;

  $scope.removeTask = function (task) {
    console.log("delete: " + task);
    StorageService.removeOther(task);
  }

})

.controller('MoviesCtrl', function($scope, $http, Movies, StorageService) {

  $scope.movieList = StorageService.getAllMovies();
  $scope.listCanSwipe = true;

  $scope.removeTask = function (task) {
    console.log("delete movie: " + task.Title);
    StorageService.removeMovie(task);
  }

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

.controller('AppCtrl', function($scope, $ionicModal, $state, $window, $timeout, StorageService) {

    /*
       Regarding 'Today'
    */

   // Modal for Today
   $scope.openTodayModal = function() {
      $scope.todayModal.show();
   };

   $scope.closeTodayModal = function() {
      $scope.todayModal.hide();
   };

   $ionicModal.fromTemplateUrl('templates/new-today.html', {
       scope: $scope,
       animation: 'slide-in-up',
    }).then(function(modal) {
       $scope.todayModal = modal;
    });

    // Add new 'Today' event
    $scope.todayTasks = StorageService.getAllToday();
    $scope.todayItemCount = $scope.todayTasks.length;

    $scope.createTodayTask = function(task) {
      StorageService.addToday(task);
      $scope.closeTodayModal();
      $scope.todayItemCount++;
    }


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

    $scope.createWorkTask = function(taskName, deadline) {
      StorageService.addWork(taskName, deadline);
      $scope.closeWorkModal();
      $scope.workItemCount++;
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
      $scope.closeEventsModal();
      $scope.eventItemCount++;
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
      $scope.closeGroceriesModal();
      $scope.groceriesItemCount++;
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
      StorageService.addMovie(task);
      $scope.closeMovieModal();
      $scope.movieItemCount++;
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
       StorageService.addOther(task);
       $scope.closeOtherModal();
       $scope.otherItemCount++;
     }

    // State changing stuff
    $scope.goHome = function() {
      $state.go();
    }

})


;
