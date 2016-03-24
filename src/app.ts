/// <reference path="../typings/main.d.ts" />

angular.module("starter", ["ionic", "starter.controllers", "ngCordova"])

.run(function($ionicPlatform, GAnalytics, $cordovaBadge) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    console.log("log");
    $cordovaBadge.set(3).then(function() {
    // You have permission, badge set.
  }, function(err) {
    // You do not have permission.
  });
debugger;
    $cordovaBadge.hasPermission().then(function(yes) {
    // You have permission
    console.log("permit");
  }, function(no) {
      console.log("err");
    // You do not have permission
  });
  
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    
    GAnalytics.startTracker();
    
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state("app", {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: "AppCtrl"
  })

  .state("app.search", {
    url: "/search",
    views: {
      "menuContent": {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state("app.browse", {
      url: "/browse",
      views: {
        "menuContent": {
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state("app.playlists", {
      url: "/playlists",
      views: {
        "menuContent": {
          templateUrl: "templates/playlists.html",
          controller: "PlaylistsCtrl"
        }
      }
    })

  .state("app.single", {
    url: "/playlists/:playlistId",
    views: {
      "menuContent": {
        templateUrl: "templates/playlist.html",
        controller: "PlaylistCtrl"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise("/app/playlists");
});
