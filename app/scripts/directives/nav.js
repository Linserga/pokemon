'use strict';

angular.module("pokemonApp")
    .directive("navigation", function(){
        return {
            restrict: "E",
            templateUrl: "app/views/partials/nav.html"
        };
    });