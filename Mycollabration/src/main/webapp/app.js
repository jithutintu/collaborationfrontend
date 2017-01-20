var app=angular.module('myApp',['ngRoute', 'ngCookies']);
app.config(function($routeProvider){
	
	$routeProvider
	
	.when('/',{ 
		templateUrl : 'c_home/home.html',
		controller : 'HomeController'
	})
.when('/register',{
    templateUrl : 'c_user/register.html',
    controller : 'UserController'
    })
    .when('/login',{
    	templateUrl :'c_user/login.html',
    	controller : 'UserController'
    })
    
     .when('/myprofile',{
    	templateUrl :'c_user/my_profile.html',
    	controller : 'UserController'
    })
    
     .when('/adminhome',{
	templateUrl : 'c_admin/adminhome.html'
    })
    
    .when('/manage_users',{  
		templateUrl : 'c_admin/manage_users.html',
		controller : 'UserController'
	})
	 .when('/manage_friends',{  
		templateUrl : 'c_admin/manage_friends.html',
		controller : 'UserController'
	})
	 .when('/logout',{
	templateUrl : 'c_home/logout.html',
	controller : 'HomeController'
    })
	/*******************Friends****************/
.when('/search_friend',{
		templateUrl : 'c_friend/search_friend.html',
		controller : 'FriendController'
	})
.when('/view_friend',{
		templateUrl : 'c_friend/view_friend.html',
		controller : 'FriendController'
	})
	.when('/myfriends',{
		templateUrl : 'c_friend/myFriends.html',
		controller : 'FriendController'
	})
	.when('/add_friend',{
	templateUrl : 'c_friend/add_friend.html',
	controller : 'FriendController'
	})
	
		
    .when('/chat',{
	templateUrl : 'c_chat/chat.html',
	controller : 'ChatController'
   })
	 .when('/chat_forum',{
	templateUrl : 'c_chat_forum/chat_forum.html',
	controller : 'ChatForumController'
   })
   
	
	/*******blog**********/
	
	.when('/create_blog',{
	templateUrl : 'c_blog/create_blog.html',
	controller : 'BlogController'
	})
	
   .when('/list_blog',{
	templateUrl : 'c_blog/list_blog.html',
		controller : 'BlogController'	
   })

   .when('/view_blog',{
	templateUrl : 'c_blog/view_blog.html',
	controller : 'BlogController'
	})
/******************Job related*******************************/
  .when('/view_applied_jobs',{
	templateUrl : 'c_job/view_applied_jobs.html',
	controller : 'JobController'
	})
	
   .when('/post_job',{
	templateUrl : 'c_job/post_job.html',
		controller : 'JobController'	
    })
    
   .when('/view_job_details',{
	templateUrl : 'c_job/view_job_details.html',
	controller : 'JobController'
	})
	
   .when('/search_job',{
	templateUrl : 'c_job/search_job.html',
	controller : 'JobController'	
    })
	/******************Job related*******************************/
  .when('/view_applied_jobs',{
	templateUrl : 'c_job/view_applied_jobs.html',
	controller : 'JobController'
	})
	
   .when('/post_job',{
	templateUrl : 'c_job/post_job.html',
		controller : 'JobController'	
    })
    
   .when('/view_job_details',{
	templateUrl : 'c_job/view_job_details.html',
	controller : 'JobController'
	})
	
   .when('/search_job',{
	templateUrl : 'c_job/search_job.html',
	controller : 'JobController'	
    })
	
	
	
	
	
});


app.run(function($rootScope, $location, $cookieStore, $http){

$rootScope.currentUser = $cookieStore.get('currentUser') ||{};
if($rootScope.currentUser){
	 $http.defaults.headers.common['Authorization']='Basic'+$rootScope.currentUser;
	 }


})




