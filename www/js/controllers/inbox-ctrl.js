"use strict";

lifeSidekickApp
    .controller('InboxCtrl', function($rootScope, $scope, $state, dataService) {
        $scope.invites = [];
        $scope.offers = [];

        dataService.findInvitesByInvitedUser($rootScope.currentUser)
            .then(function (invites) {
                $scope.invites = invites;
            }, function (error) {
                console.log(error);
            });

        $scope.acceptOffer = function (invite, index) {
            var offer = invite.get("offer");
            offer.set("acceptedUser", ($rootScope.currentUser));
            offer.set("status", ("pending"));
            offer.save()
                .then(function (offer) {
                    dataService.findInvitesByOffer(offer)
                        .then(function (invites) {
                            invites.forEach(function (invite) {                                                                                                                                                                                                                                                                               
                                invite.destroy();
                            });
                        });

                    $scope.invites.splice(index, 1);
                    $state.go($state.current, {}, {reload: true});
                }, function (error) {
                    console.log(error);
                });
        };

        $scope.decline = function (index) {
            $scope.invites[index].destroy();
            $scope.invites.splice(index, 1);
            $state.go($state.current, {}, {reload: true});
        }
    });