(function(){
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive("foundItems", foundItemsDirective);


function foundItemsDirective() {
  var ddo = {
    templateUrl: 'menuList.html',
  scope: {
      found: '<',
      error: '<',
      onRemove: '&'
    },
    controller: MenuItemsDirectiveController,
    controllerAs: 'narrow',
    bindToController: true,
  };

  return ddo;
}


function MenuItemsDirectiveController(){
  var narrow = this;


}

NarrowItDownController.$inject['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var narrow = this; 

  narrow.searchTerm = "";
  narrow.found=[];
  narrow.error=false;
  narrow.findSearchItem = function(){

    MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(function(response){
      if(narrow.searchTerm.length==0 || response.length==0){
        narrow.error=true;
        narrow.found=[];
      }
      else{
        narrow.error=false;
        narrow.found=response;      
      }
      console.log(narrow.found);

    });
    
  }

  narrow.removeItems = function(itemIndex){
    narrow.found.splice(itemIndex, 1);
    if(narrow.found.length==0){
      narrow.error = true;
    }
  }

}


MenuSearchService.$inject['$http'];
function MenuSearchService($http){
  var service = this;

  service.getMatchedMenuItems= function(searchTerm){

  return $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      })
      .then(function (result) {

          // process result and only keep items that match

          var foundItems = [];
          for(var i=0; i<result.data.menu_items.length; i++){
            var itemdesc = result.data.menu_items[i].description;
            if(itemdesc.toLowerCase().indexOf(searchTerm)!=-1){
              foundItems.push(result.data.menu_items[i]);
            }
          }

          //return processed items
          return foundItems;
  });

  }
}
})();
