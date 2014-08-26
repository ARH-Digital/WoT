'use strict';
/* JavaScript */

var app = angular.module('tankApp', [
    'ngRoute',
    'ngAnimate',
    'tankFilters',
    'tankControllers'
    ] );

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/tanks', {
        templateUrl: 'partials/tank_list.html',
        controller: 'TankCtrl'
      }).
      when('/tanks/:tankID', {
        templateUrl: 'partials/tank.html',
        controller: 'tankPageCtrl'
      }).
      otherwise({
        redirectTo: '/tanks'
      });
  }]);
