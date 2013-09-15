window.angular.module('mean.site.header_ctrl', [])
  .controller('NavbarCtrl', ['$scope', 'Auth',
    function($scope, Auth) {
    	$scope.auth = Auth;
    	$scope.navbarEntries = [
    		{
    			"title" : "Secret Link",
    			"link" : "secret"
    		},
            {
                "title": "Articles",
                "link": "articles"
            },
            {
                "title": "Create New Article",
                "link": "articles/create"
            },
            {
                "title" : "Nothing",
                "link" : "nothing"
            },
            {
                "title": "test",
                "link": "test"
            }
    	];
    }]);