"use strict";

lifeSidekickApp
    .controller('MyWishesCtrl', function($rootScope, $scope, $state, Wish) {
        $scope.user = $rootScope.currentUser;
        $scope.wishes = [];

        var query = new Parse.Query(Wish);

        query.equalTo("owner", $scope.user.id);
        query.descending("createdAt");
        query.find({
            success: function (wishes) {
                $scope.wishes = wishes;
            }
        });
    });