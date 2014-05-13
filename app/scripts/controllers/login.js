'use strict';

angular.module('rinfApp')
  .controller('LoginCtrl', function ($scope, User, $location) {
    $scope.activeTab = 'login';
    $scope.User = {};
    $scope.login = function () {
      User.login($scope.User, function (success) {
        $location.path('/templates/add');
      }, function (error) {

      })
    };
  });
