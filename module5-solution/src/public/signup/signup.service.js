(function(){

	'use strict';

	angular.module('public')
	.service('SignUpService', SignUpService);

	SignUpService.$inject = ['$http', 'ApiPath'];
	function SignUpService($http, ApiPath){
		var service = this;
		service.user= {};

		service.getFavDish = function(short_name){
			return $http.get(ApiPath + '/menu_items/' + short_name + '.json');
		}

		service.saveUserData = function(userdata){
			service.user = angular.copy(userdata);
			console.log(service.user);
		}

		service.getUserData = function(){
			return service.user;
		}
	}
})();