"use strict";

lifeSidekickApp
    .controller('InboxCtrl', function($rootScope, $scope, $ionicSwipeCardDelegate, User) {

        var offers = [{
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
        $scope.offers=offers;
        $scope.decline=function(index){
            $scope.offers.splice(index, 1);
        }
    });