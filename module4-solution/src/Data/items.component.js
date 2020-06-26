(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/Data/templates/menuitems.template.html',
  bindings: {
    ilist: '<'
  }
});

})();
