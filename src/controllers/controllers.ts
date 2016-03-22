/// <reference path="../../typings/main.d.ts" />

// import NCMB from "ncmb";

angular.module("starter.controllers", ["ngCordova"])

.controller("AppCtrl", function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  // $scope.$on('$ionicView.enter', function(e) {
  // });


// to stop watching
// watch.unsubscribe();

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl("templates/login.html", {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log("Doing login", $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller("PlaylistsCtrl", function($scope, $ionicPlatform, $cordovaGoogleAnalytics) {

    $ionicPlatform.ready(function() {
        /*if (typeof window.analytics !== undefined) {
           console.log("analyze...");
           console.log(window.analytics);
         window.analytics.startTrackerWithId("UA-75329068-1");
        } else {
            console.log("Google Analytics Unavailable");
        }*/
        console.log("start");
        if(typeof window.analytics !== 'undefined'){
        console.log($cordovaGoogleAnalytics);
        // $cordovaGoogleAnalytics.debugMode();
        $cordovaGoogleAnalytics.startTrackerWithId("UA-75329068-1");
        $cordovaGoogleAnalytics.trackView('APP first screen');
        } else {
            console.log("error");
        }
        console.log("end");
    });
console.log("ttoto");



     let lists = [
      { title: "AReggae", id: 1 },
      { title: "BChill", id: 2 },
      { title: "Dubstep", id: 3 },
      { title: "Indie", id: 4 },
      { title: "Rap", id: 5 },
      { title: "Cowbell", id: 6 }
    ];
    $scope.playlists = lists;
})

.controller("PlaylistCtrl", function($scope, $stateParams, $cordovaProgress, $ionicPlatform, $cordovaGeolocation) {
    $scope.title = $stateParams;
    /*
    $ionicPlatform.ready(function() {
        $cordovaProgress.showSimple(true);
    });
    */
    $ionicPlatform.ready(function() {
        const posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
            const lat  = position.coords.latitude;
            const long = position.coords.longitude;
            console.log(lat);
            console.log(long);
        }, function(err) {
              // error
              console.log("error");
        });
    });
    /*
    $ionicPlatform.ready(function() {
        $cordovaProgress.showSimple(true);
    });
    */
    /*
    $cordovaProgress.showSimple(true)  // requires .hide()

$cordovaProgress.showSimpleWithLabel(true, "Loading") // .hide()

$cordovaProgress.showSimpleWithLabelDetail(true, "Loading", "detail")
    // requires .hide()

$cordovaProgress.hide()


$cordovaProgress.showDeterminate(false, 100000)

$cordovaProgress.showDeterminateWithLabel(true, 50000, "Loading")

$cordovaProgress.showAnnular(true, 50000)

$cordovaProgress.showAnnularWithLabel(false, 100000, "Loading")

$cordovaProgress.showBar(true, 50000)

$cordovaProgress.showBarWithLabel(false, 100000, "Loading")


$cordovaProgress.showSuccess(true, "Success!") // requires .hide()

$cordovaProgress.showText(false, 100000, "Loading")*/
});
