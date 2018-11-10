/* global angular */
angular.module('site')
  .controller('homeController', function ($http) {
    "use strict";

    var vm = this;

    $http.get('repository.json')
      .then(function (res) {
        vm.repositories = res.data;
        console.log(vm.repositories);
      });
  });