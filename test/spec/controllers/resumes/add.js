'use strict';

describe('Controller: ResumesAddCtrl', function () {

  // load the controller's module
  beforeEach(module('rinfApp'));

  var ResumesAddCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResumesAddCtrl = $controller('ResumesAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
