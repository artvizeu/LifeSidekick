"use strict";

lifeSidekickApp
    .controller('OnWorkingOffersCtrl', function($rootScope, $scope, Offer) {
        $scope.offers = [];

        var query = new Parse.Query(Offer);

        query.equalTo("acceptedUser", $rootScope.currentUser);
        query.equalTo("status", "pending");

        query.find({
            success: function (offers) {
                offers.forEach(function (offer) {
                    offer.getOwner().fetch();
                    $scope.offers.push(offer);
                });
            }
        });
    });