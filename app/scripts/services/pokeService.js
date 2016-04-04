'use strict';

angular.module("pokemonApp")
    .factory("pokeService", ["$resource", function($resource){
        return $resource("http://pokeapi.co/api/v1/pokemon/:id");
    }]);