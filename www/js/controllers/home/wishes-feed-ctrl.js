"use strict";

lifeSidekickApp
    .controller('WishesFeedCtrl', function ($scope) {
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
    });