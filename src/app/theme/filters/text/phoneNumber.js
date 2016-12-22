/**
 * @author a.demeshko
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .filter('phoneNumber', phoneNumber);

  /** @ngInject */
  function phoneNumber() {
    return function(text) {
      return text ? text.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') : '';
    };
  }

})();
