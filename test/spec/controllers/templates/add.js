'use strict';

describe('Controller: TemplatesAddCtrl', function () {

  // load the controller's module
  beforeEach(module('rinfApp'));

  var TemplatesAddCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TemplatesAddCtrl = $controller('TemplatesAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
