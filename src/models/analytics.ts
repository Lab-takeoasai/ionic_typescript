/*
angular.module("analytics.services", ["ngCordova"])

.factory("GAnalytics",
  ["$cordovaGoogleAnalytics", function($cordovaGoogleAnalytics){
    return {
      startTracker : function() {
          console.log($cordovaGoogleAnalytics.startTrackerWithId);
          $cordovaGoogleAnalytics.startTrackerWithId("UA-75329068-1");
      },
      setUserId : function(member_id) {
        $cordovaGoogleAnalytics.setUserId(member_id);
      },
      trackView : function(screen_name) {
        console.log("GA: " + screen_name);
        $cordovaGoogleAnalytics.trackView(screen_name);
      }
    };
}]);

ionic analytics is using.

*/

enum Test {
	a,
	b
}
