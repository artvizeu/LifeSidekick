"use strict";

lifeSidekickApp
    .controller('NewOfferCtrl', function($rootScope, $scope, $state, Offer) {
        $scope.newOfferData = {};

        $scope.createNewOffer = function (newOfferData) {
            var offer = new Offer();
            offer.setName(newOfferData.name);
            offer.setDescription(newOfferData.description);
            offer.setPrice(newOfferData.price);
            offer.setOwner($rootScope.currentUser);
            offer.setStatus("new");
            offer.setInvitedUsers([]);
            offer.save(null, {
                success: function (offer) {
                    $rootScope.currentUser.getOffers().push(offer);
                    $rootScope.currentUser.setOffers($rootScope.currentUser.getOffers());
                    $rootScope.currentUser.save(null, {
                        success: function () {
                            $state.go("app.profile.about.my-offers");
                        }
                    });
                },
                error: function () {

                }
            });
        }
    });