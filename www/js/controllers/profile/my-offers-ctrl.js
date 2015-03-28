"use strict";

lifeSidekickApp
    .controller('MyOffersCtrl', function($rootScope, $scope, $state, offers) {

        $scope.offers = offers.getAll();

        $scope.newOffer=function(){
            $state.go('app.offers.new-offer');
        }
    });