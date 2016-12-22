/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.business')
      .controller('BusinessController.view', BusinessControllerView);

  /** @ngInject */
  function BusinessControllerView($scope, $stateParams, BusinessService, $state) {

    $scope.data = {};
    $scope.data.selectedId = $stateParams.id;
    $scope.data.message = "";

    BusinessService.get($scope.data.selectedId).then(function (data) {
      $scope.data.business = data;
    }, function(error) {
      console.error(error);
      $scope.data.message = error;
    });
  }

})();
