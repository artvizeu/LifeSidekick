"use strict";

lifeSidekickApp
    .controller('NewOfferCtrl', function($rootScope, $scope,$state,offers) {
        $scope.newOffer;
        $scope.addOffers=function(newOffer){
            console.log("CONTROLER: ",newOffer);
            offers.add(newOffer);
            $state.go('app.offers.my-offers');
        }
    });