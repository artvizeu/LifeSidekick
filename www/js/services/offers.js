/**
 * Created by hoangnguyen on 3/28/15.
 */

lifeSidekickApp
    .factory("offers", function () {
        var offers =[];

        offers.push({
            "name": "Write some Software",
            "description":"- Add newsletter and wholesale modules\n- Remove some tables",
            "status": "New",
            "date": new Date("March 28, 2015 11:13:00"),
            "owner": "Pesho",
            "price": 15
        });

        offers.push({
            "name": "Babysit",
            "description":"Girls only",
            "status": "New",
            "date": new Date("March 28, 2015 11:13:00"),
            "owner": "Gosho",
            "price": 1500
        });

        offers.push({
            "name": "Write some Software",
            "description":"- Add newsletter and wholesale modules\n- Remove some tables",
            "status": "Done",
            "date": new Date("March 28, 2015 11:13:00"),
            "owner": "Dragan",
            "price": 266
        });

        offers.push({
            "name": "Babysit",
            "description":"Girls only",
            "status": "New",
            "date": new Date("March 28, 2015 11:13:00"),
            "owner": "Mariq",
            "price": 999
        });

        return {
            getAll: function(){
                return offers;
            },
            add: function(newOffer){
                console.log(newOffer);
                var offer={
                    "name": newOffer.name,
                    "description":newOffer.description,
                    "status": "New",
                    "date": new Date(),
                    "price": newOffer.price
                };

                offers.push(offer);
            }
        }
    });
