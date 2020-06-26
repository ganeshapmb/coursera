(function () {
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['categories'];
function CategoriesListController(categories) {
  var categoryCtrl = this;
  categoryCtrl.categories = categories;

  }

})();
