'use strict';
/* JavaScript */

var app = angular.module('tankApp', ['ngAnimate'] );


app.controller('TankCtrl', [ '$scope', '$http', function($scope, $http){
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



//  objFilter solution found on stackoverflow - 
//      Filters can only filter arrays and not objects within an object.
app.filter('objFilter', function() {
  return function(items, filter) {
      if (!filter){
          return items;
      }  
      var result = {};
        angular.forEach( filter, function(filterVal, filterKey) {
          angular.forEach(items, function(item, key) {
              var fieldVal = item[filterKey];
              if (fieldVal && fieldVal.toLowerCase().indexOf(filterVal.toLowerCase()) > -1){
                  result[key] = item;
              }
          });
        });
        return result;
    };
});
