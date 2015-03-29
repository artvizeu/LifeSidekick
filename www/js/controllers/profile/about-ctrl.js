"use strict";

lifeSidekickApp
    .controller('AboutCtrl', function($rootScope, $scope, Offer) {

        $scope.user = $rootScope.currentUser;

        // set the rate and max variables

        $scope.max = 5;

        var query = new Parse.Query(Offer);
        query.equalTo("acceptedUser", $rootScope.currentUser);
        query.equalTo("status", "done");
        query.find({
            success: function (offers) {
                $scope.offers = offers;
                var sum = 0;
                offers.forEach(function(offer) {
                    sum += offer.getRating();
                });

                $scope.rate = sum / offers.length;
            }
        });
    });