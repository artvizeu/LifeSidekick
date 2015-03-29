lifeSidekickApp
    .controller('OfferSendCtrl', function ($scope, $state, $stateParams, modal, loading, popup, User, Offer, Invite) {
        $scope.users = [];

        $scope.offer = {};

        var offerId = $stateParams.offerId;

        console.log(offerId);

        $scope.sendOffer = function (user) {

            var query = new Parse.Query(Offer);

            query.get(offerId, {
                success: function (offer) {
                    var invite = new Invite();
                    invite.setInvitedUser(user);
                    invite.setOffer(offer);
                    invite.save(null, {
                        success: function () {
                            $state.go('app.profile.about.my-offers');
                        }
                    });
                }
            });

            console.log('Sending offer to - ' + user.getUsername());
        };

        var query = new Parse.Query(User);
        query.notEqualTo('username', User.current().getUsername());
        query.find({
            success: function (users) {
                $scope.users = users;
            },
            error: function (error) {
                console.log(error);
            }
        });
    });