/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.business')
      .controller('BusinessController.list', BusinessControllerList);

  /** @ngInject */
  function BusinessControllerList($scope, $stateParams, $state, BusinessService) {

    $scope.BusinessService = BusinessService;
    $scope.data = {};
    $scope.data.smartTablePageSize = 50;
    $scope.page = parseInt($stateParams.page, 10);

    $scope.nextPage = function() {
      console.log($stateParams);
      load($scope.data.nextPage);
    }

    $scope.firstPage = function() {
      load($scope.data.firstPage);
    }

    $scope.lastPage = function() {
      load($scope.data.lastPage);
    }

    $scope.prevPage = function() {
      load($scope.data.prevPage);
    }

    function load(uri) {
      $scope.BusinessService.load($scope.data.smartTablePageSize, uri).then(function (data) {
        $scope.data.smartTableData = data.businesses;

        $scope.data.firstPage = data.pages.first;
        $scope.data.prevPage = data.pages.prev;
        $scope.data.nextPage = data.pages.next;
        $scope.data.lastPage = data.pages.last;
        $scope.data.message = data.message;
      });
    }

    load();

    $scope.$watch('data.smartTablePageSize', function (newValue, oldValue, scope) {
      if (newValue == oldValue) {
        return;
      }
      load();
    }, true);

  }

})();

