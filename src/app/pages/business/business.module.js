/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.business', ['BusinessService'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('business', {
          url: '/business',
          abstract: true,
          template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
        })
        .state('business.list', {
          url: '/list/:page/:perPage',
          controller: 'BusinessController.list',
          templateUrl: 'app/pages/business/view/table.html',
          title: 'List'
        })
        .state('business.view', {
          url: '/:id',
          controller: 'BusinessController.view',
          templateUrl: 'app/pages/business/view/show.html',
          title: 'Detail',
        });
    $urlRouterProvider.when('/business', '/business/list');
  }
})();
