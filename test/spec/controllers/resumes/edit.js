'use strict';

describe('Controller: ResumesEditCtrl', function () {

  // load the controller's module
  beforeEach(module('rinfApp'));

  var ResumesEditCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResumesEditCtrl = $controller('ResumesEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
