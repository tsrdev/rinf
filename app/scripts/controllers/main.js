'use strict';

angular.module('rinfApp')
  .controller('MainCtrl', [
    '$scope',
    'User',
    function ($scope, User, $location) {
      $scope.activeTab = 'home';
    }
  ]);
