'use strict';

angular.module("pokemonApp", ["ngRoute", "ngResource"])
    .config(function($routeProvider){        
        $routeProvider
            .when("/", {
                templateUrl: "app/views/main.html",
                controller: "MainCtrl"
            })
            .otherwise({redirectTo: "/"});
    });