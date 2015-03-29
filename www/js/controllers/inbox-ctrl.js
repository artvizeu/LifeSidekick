"use strict";

lifeSidekickApp
    .controller('InboxCtrl', function($rootScope, $scope, $state, Invite) {

        var query = new Parse.Query(Invite);

        $scope.offers = [];

        query.equalTo("invitedUser", $rootScope.currentUser);

        query.find({
            success: function (invites) {
                invites.forEach(function (invite) {
                    invite.getOffer().fetch({
                        success: function (offer) {
                            offer.get("owner").fetch();
                            $scope.offers.push(offer);
                        }
                    });
                });
            }
        });

        $scope.acceptOffer = function (offer, index) {
            offer.set("acceptedUser", ($rootScope.currentUser));
            offer.set("status", ("pending"));
            offer.save(null, {
                success: function (offer) {
                    console.log(offer);
                    var query = new Parse.Query(Invite);

                    query.equalTo("offer", offer);

                    query.find({
                        success: function (invites) {
                            invites.forEach(function (invite) {
                                invite.destroy();
                            });

                            $scope.offers.splice(index, 1);
                        }
                    });
                }
            });
        };

        $scope.decline=function (index) {
            $scope.offers.splice(index, 1);
        }
    });