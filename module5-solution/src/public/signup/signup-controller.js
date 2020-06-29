(function(){

	'use strict';

	angular.module('public')
	.controller('signUpController', signUpController);

	signUpController.$inject = ['SignUpService'];
	function signUpController(SignUpService){
		var signupCtrl = this;

		signupCtrl.user={};
		signupCtrl.error = false;
		signupCtrl.noerror = false;

		signupCtrl.submit = function(){
			console.log("Form Submitted Successfully!");


			SignUpService.getFavDish(signupCtrl.user.dish)
			.then(function(response){
				signupCtrl.noerror=true;
				signupCtrl.error=false;
				signupCtrl.user.favdishinfo = response.data;
				SignUpService.saveUserData(signupCtrl.user);
			},
			function(error){
				signupCtrl.error=true;
				signupCtrl.noerror=false;

			});
		}
	}
})();