"use strict";

lifeSidekickApp
    .controller('MyOffersCtrl', function($rootScope, $scope, $state) {
        $scope.user = $rootScope.currentUser;
        $scope.offers = [];

        $scope.user.get("offers").forEach(function (offer) {
            offer.fetch({
                success: function (offer) {
                    $scope.offers.push(offer);
                }
            });
        });

        $scope.newOffer = function () {
            $state.go('app.offers.new-offer');
        };
    });