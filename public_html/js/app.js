'use strict';
/* JavaScript */

var app = angular.module('tankApp', ['ngAnimate'] );


app.controller('TankCtrl', [ '$scope', '$http', function($scope, $http){
    $http({method: 'GET', 
        url: 'tanksJSON.info'
        })
        .success(function(data){
            $scope.tanks = data.data;
    console.log($scope.tanks);
//            var tempImg;
//            console.log(tempTank);

//            var all = [];
//            
//            var val;
//            for(val in tempTank){
//                //console.log(val);
//                
//                $http({method: 'GET', 
//                    url: 'http://api.worldoftanks.asia/wot/encyclopedia/tankinfo/', 
//                    params: {application_id: '840a965aa2a0d19550d6d2a03d63e955', language: 'en', tank_id: val}
//                })
//                .success(function(data){
//                    var tonks = data.data;
//                    
//                    var num;
//                    
//                    
//                    for(num in tonks){
//                        if(tonks.hasOwnProperty(num)){
//                            var img = tonks[num].image;
//                            var name = tonks[num].name_i18n;
//                            var nation = tonks[num].nation_i18n;
//                            var tier = tonks[num].level;
//                            var type = tonks[num].type_i18n;
//                            all.push("{'image' : '"+img+"', 'name_i18n' : '"+name+"', 'nation_i18n' : '"+nation+"', 'level' : '"+tier+"', 'type_i18n' : '"+type+"' }");
//                        }
//                    }
//                    
//                });
//                
//                //$scope.tanks = tempTank;
//                //$scope.tanks.images = tempImg;
//                //console.log($scope.tanks);
//                //console.log($scope.tanks.images);
//                
//            }setTimeout(function(){
//                $scope.tanks = all;
//                    console.log(all);
//                    console.log($scope.tanks[1]["image"]);
//                }, 30000);
                
                
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
