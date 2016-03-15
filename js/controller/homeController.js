angular.module('myApp')
.controller('homeController',function($scope,$http) {
    var vm = this;
    
    $http.get('repository.json')
     .then(function(res) {
        vm.repositories = res.data;
        console.log(vm.repositories);
    });

     vm.ribbon = [
     	{
     		name: "Off",
     		color: "#DFE3E4",
     		tooltip: "Development is currently happening off GitHub. It will be moved to V² GitHub soon"
     	},
     	{
     		name: "Next",
     		color: "#FF8000",
     		tooltip: "This project is next in line to be moved to a V² GitHub repository"
     	},
     	{
     		name: "Hot",
     		color: "#da314b",
     		tooltip: "We are moving this project right now to V² GitHub!"
     	},
     	{
     		name: "On",
     		color: "#6CC644",
     		tooltip: "This project is on our V² GitHub"
     	}
     ]
    
});