'use strict';

/* Controllers */

var tankControllers = angular.module('tankControllers', []);

tankControllers.controller('TankCtrl', [ '$scope', '$http', function($scope, $http){
    $http({method: 'GET', 
        url: 'tanksJSON.info'
        })
        .success(function(data){
            $scope.tanks = data.data;                
        })
        .error(function(){
            alert('Unable to retrieve data at this time. Please try again later.');
        });
            
    
}]);