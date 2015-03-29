"use strict";

lifeSidekickApp
    .controller('AboutCtrl', function($rootScope, $scope) {

        $scope.user = $rootScope.currentUser;

        // set the rate and max variables
        $scope.rate = $scope.user.getRating();
        $scope.max = 5;
    });