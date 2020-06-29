(function(){

	'use strict'

	angular.module('public')
	.controller('InfoController', InfoController);

	InfoController.$inject = ['SignUpService', 'ApiPath'];

	function InfoController(SignUpService, ApiPath){

		var infoCtrl = this;
		infoCtrl.basepath = ApiPath;
		infoCtrl.signin = false;
		infoCtrl.user = SignUpService.getUserData();
		console.log("User Info:",infoCtrl.user);

		if(angular.equals(infoCtrl.user, {})){
			infoCtrl.signin = false;
		}else{
			infoCtrl.signin = true;
		}
		console.log(infoCtrl.signin);

	}
})();