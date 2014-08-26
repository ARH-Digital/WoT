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
                });
            }
            
            var guns = [];
            var num;
            var val;
            for(num in $scope.tank.guns){
                val = $scope.tank.guns[num].module_id;
                $http({method: 'GET', 
                    url: 'http://api.worldoftanks.asia/wot/encyclopedia/tankguns/', 
                    params: {application_id: '840a965aa2a0d19550d6d2a03d63e955', language: 'en', module_id: val}
                }).success(function(data){
                    var gun = data.data;
                    guns.push(gun);
                    $scope.guns = guns;
                });
            }
            
            var engines = [];
            var num;
            var val;
            for(num in $scope.tank.engines){
                val = $scope.tank.engines[num].module_id;
                $http({method: 'GET', 
                    url: 'http://api.worldoftanks.asia/wot/encyclopedia/tankengines/', 
                    params: {application_id: '840a965aa2a0d19550d6d2a03d63e955', language: 'en', module_id: val}
                }).success(function(data){
                    var engine = data.data;
                    engines.push(engine);
                    $scope.engines = engines;
                });
            }
            
            var radios = [];
            var num;
            var val;
            for(num in $scope.tank.radios){
                val = $scope.tank.radios[num].module_id;
                $http({method: 'GET', 
                    url: 'http://api.worldoftanks.asia/wot/encyclopedia/tankradios/', 
                    params: {application_id: '840a965aa2a0d19550d6d2a03d63e955', language: 'en', module_id: val}
                }).success(function(data){
                    var radio = data.data;
                    radios.push(radio);
                    $scope.radios = radios;
                });
            }
            
            var chassis = [];
            var num;
            var val;
            for(num in $scope.tank.chassis){
                val = $scope.tank.chassis[num].module_id;
                $http({method: 'GET', 
                    url: 'http://api.worldoftanks.asia/wot/encyclopedia/tankchassis/', 
                    params: {application_id: '840a965aa2a0d19550d6d2a03d63e955', language: 'en', module_id: val}
                }).success(function(data){
                    var chassi = data.data;
                    chassis.push(chassi);
                    $scope.chassis = chassis;
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