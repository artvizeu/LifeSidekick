lifeSidekickApp
    .controller('OffersFeedCtrl', function ($scope, offers, popup, Offer) {
        $scope.offers = [];

        var query = new Parse.Query(Offer);

        query.descending("createdAt");
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