describe('Business View Controller', function () {

  var BusinessService;
  var controller;
  var scope;
  var $stateParams;
  var $location;

  var response = {
    "id": 0,
    "uuid": "a208219a-4e8e-4420-954d-7f0d2efba40e",
    "name": "Yundt Group",
    "address": "51507 Drema Viaduct Apt. 257",
    "address2": null,
    "city": "Dakotashire",
    "state": "PR",
    "zip": "16405",
    "country": "US",
    "phone": "5662095525",
    "website": "http://fay.com/",
    "created_at": "2013-09-17T20:37:58.000Z"
  };

  beforeEach(module('BlurAdmin'));

  describe('success', function() {
    beforeEach(inject(function (_BusinessService_, _$stateParams_, $controller, $rootScope, _$location_, $q) {
      BusinessService = _BusinessService_;
      spyOn(BusinessService, 'get').and.callFake(function(id) {
        var deferred = $q.defer();
        deferred.resolve(response);
        return deferred.promise;
      });
      scope = $rootScope.$new();
      $location = _$location_;
      $stateParams = _$stateParams_;
      $stateParams.id = "1";

      var createController = function() {
        return $controller('BusinessController.view', {
          'BusinessService': BusinessService,
          '$scope': scope,
          '$stateParams': $stateParams,
          '$location': $location
        });
      };

      controller = createController();
    }));

    it('should exist', function () {
      expect(BusinessService).toBeDefined();
      expect(scope).toBeDefined();
    });

    it('should get the specified record', function() {
      scope.$digest();

      expect(BusinessService.get).toHaveBeenCalledWith("1");
    });
  })

  describe('fail', function() {
    beforeEach(inject(function (_BusinessService_, _$stateParams_, $controller, $rootScope, _$location_, $q) {
      BusinessService = _BusinessService_;
      spyOn(BusinessService, 'get').and.callFake(function(id) {
        var deferred = $q.defer();
        deferred.reject('error');
        return deferred.promise;
      });
      scope = $rootScope.$new();
      $location = _$location_;
      $stateParams = _$stateParams_;
      $stateParams.id = "1";

      var createController = function() {
        return $controller('BusinessController.view', {
          'BusinessService': BusinessService,
          '$scope': scope,
          '$stateParams': $stateParams,
          '$location': $location
        });
      };

      controller = createController();
    }));

    it('should get the specified record', function() {
      scope.$digest();

      BusinessService.get('moo').then(
          function() {},
          function(msg) {
            expect(msg).toBe('error');
          });
    });
  })


});


