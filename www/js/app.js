"use strict";

var ionicParseSeed = angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform, config) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            Parse.initialize(config.APP_ID, config.JAVASCRIPT_ID);
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })
            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent': {
                        templateUrl: "templates/home/home.html",
                        controller: 'HomeCtrl'
                    }
                }
            }).state('app.home.wishes-feed', {
                url: "/wishes-feed",
                views: {
                    'wishes-feed': {
                        templateUrl: "templates/home/wishes-feed.html"
                    }
                }
            }).state('app.home.new-wish', {
                url: "/new-wish",
                views: {
                    'new-wish': {
                        templateUrl: "templates/home/new-wish.html"
                    }
                }
            }).state('app.wish-detail', {
                url: "/wish-detail/:wishId",
                views: {
                    'wish-detail': {
                        templateUrl: "templates/home/wish-detail.html"
                    }
                }
            })
            .state('app.profile', {
                url: "/profile",
                abstract: true,
                templateUrl: "templates/profile/profile.html"
            })
            .state('app.profile.about', {
                url: "/about",
                views: {
                    'about': {
                        templateUrl: "templates/profile/about.html"
                    }
                }
            }).state('app.profile.edit-profile', {
                url: "/edit-profile",
                views: {
                    'edit-profile': {
                        templateUrl: "templates/profile/edit-profile.html"
                    }
                }
            }).state('app.profile.history', {
                url: "/history",
                views: {
                    'history': {
                        templateUrl: "templates/profile/history.html"
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home/wishes-feed');
    });
