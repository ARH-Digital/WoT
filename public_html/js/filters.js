'use strict';

var tankFilters = angular.module('tankFilters', []);


//      objFilter solution found on stackoverflow - 
//      Filters can only filter arrays and not objects within an object.
tankFilters.filter('objFilter', function() {
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


tankFilters.filter('numFilter', function() {
  return function(items, filter) {
      if (!filter){
          return items;
      }
      
      var result = [];
      angular.forEach(filter, function(filterVal, filterKey) {
          angular.forEach(items, function(item) {
              if (item.hasOwnProperty(filterKey) && item[filterKey] == filterVal) {
                  result.push(item);
              }else if(item.hasOwnProperty(filterKey) && filterVal == ""){
                  result.push(item);
              }
          });
      });

      return result;
    };
});


tankFilters.filter('tier', function() {
    return function(input) {
        switch(input){
            case 1: return 'images/levels/level_1.png';
                break;
            case 2: return 'images/levels/level_2.png';
                break;
            case 3: return 'images/levels/level_3.png';
                break;
            case 4: return 'images/levels/level_4.png';
                break;
            case 5: return 'images/levels/level_5.png';
                break;
            case 6: return 'images/levels/level_6.png';
                break;
            case 7: return 'images/levels/level_7.png';
                break;
            case 8: return 'images/levels/level_8.png';
                break;
            case 9: return 'images/levels/level_9.png';
                break;
            case 10: return 'images/levels/level_10.png';
                break;
        }
    };
});


tankFilters.filter('flag', function(){
    return function(input) {
        switch(input){
            case "U.S.A.": return 'images/nations/usa.png';
                break;
            case "U.S.S.R.": return 'images/nations/ussr.png';
                break;
            case "Germany": return 'images/nations/germany.png';
                break;
            case "China": return 'images/nations/china.png';
                break;
            case "France": return 'images/nations/france.png';
                break;
            case "U.K.": return 'images/nations/uk.png';
                break;
            case "Japan": return 'images/nations/japan.png';
                break;
        }
    };
});


tankFilters.filter('type', function(){
    return function(input) {
        switch(input){
            case "AT-SPG": return 'images/tanks/AT-SPG.png';
                break;
            case "SPG": return 'images/tanks/SPG.png';
                break;
            case "mediumTank": return 'images/tanks/mediumTank.png';
                break;
            case "lightTank": return 'images/tanks/lightTank.png';
                break;
            case "heavyTank": return 'images/tanks/heavyTank.png';
                break;
        }
    };
});
