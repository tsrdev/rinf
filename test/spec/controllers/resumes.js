'use strict';

describe('Controller: ResumesCtrl', function () {

  // load the controller's module
  beforeEach(module('rinfApp'));

  var ResumesCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResumesCtrl = $controller('ResumesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
