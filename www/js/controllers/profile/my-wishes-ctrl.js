"use strict";

lifeSidekickApp
    .controller('MyWishesCtrl', function($rootScope, $scope) {
        $scope.user = $rootScope.currentUser;
        $scope.wishes = [];
        var wishes = $scope.user.getWishes();

        wishes.forEach(function (wish) {
            wish.fetch()
                .then(function(fetchedWish){

                });
        });

        //$scope.wishes = [
        //    {
        //        ownerName: "pesho",
        //        name: "Macbook Pro",
        //        description: "simple test wish",
        //        workedMoney: 3,
        //        price: 12,
        //        id: 0,
        //        date: new Date(),
        //        picture: "http://www.replacebase.co.uk/ekmps/shops/replacebase/resources/Design/macbook-pro.jpg"
        //    },
        //    {
        //        ownerName: "petran",
        //        name: "New House",
        //        description: "simple test wish",
        //        workedMoney: 1500,
        //        price: 1555,
        //        id: 1,
        //        date: new Date(),
        //        picture: "http://suburbanfinance.com/wp-content/uploads/2013/04/streetinfo.jpg"
        //    },
        //    {
        //        ownerName: "gosho",
        //        name: "House",
        //        description: "sihple test wish",
        //        workedMoney: 13,
        //        price: 50,
        //        id: 2,
        //        date: new Date(),
        //        picture: "http://media.caranddriver.com/images/media/51/dissected-lotus-based-infiniti-emerg-e-sports-car-concept-top-image-photo-451994-s-original.jpg"
        //    }
        //];
    });