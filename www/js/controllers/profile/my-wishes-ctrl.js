"use strict";

lifeSidekickApp
    .controller('MyWishesCtrl', function($rootScope, $scope, $state, Wish) {
        $scope.user = $rootScope.currentUser;
        $scope.wishes = [];

        $scope.user.getWishes().forEach(function (wish) {
            wish.fetch({
                success: function (wish) {
                    $scope.wishes.push(wish);
                }
            });
        });

        //var query = new Parse.Query(Wish);
        //
        //query.equalTo("owner", $scope.user.id);
        //query.descending("createdAt");
        //query.find({
        //    success: function (wishes) {
        //        $scope.wishes = wishes;
        //    }
        //});
    });