'use strict';

app.controller('HomeController',['$scope','UserService','$rootScope',   
       function($scope,UserService,$rootScope){
	console.log("HomeController...")
	var self = this;
	self.getCurrentUser = function()
	{
		console.log("Loading Current user if already logged in")
	console.log("Current user:"+$rootScope.currentUser)
	alert("message"+$rootScope.currentUser.id)
	if(!$rootScope.currentUser)
		{
		alert("hello")
		console.log("User not logged in")
		$rootScope.currentUser="";
		
		}
		return $rootScope.currentUser;
	}
	self.getCurrentUser();
	}]);