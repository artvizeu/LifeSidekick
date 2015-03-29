lifeSidekickApp
    .controller('OfferSendCtrl', function ($scope, modal, loading, popup, User) {
        $scope.sendOffer = function (user) {
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