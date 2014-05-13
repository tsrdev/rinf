'use strict';

angular.module('rinfApp')
  .controller('ResumesAddCtrl', function ($scope) {
    $scope.activeTab = 'addResume';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
