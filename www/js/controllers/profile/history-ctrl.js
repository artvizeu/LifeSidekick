"use strict";

lifeSidekickApp
    .controller('HistoryCtrl', function($rootScope, $scope, dataService) {
        $scope.offers = [];
        $scope.max = 5;

        dataService.findDoneOffersByAcceptedUser($rootScope.currentUser)
            .then(function (offers) {
                $scope.offers = offers;
            });
    });