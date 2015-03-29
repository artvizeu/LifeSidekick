lifeSidekickApp
    .controller('OffersFeedCtrl', function ($scope, offers, popup, Offer) {
        var query = new Parse.Query(Offer);
        $scope.offers = [];

        query.find({
            success: function (offers) {
                offers.forEach(function (offer) {
                    offer.getOwner().fetch();
                    $scope.offers.push(offer);
                });
            }
        });

        $scope.onApply = function () {
            popup.confirmSimple(function () {
                console.log('To do job apply.');
            });
        }
    });