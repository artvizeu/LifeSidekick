"use strict";

lifeSidekickApp
    .controller('NewWishCtrl', function ($rootScope, $scope, $state, Wish) {
        $scope.newWishData = {};

        $scope.createNewWish = function (newWishData) {
            var wish = new Wish();
            wish.setName(newWishData.name);
            wish.setDescription(newWishData.description);
            wish.setPrice(newWishData.price);
            wish.save(null, {
                success: function () {
                    $rootScope.currentUser.getWishes().push(wish);
                    $rootScope.currentUser.setWishes($rootScope.currentUser.getWishes());
                    $rootScope.currentUser.save(null, {
                        success: function () {
                            $state.go("app.profile.about.my-wishes");
                        }
                    });
                },
                error: function () {

                }
            });
        }
    });