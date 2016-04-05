angular.module('site')
.controller('homeController',function($scope,$http) {
    var vm = this;
    
    $http.get('repository.json')
     .then(function(res) {
        vm.repositories = res.data;
        console.log(vm.repositories);
    });

    
});