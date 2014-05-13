'use strict';

angular.module('rinfApp')
  .controller('RegisterCtrl', function ($scope, User, $log, $location) {
    /**
     * Set the active tab
     * @type {string}
     */
    $scope.activeTab = 'register';
    /**
     * Initialize the User object
     * @type {{}}
     */
    $scope.User = {};
    /**
     * Initialize the messages array
     * @type {Array}
     */
    $scope.Messages = [];
    /**
     * Provide the path to the initial (registration form) panel
     * @type {{includePath: string}}
     */
    $scope.Panel = {includePath: '/views/partials/panels/register.html'};
    /**
     * Persist the user entry to the backend
     */
    $scope.register = function () {
      /**
       * Create the user by using the api service
       */
      User.create($scope.User, function (success) {
        /**
         * Override the User model
         */
        $scope.User = success;
        /**
         * Push a new success message into the array
         */
        $scope.Messages.push({type: 'success'});
        /**
         * Override the path for the main panel
         * @type {string}
         */
        $scope.Panel.includePath = '/views/partials/panels/thanks.html';

      }, function (error) {
        $scope.Messages.push({type: 'error'});
      })
    }
    /**
     * Remove a message box from the scope
     * @param index
     */
    $scope.closeMsg = function (index) {
      /**
       * Remove the message with the given index from the scope
       */
      $scope.Messages.splice(index, 1);
      /**
       * Redirect the user to the login page
       */
      $location.path('/');
    }
  });
