'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('One should equal one.', function () {
    expect(1).toBe(1);
  });
});
