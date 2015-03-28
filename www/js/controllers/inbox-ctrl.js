"use strict";

lifeSidekickApp
    .controller('InboxCtrl', function($rootScope, $scope, $ionicSwipeCardDelegate) {
        var cardTypes = [{
            offerCreator: 'Ivan Ivanov',
            avatar: "img/img.jpg",
            name: 'Create some software',
            description: "some cool app",
            status: "New",
            date: new Date("March 28, 2015 11:13:00"),
            price: '3'
        }, {
            offerCreator: 'Ivan Ivanov',
            name: 'Create some software',
            avatar: "img/img.jpg",
            description: "some cool app",
            status: "New",
            date: new Date("March 28, 2015 11:13:00"),
            price: '4'
        }, {
            offerCreator: 'Ivan Ivanov',
            name: 'Create some software',
            avatar: "img/img.jpg",
            description: "some cool app",
            status: "New",
            date: new Date("March 28, 2015 11:13:00"),
            price: '5'
        }, {
            offerCreator: 'Ivan Ivanov',
            name: 'Create some software',
            avatar: "img/img.jpg",
            description: "some cool app",
            status: "New",
            date: new Date("March 28, 2015 11:13:00"),
            price: '6'
        }, {
            offerCreator: 'Ivan Ivanov',
            name: 'Create some software',
            avatar: "img/img.jpg",
            description: "some cool app",
            status: "New",
            date: new Date("March 28, 2015 11:13:00"),
            price: '7'
        }];

//        $scope.cards = Array.prototype.slice.call(cardTypes, 0, 1);
        $scope.cards = cardTypes;

        $scope.cardDestroyed = function(index) {
            $scope.cards.splice(index, 1);
        };

        $scope.addCard = function() {
            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        }
    }).controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
        $scope.goAway = function() {
            var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
            card.swipe();
        };
    });