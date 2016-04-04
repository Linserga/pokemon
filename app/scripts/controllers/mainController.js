'use strict';

angular.module("pokemonApp")
    .controller("MainCtrl", ["$scope", "pokeService", "$http", function($scope, pokeService, $http){
        
       $scope.pokeShow = false;
       $scope.poke = {};
        
       $scope.showPokemon = function(pokemonId){
           $scope.poke = pokeService.get({id: pokemonId});
           $scope.pokeShow = true;
       }
       
       $scope.data = pokeService.get({limit: 12});
        
       $scope.loadMore = function(){
           $http.get("http://pokeapi.co" + $scope.data.meta.next)
            .success(function(data){
               $scope.data = data;
           });
       };       
    }]);