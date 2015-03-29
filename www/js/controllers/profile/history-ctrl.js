"use strict";

lifeSidekickApp
    .controller('HistoryCtrl', function($rootScope, $scope, Offer) {
        $scope.offers = [];
        $scope.max = 5;

        var query = new Parse.Query(Offer);
        query.equalTo("acceptedUser", $rootScope.currentUser);
        query.equalTo("status", "done");
        query.find({
            success: function (offers) {
                $scope.offers = offers;

                offers.forEach(function(offer) {
                    offer.getOwner().fetch();
                })
            }
        });

    });