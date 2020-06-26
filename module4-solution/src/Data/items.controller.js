(function () {
'use strict';

angular.module('data')
.controller('itemsListController', itemsListController);

itemsListController.$inject = ['items'];
function itemsListController(items) {
  var itemCtrl = this;
  itemCtrl.items = items;
}

})();
