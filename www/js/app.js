
(function(){
    var app = angular.module('myApp', ['ionic']);

    app.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: '/tab',
                controller: 'TabsCtrl',
                templateUrl: 'templates/tabs.html'
            })

            .state('tabs.birds', {
                url: '/birds',
                views: {
                    'birds-tab': {
                        templateUrl: 'templates/birds.html',
                        controller: 'BirdsTabCtrl'
                    }
                }
            })

            .state('tabs.plants', {
                url: '/plants',
                views: {
                    'plants-tab': {
                        templateUrl: 'templates/plants.html',
                        controller: 'PlantsTabCtrl'
                    }
                }
            })

            .state('tabs.insects', {
                url: '/insects',
                views: {
                    'insects-tab': {
                        templateUrl: 'templates/insects.html',
                        controller: 'InsectsTabCtrl'
                    }
                }
            })

            .state('tabs.mammals', {
                url: '/mammals',
                views: {
                    'mammals-tab': {
                        templateUrl: 'templates/mammals.html',
                        controller: 'MammalsTabCtrl'
                    }
                }
            })

            .state('tabs.others', {
                url: '/others',
                views: {
                    'others-tab': {
                        templateUrl: 'templates/others.html',
                        controller: 'OthersTabCtrl'
                    }
                }
            })

            .state('login', {
                url: '/login',
                controller: 'LoginCtrl',
                templateUrl: 'templates/login.html'
            });

        $urlRouterProvider.otherwise('/tab');
    });

    app.controller('TabsCtrl', function($scope, $ionicSideMenuDelegate) {

        $scope.openMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }

    });

        //Birds page controller
    app.controller('BirdsTabCtrl', function($scope, $http,  $ionicSideMenuDelegate) {

        $scope.birdlists = [
            { title: 'Tui', id: 1 ,image: 'fan.jpg', description: 'The New Zealand fantail occurs in two colour morphs: pied and black.', point: 20},
            { title: 'Piwakawaka', id: 2 ,image: 'fan.jpg', description: 'The New Zealand fantail occurs in two colour morphs: pied and black.', point: 20},
            { title: 'Karearea', id: 3 ,image: 'fan.jpg', description: 'The New Zealand fantail occurs in two colour morphs: pied and black.', point: 20},
            { title: 'Riroriro', id: 4 ,image: 'fan.jpg', description: 'The New Zealand fantail occurs in two colour morphs: pied and black.', point: 20},
            { title: 'Routouwai', id: 5 ,image: 'fan.jpg', description: 'The New Zealand fantail occurs in two colour morphs: pied and black.', point: 20},
            { title: 'Putangitangi', id: 6 ,image: 'fan.jpg', description: 'The New Zealand fantail occurs in two colour morphs: pied and black.', point: 20}
        ];


        $http.get("http://www.w3schools.com/angular/customers.php")
            .success(function(response)

            {
                console.log(response);
                $scope.names = response.records;

            });

    });
            //Plants Page controller
    app.controller('PlantsTabCtrl', function($scope, $ionicSideMenuDelegate) {

    });
            //Insects page controller
    app.controller('InsectsTabCtrl', function($scope, $ionicSideMenuDelegate) {

    });

        //Mammals page controller
    app.controller('MammalsTabCtrl', function($scope, $ionicSideMenuDelegate) {

    });
        // other kind of staff controller
    app.controller('OthersTabCtrl', function($scope, $ionicSideMenuDelegate) {

    });



    app.controller('LoginCtrl', function($scope, $ionicSideMenuDelegate) {
        $scope.openMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }
    });
    app.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });


}());

