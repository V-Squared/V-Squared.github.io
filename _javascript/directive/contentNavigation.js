angular.module('site')
.component('contentNavigation',{
  controller: ['$scope','collapseService',function ($scope,collapseService) {
    //collapseService.close('article-toc'); 
  }]
});