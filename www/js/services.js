/**
 * Created by yar 
 */
angular.module('ionicApp.services', [])

    /**
     * Factory for storing/retrieving/containing our items from API call
     */
    .factory('$items', function ($q, $http) {
        var self = this;

        var itemList = [];  //@todo move to localstorage for longer caching/offline mode

        /**
         *
         * @returns {*} ItemList
         */
        self.getList = function () {
            var defer = $q.defer();

                if (itemList.length <= 0) {
                    // console.log("Requesting items from server")
                    $http.get('http://zooapi.nzhost.me/items').success(function (items) {

                        //self.current_campaigns = campaignData;

                        //save our list
                        // console.log("items response", items)
                        defer.resolve(items.data);
                    });
                } else {

                    // console.log("loaded itemList from memory");
                    defer.resolve(itemList);
                }


            return defer.promise;
        };
        return self;
    });