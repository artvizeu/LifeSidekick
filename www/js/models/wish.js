"use strict";

lifeSidekickApp
    .factory("Wish", function () {
        var Wish = Parse.Object.extend("Wish", {
            // Instance methods
            getName: function () {
                return this.get("name");
            },
            setName: function (name) {
                this.set("name", name);
            },
            getDescription: function () {
                return this.get("description");
            },
            setDescription: function (description) {
                this.set("description", description);
            },
            getPrice: function () {
                return this.get("price");
            },
            setPrice: function (price) {
                this.set("price", price);
            },
            getPhoto: function () {
                return this.get("photo");
            },
            setPhoto: function (photo) {
                this.set("photo", photo);
            },
            // Instance properties go in an initialize method
            initialize: function (attrs, options) {

            }
        });

        return Wish;
    });