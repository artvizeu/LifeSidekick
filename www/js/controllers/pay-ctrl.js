lifeSidekickApp
    .controller('PayCtrl', function ($scope) {
        $scope.reviewData = {};

        $scope.doPay = function (reviewData) {
            if (isEmpty(reviewData)) {
                console.log('Empty review.');
            } else {
                // process review creation for user
                console.log(reviewData);
            }
        };

        function isEmpty(obj) {
            return Object.keys(obj).length == 0;
        }
    });