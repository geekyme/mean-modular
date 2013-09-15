//Setting up route
window.app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/')

	$stateProvider
    .state('app', {
      url: "/",
      views: {
        "navbar": {
          templateUrl: "/tmpls/site/navbar"
        },
        "body": {
          templateUrl: "/tmpls/site/home"
        }
      }
    })
    .state('app.home', {
      url: "test",
      views: {
        "body@": {
          template: "lol"
        }
      }
    })
    .state('app.secret', {
      url: "secret",
      views: {
        "body@": {
          template: "Only Login-ed users can see this"
        }
      }
    })
    .state('app.article', {
      url: "articles",
      views: {
        "body@": {
          templateUrl: "tmpls/articles/list"
        }
      }
    })
    .state('app.article.create', {
      url: "/create",
      views: {
        "body@": {
          templateUrl: "tmpls/articles/create"
        }
      }
    })
    .state('app.article.edit', {
      url: "/:articleId/edit",
      views: {
        "body@": {
          templateUrl: "tmpls/articles/edit"
        }
      }
    })
    .state('app.article.view', {
      url: "/:articleId",
      views: {
        "body@": {
          templateUrl: "tmpls/articles/view"
        }
      }
    })
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    /*$locationProvider.html5Mode(true);*/
    $locationProvider.hashPrefix("!");
}]);

