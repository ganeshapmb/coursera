(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope) {
		// body... 

	$scope.cal= function () {
		var s = $scope.brunch;
		
		
		var r =/[,]/;
		var words = s.split(r);
		console.log(words);

		if (words.length> 3) {
			return $scope.text = "Too much!"
		}
		else {
			return $scope.text = "Enjoy!";
		}
		};

	}

})();