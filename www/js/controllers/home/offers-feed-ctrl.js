lifeSidekickApp
    .controller('OffersFeedCtrl', function ($scope, offers, popup) {
        $scope.offers = offers.getAll();

        $scope.onApply = function () {
            popup.confirmSimple(function () {
                console.log('To do job apply.');
            });
        }
    });