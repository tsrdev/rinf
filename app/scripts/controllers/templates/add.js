'use strict';

angular.module('rinfApp')
  .controller('TemplatesAddCtrl', function ($scope) {
    $scope.activeTab = 'addTemplate';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
