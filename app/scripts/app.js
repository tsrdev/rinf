'use strict';

angular
  .module('rinfApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'api',
    "xeditable"
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/resumes', {
        title: "Resumes Index",
        templateUrl: '/views/resumes.html',
        controller: 'ResumesCtrl'
      })
      .when('/templates', {
        title: "Templates Index",
        templateUrl: '/views/templates.html',
        controller: 'TemplatesCtrl'
      })
      .when('/templates/add', {
        title: "Add Template",
        templateUrl: '/views/templates/add.html',
        controller: 'TemplatesAddCtrl'
      })
      .when('/templates/edit', {
        title: "Edit Template",
        templateUrl: '/views/templates/edit.html',
        controller: 'TemplatesEditCtrl'
      })
      .when('/resumes/add', {
        title: "Add Resume",
        templateUrl: '/views/resumes/add.html',
        controller: 'ResumesAddCtrl'
      })
      .when('/resumes/edit', {
        title: "Edit Resume",
        templateUrl: '/views/resumes/edit.html',
        controller: 'ResumesEditCtrl'
      })
      .when('/login', {
        title: "Login",
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        title: "Sign Up",
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run([
    'editableOptions',
    'User',
    '$rootScope',
    function (editableOptions, User, $rootScope) {
      editableOptions.theme = 'bs3';
      $rootScope.Page = {};
      $rootScope.$on('$routeChangeSuccess', function (event, current, past) {
        /**
         * Update the page title
         */
        $rootScope.Page.title = current.$$route.title;
      })
    }
  ]);
