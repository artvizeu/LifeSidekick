"use strict";

lifeSidekickApp
    .controller('MyOffersCtrl', function($rootScope, $scope, $state, Offer) {
        $scope.user = $rootScope.currentUser;
        $scope.offers = [];

        $scope.user.getOffers().forEach(function (offer) {
            offer.fetch({
                success: function (offer) {
                    console.log(offer);
                    $scope.offers.push(offer);
                }
            });
        });

        $scope.newOffer=function(){
            $state.go('app.offers.new-offer');
        };
    });