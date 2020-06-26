(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/Data/templates/categories.template.html',
  bindings: {
    clist: '<'
  }
});

})();
