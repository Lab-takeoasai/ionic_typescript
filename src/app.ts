/// <reference path="../typings/main.d.ts" />

angular.module("starter", ["ionic", "ionic.service.core", "ionic.service.analytics", "starter.controllers", "ionic.service.auth", "ngCordova"])

.run(function($ionicPlatform, $cordovaBadge, $ionicAnalytics, $ionicAuth) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    // ionic analytics
    console.log("ionic analytics is on.");
    $ionicAnalytics.register();


    // ionic user
    const details = {
        "email": "email@example.com",
        "password": "secret"
    };
    // this works fine!
    $ionicAuth.signup(details).then((succ) => {
        console.log("user created.");
        console.log(succ);
    }, (errors) => {
        console.log("error creating user");
        console.log(errors);
    });
    const authProvider = "basic";
    const authSettings = { "remember": true };
    $ionicAuth.login(authProvider, authSettings, details).then((succ) => {
        console.log("user logined.");
        console.log(succ);
    }, (errors) => {
        console.log("error login user");
        console.log(errors);
    });

    console.log("cordovaBadge: set3...");
    $cordovaBadge.set(3).then(function() {
        // You have permission, badge set.
        console.log("badge is set.");
    }, function(err) {
        // You do not have permission.
        console.log("error: badge is not set.");
    });

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
