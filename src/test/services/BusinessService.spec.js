describe('Business Service', function () {

  var BusinessService;
  var $httpBackend;
  var $location;

  var business = {
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

  var businessList = {
    "businesses":[
        business
    ],
    "pages": {
      "first": "firstLink",
      "last": "lastLink",
      "next": "nextLink",
      "prev": "prevLink"
    }
  };

  beforeEach(module('BusinessService'));

  beforeEach(inject(function (_BusinessService_, _$httpBackend_, _$location_) {
    BusinessService = _BusinessService_;
    $httpBackend = _$httpBackend_;
    $location = _$location_;

    $httpBackend.when('GET', 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/0')
        .respond(business);
    $httpBackend.when('GET', 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/moo')
        .respond(business);
  }));

  it('should exist', function () {
    expect(BusinessService).toBeDefined();
    expect($httpBackend).toBeDefined();
  });

  describe('.load()', function () {
    it('should exist', function () {
      expect(BusinessService.load).toBeDefined();
    });

    it('returns an array of objects', function () {
      $httpBackend.when('GET', 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses')
          .respond(businessList);
      BusinessService.load().then(function(data) {
        expect(data.businesses.length.toBe(1));
        expect(data.pages.length.toBe(4))
      });
    });

    it('should request a number of results if specified', function() {
      $httpBackend.when('GET', 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses?per_page=5')
          .respond("ok");
      BusinessService.load(5).then(function(response) {
        expect(response).toBe('ok');
      }, function(error) {
      });
      $httpBackend.flush();
    });

    it('sends an error when it should', function() {
      $httpBackend.when('GET', 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses')
          .respond(500, 'error');
      BusinessService.load().then(function(response) {
      }, function(error) {
        expect(error).toBe("There was a problem retrieving the requested record.");
      });
      $httpBackend.flush();
    });

  });

  describe('.get()', function () {
    it('returns a specific business', function () {
      var id = 0;
      BusinessService.get(id).then(function (response) {
        expect(response).toBeDefined();
        expect(response.id).toEqual(id);
        expect(response.name).toBe(business.name);
      });
      $httpBackend.flush();
    });

    it('doesnt return bad data', function () {
      var id = 'moo'
      BusinessService.get(id).then(function (response) {
        expect(response).toBeDefined();
        expect(response.id).toBe(undefined);
      }, function (error) {
        expect(error).toBeDefined();
      });
      $httpBackend.flush();
    });

    it('sends an error when it should', function() {
      $httpBackend.when('GET', 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/999999999999999')
          .respond(500, 'error');
      BusinessService.get(999999999999999).then(function(response) {
      }, function(error) {
        expect(error).toBe("There was a problem retrieving the requested record.");
      });
      $httpBackend.flush();
    })
  });
});