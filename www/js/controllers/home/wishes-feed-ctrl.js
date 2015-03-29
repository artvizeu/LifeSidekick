"use strict";

lifeSidekickApp
    .controller('WishesFeedCtrl', function ($scope, Wish) {
        $scope.wishes = [];

        var query = new Parse.Query(Wish);

        query.descending("createdAt");

        query.find({
            success: function (wishes) {
                wishes.forEach(function (wish) {
                    wish.getOwner().fetch();
                    $scope.wishes.push(wish);
                });
            }
        });
    });