"use strict";

lifeSidekickApp
    .controller('MyWishesCtrl', function($rootScope, $scope, $state, Wish) {
        $scope.user = $rootScope.currentUser;
        $scope.wishes = [];

        var query = new Parse.Query(Wish);

        if($scope.user.getWishes()){
            $scope.user.getWishes().forEach(function (wish) {
                query.get(wish.id, {
                    success: function (wish) {
                        $scope.wishes.push(wish);
                    }
                })
            });
        }
    });