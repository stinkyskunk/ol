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
    $scope.data.smartTablePageSize = parseInt($stateParams.perPage);
    $scope.data.page = parseInt($stateParams.page, 10);
    $scope.data.lastPage = '0';


    function load() {
      $scope.BusinessService.load($scope.data.page, $scope.data.smartTablePageSize).then(function (data) {
        $scope.data.smartTableData = data.businesses;

        $scope.data.message = data.message;

        $scope.data.lastPage = data.pages.last.match(/page=(\d+)/)[1];
      });
    }

    load();

    $scope.$watch('data.smartTablePageSize', function (newValue, oldValue, scope) {
      if (newValue == oldValue) {
        return;
      }
      load();
    }, true);

    $scope.$watch('data.page', function (newValue, oldValue, scope) {
      if (newValue == oldValue) {
        return;
      }
      load();
    }, true);

  }

})();

