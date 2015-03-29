"use strict";

lifeSidekickApp
    .controller('MyWishesCtrl', function($rootScope, $scope) {
        $scope.user = $rootScope.currentUser;
        $scope.wishes = [];

        $scope.user.get("wishes").forEach(function (wish) {
            wish.fetch({
                success: function (wish) {
                    $scope.wishes.push(wish);
                }
            });
        });
    });