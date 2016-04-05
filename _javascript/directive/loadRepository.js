angular.module('site')
.directive('loadRepository',function($http) {
	return {
		restrict: 'A',	
		controllerAs: 'json',
		controller: function ($scope) {},
		link: function (scope,element,attrs,json) {

			json.url = attrs.loadRepository;

			$http.get(json.url)
			 .then(function(res) {
			 	json.repositories = res.data;
			 });
		}
	}
})