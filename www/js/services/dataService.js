"use strict";

lifeSidekickApp
    .factory("dataService", function ($rootScope, Offer, Wish) {

        var registerRefreshEvent = function (eventName, callback) {
            $rootScope.$on(eventName, function() {
                callback();
            });
        };

        // Offer data
        var baseOfferQuery = function () {
            var query = new Parse.Query(Offer);
            query.include("invitedUsers");
            query.include("owner");
            query.include("acceptedUser");
            query.descending("createdAt");

            return query;
        };

        var findOffersByAcceptedUserAndStatus = function (user, status) {
            var query = baseOfferQuery();

            query.equalTo("acceptedUser", user);

            if (status != null) {
                query.equalTo("status", status);
            }

            return query.find();
        };

        var findDoneOffersByAcceptedUser = function (user) {
            return findOffersByAcceptedUserAndStatus(user, "done");
        };

        var findPendingOffersByAcceptedUser = function (user) {
            return findOffersByAcceptedUserAndStatus(user, "pending");
        };

        var findOffersByUser = function (user) {
            var query = baseOfferQuery();
            query.equalTo("owner", user);

            return query.find();
        };

        var findLastOffers = function () {
            var query = baseOfferQuery();

            return query.find();
        };

        // Wish data
        var baseWishQuery = function () {
            var query = new Parse.Query(Wish);
            query.include("owner");
            query.descending("createdAt");

            return query;
        };

        var findLastWishes = function () {
            var query = baseWishQuery();

            return query.find();
        };

        var findWishById = function (wishId) {
            var query = baseWishQuery();

            return query.get(wishId);
        };

        var findWishesByUser = function (user) {
            var query = baseWishQuery();
            query.equalTo("owner", user);

            return query.find();
        };

        return {
            registerRefreshEvent: registerRefreshEvent,
            findLastOffers: findLastOffers,
            findDoneOffersByAcceptedUser: findDoneOffersByAcceptedUser,
            findPendingOffersByAcceptedUser: findPendingOffersByAcceptedUser,
            findOffersByUser: findOffersByUser,
            findLastWishes: findLastWishes,
            findWishById: findWishById,
            findWishesByUser: findWishesByUser
        }
    });