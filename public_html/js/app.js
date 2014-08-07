'use strict';
/* JavaScript */

var app = angular.module('tankApp', ['ngAnimate'] );


app.controller('TankCtrl', [ '$scope', '$http', function($scope, $http){
    $http({method: 'GET', 
        url: 'http://api.worldoftanks.asia/wot/encyclopedia/tanks/', 
        params: {application_id: '840a965aa2a0d19550d6d2a03d63e955', language: 'en'}
        })
        .success(function(data){
            $scope.tanks = data.data;
    
        console.log($scope.tanks);
        
        var prop;
            var val;
            for(val in $scope.tanks){
                console.log(val);
                
                $http({method: 'GET', 
                    url: 'http://api.worldoftanks.asia/wot/encyclopedia/tankinfo/', 
                    params: {application_id: '840a965aa2a0d19550d6d2a03d63e955', language: 'en', tank_id: val}
                })
                .success(function(data){
                    $scope.tonks = data.data;
                    var num;
                    
                    for(num in $scope.tonks){
                        if($scope.tonks.hasOwnProperty(num)){
                            prop = $scope.tonks[num];
                            //console.log(prop.image);
                            $scope.tanks.images = prop.image;
                        }
                    }console.log($scope.tanks.images);
                });
                
            }
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
