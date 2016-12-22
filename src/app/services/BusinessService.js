(function () {
  'use strict';

  angular.module('BusinessService', [])
    .service('BusinessService', function ($http, $q) {
      this.$http = $http;

      this.get = function (id) {
        var deferred = $q.defer();

        if (id === undefined) {
          deferred.resolve({
            valid: false
          })
        }

        $http({
          method: 'GET',
          url: 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/' + id
        }).success(function (data) {
          if (data.id != Number.parseInt(id)) {
            deferred.reject("");
          }

          deferred.resolve(data);
        }).error(function (msg, code) {
          console.log("BusinessService:get " + msg);
          deferred.reject("There was a problem retrieving the requested record.");
        });
        return deferred.promise;
      };

      this.load = function (perPage, url) {
        var deferred = $q.defer();
        if (url === undefined) {
          url = 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses';
        }

        if (perPage !== undefined) {
          url += '?per_page=' + perPage;
        }

        $http({
          method: 'GET',
          url: url
        }).success(function (data) {
          deferred.resolve(data);
        }).error(function (msg, code) {
          console.log("BusinessService:load " + msg);
          deferred.reject("There was a problem retrieving the requested record.");
        });
        return deferred.promise;
      };
    });
})();