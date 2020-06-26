(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/Data/templates/home.template.html'
  })

  // Categories list page
  .state('CategoriesList', {
    url: '/categories',
    templateUrl: 'src/Data/templates/main-category.template.html',
    controller: 'CategoriesListController as categoryCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function(result){
          return result.data;
        });
      }]
    }
  })

  //Items list page
  .state('itemsList', {
    url: '/items/{shortname}',
    templateUrl: 'src/Data/templates/main-menuitems.template.html',
    controller: 'itemsListController as itemCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function($stateParams, MenuDataService){
              return MenuDataService.getItemsForCategory($stateParams.shortname)
              .then(function(result){
                return result.data.menu_items;
              });
            }]
    }
  });
    
}

})();
