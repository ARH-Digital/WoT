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

tankControllers.controller('tankPageCtrl', ['$scope', '$http', function($scope, $http){
        var url = window.location.href;
        var info = url.split('/');
        var need = info.length-1;
        var id = info[need];
        
        $http({method: 'GET', 
            url: 'http://api.worldoftanks.asia/wot/encyclopedia/tankinfo/', 
            params: {application_id: '840a965aa2a0d19550d6d2a03d63e955', language: 'en', tank_id: id}
        })
        .success(function(data){
            $scope.tank = data.data[id];
            console.log($scope.tank);
            var turrets = [];
            var num;
            var val;
            for(num in $scope.tank.turrets){
                val = $scope.tank.turrets[num].module_id;
                $http({method: 'GET', 
                    url: 'http://api.worldoftanks.asia/wot/encyclopedia/tankturrets/', 
                    params: {application_id: '840a965aa2a0d19550d6d2a03d63e955', language: 'en', module_id: val}
                }).success(function(data){
                    var turret = data.data;
                    turrets.push(turret);
                    $scope.turrets = turrets;
                    console.log($scope.turrets);
                });
            }
            
        });
        
}]);


/*
 *  var val;
            for(val in tempTank){
                //console.log(val);
                
                $http({method: 'GET', 
                    url: 'http://api.worldoftanks.asia/wot/encyclopedia/tankinfo/', 
                    params: {application_id: '840a965aa2a0d19550d6d2a03d63e955', language: 'en', tank_id: val}
                })
                .success(function(data){
                    var tonks = data.data;
            
                    var num;
                    
                    
                    for(num in tonks){
                        if(tonks.hasOwnProperty(num)){
                            var img = tonks[num].image;
                            var name = tonks[num].name_i18n;
                            var nation = tonks[num].nation_i18n;
                            var tier = tonks[num].level;
                            var type = tonks[num].type_i18n;
                            all.push("{'image' : '"+img+"', 'name_i18n' : '"+name+"', 'nation_i18n' : '"+nation+"', 'level' : '"+tier+"', 'type_i18n' : '"+type+"' }");
                        }
                    }
                    
                });
                
                //$scope.tanks = tempTank;
                //$scope.tanks.images = tempImg;
                //console.log($scope.tanks);
                //console.log($scope.tanks.images);
                
            }
 */