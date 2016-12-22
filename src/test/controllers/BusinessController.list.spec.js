describe('Business List Controller', function () {

  var BusinessService;
  var controller;
  var scope;
  var $httpBackend;

  var response = {
    businesses: [],
    pages: {
      first: "firstLink",
      last: "lastLink",
      next: "nextLink",
      prev: "prevLink"
    }
  }

  beforeEach(module('BlurAdmin'));

  beforeEach(inject(function (_BusinessService_, $controller, $rootScope, _$httpBackend_, $q) {
    BusinessService = _BusinessService_;
    spyOn(BusinessService, "load").and.callFake(function(perPage, url) {
      var deferred = $q.defer();
      deferred.resolve(response);
      return deferred.promise;
    });
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;

    var createController = function() {
      return $controller('BusinessController.list', {
        'BusinessService': BusinessService,
        '$scope': scope
      });
    };

    controller = createController();
  }));

  it('should exist', function () {
    expect(BusinessService).toBeDefined();
    expect(scope).toBeDefined();
  });

  it('should set the pagination links', function() {
    expect(scope.data.firstPage).not.toBeDefined();
    expect(scope.data.lastPage).not.toBeDefined();
    expect(scope.data.nextPage).not.toBeDefined();
    expect(scope.data.prevPage).not.toBeDefined();
    scope.$digest();
    expect(scope.data.firstPage).toBeDefined();
    expect(scope.data.lastPage).toBeDefined();
    expect(scope.data.nextPage).toBeDefined();
    expect(scope.data.prevPage).toBeDefined();
  });

  it('should load from pagination links if invoked', function() {
    scope.$digest();
    expect(scope.data.smartTablePageSize).toBe(50);

    scope.firstPage();
    expect(BusinessService.load).toHaveBeenCalledWith(50, response.pages.first);

    scope.lastPage();
    expect(BusinessService.load).toHaveBeenCalledWith(50, response.pages.last);

    scope.nextPage();
    expect(BusinessService.load).toHaveBeenCalledWith(50, response.pages.next);

    scope.prevPage();
    expect(BusinessService.load).toHaveBeenCalledWith(50, response.pages.prev);
  });

  it('should default to 50 items per page', function() {
    expect(scope.data.smartTablePageSize).toBe(50);
  });

  it('should reload if the number of items per page changes', function() {
    scope.$digest();
    expect(scope.data.smartTablePageSize).toBe(50);
    scope.data.smartTablePageSize = 10;
    scope.$digest();

    expect(BusinessService.load).toHaveBeenCalledWith(10, undefined);
  });

});


