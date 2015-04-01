"use strict";

lifeSidekickApp
    .controller('OnWorkingOffersCtrl', function($rootScope, $scope, loading, dataService) {
        $scope.offers = [];

        fetchList();

        function fetchList() {
            loading.show();

            dataService.findPendingOffersByAcceptedUser($rootScope.currentUser)
                .then(function (offers) {
                    loading.hide();
                    $scope.offers = offers;
                }, function (error) {
                    loading.hide();
                    console.log(error);
                });
        }
    });