/*global angular*/
angular.module('offContentSidebar',[])
.directive('offContentSidebar',function($window) {
    return {
        restrict: 'A',
        link: function(scope,element,attrs) {
            var offsetTop = parseInt(attrs.offContentSidebar);
            
            var windowEl = angular.element($window);
            
            scope.isDisplay = 'none';
            scope.displayed = 'isHidden';
            
            windowEl.on('scroll',function() {
               if(windowEl.scrollTop() > offsetTop) {
                   if(scope.displayed != 'isDisplayed') {
                       scope.isDisplay = 'block';
                       scope.displayed = 'isDisplayed';
                       scope.$apply();
                   }
               } else {
                   if(scope.displayed != 'isHidden') {
                       scope.isDisplay = 'none';
                       scope.displayed = 'isHidden';
                       scope.$apply();
                   }
               }
            });
        }
    };
});