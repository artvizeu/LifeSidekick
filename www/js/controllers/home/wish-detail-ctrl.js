"use strict";

lifeSidekickApp
    .controller('WishDetailCtrl', function ($scope, $state, $stateParams, Wish) {
        $scope.wishes = [
            {
                username: "pesho",
                name: "first",
                description: "simple test wish",
                workedMoney: 3,
                price: 12,
                id: 0
            },
            {
                username: "petran",
                name: "second",
                description: "simple test wish",
                workedMoney: 1500,
                price: 1555,
                id: 1
            },
            {
                username: "gosho",
                name: "third",
                description: "sihple test wish",
                workedMoney: 13,
                price: 50,
                id: 2
            }
        ];

//        $scope.wish = $scope.wishes[$stateParams.wishId];

        var query = new Parse.Query(Wish);
        query.get($stateParams.wishId, {
            success: function (wish) {
                $scope.wish = wish;
            }
        });

//        $scope.calculateProgress = function (wish) {
//            return (wish.workedMoney / wish.price) * 100;
//        };

        $scope.navigateBack = function () {
            if ($stateParams.statePath == "my-wishes") {
                $state.go("app.profile.about.my-wishes");
            } else {
                $state.go("app.home.wishes-feed");
            }
        };
    });