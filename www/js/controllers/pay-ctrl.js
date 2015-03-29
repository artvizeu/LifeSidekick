lifeSidekickApp
    .controller('PayCtrl', function ($scope, $stateParams, $state, Offer) {
        $scope.reviewData = {};

        var offerId = $stateParams.offerId;

        $scope.doPay = function (reviewData) {
            var query = new Parse.Query(Offer);

            query.get(offerId, {
                success: function (offer) {
                    offer.set("comment", reviewData.comment);
                    offer.set("rating", reviewData.rating);
                    offer.set("status", "done");
                    offer.save(null, {
                        success: function () {
                            $state.go('app.profile.about.my-offers');
                        }
                    });
                }
            });
        };
    });