window.angular.module('mean.site.home_ctrl', [])
  .controller('HomeCtrl', ['$scope', 'Auth',
    function($scope, Auth) {
      $scope.greeting = "Konichiwa!"
      $scope.user = Auth.user
    }])
