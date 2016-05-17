// Ionic taskPlanner App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'taskPlanner' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'taskPlanner.controllers' is found in controllers.js
angular.module('taskPlanner', ['ionic', 'ngStorage', 'taskPlanner.controllers', 'taskPlanner.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.task-planner', {
      url: '/task-planner',
      views: {
        'menuContent': {
          templateUrl: 'templates/task-planner.html',
          controller: 'TaskPlannerCtrl'
        }
      }
    })

    .state('app.entertainment', {
      url: '/entertainment',
      views: {
        'menuContent': {
          templateUrl: 'templates/entertainment.html',
          controller: 'EntertainmentCtrl'
        }
      }
    })

    .state('app.work', {
      url: '/work',
      views: {
        'menuContent': {
          templateUrl: 'templates/work.html',
          controller: 'WorkCtrl'
        }
      }
    })

    .state('app.groceries', {
      url: '/groceries',
      views: {
        'menuContent': {
          templateUrl: 'templates/groceries.html',
          controller: 'GroceriesCtrl'
        }
      }
    })

    .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events.html',
          controller: 'EventsCtrl'
        }
      }
    })

    .state('app.other', {
      url: '/other',
      views: {
        'menuContent': {
          templateUrl: 'templates/other.html',
          controller: 'OtherCtrl'
        }
      }
    })

    .state('app.movies', {
      url: '/movies',
      views: {
        'menuContent': {
          templateUrl: 'templates/movies.html',
          controller: 'MoviesCtrl'
        }
      }
    })


    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/task-planner');
});
