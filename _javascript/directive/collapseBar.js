angular.module('site')
.directive('collapseBar', [ '$window', '$rootScope','$localStorage', 'collapseBar', function ($window,$rootScope,$localStorage,collapseBar){
  return {
    restrict: 'E',
    controllerAs:'foldBar',
    scope: {},
    bindToController: {
      id: '@',
      type: '@?'
    },
    controller: function($scope,$timeout) {
      var foldBar = this;
      
      var localStorageName = "collapseBar_" + foldBar.id;
      
      foldBar.isCollapse = {
        collapse: false,
        important:false
      };
      
      foldBar.type = foldBar.type || 'Sm';
  
      foldBar.checkCollapse = function() {
        var documentWidth = $window.innerWidth;
    
        if ( documentWidth < 1280 && foldBar.isCollapse.important == false && foldBar.type == 'Mid' ) {
          foldBar.isCollapse.collapse = true;
        }
        if ( documentWidth > 1280 && foldBar.isCollapse.important == false  && foldBar.type == 'Mid') {
          foldBar.isCollapse.collapse = false;
        }
        
        if(documentWidth < 960 ) {
          foldBar.isCollapse.collapse = true;
          foldBar.isCollapse.important = false;
        }
        
        if(documentWidth > 960 && foldBar.type == 'Sm') {
          foldBar.isCollapse.collapse = false;
        }
      }
      
      $rootScope.$on('toggleCollapse',function(event,id) {
        console.log("$emited: " + foldBar.id);
        if (id == foldBar.id) {
          console.log("Success if: " + foldBar.id);
          foldBar.isCollapse.collapse =!foldBar.isCollapse.collapse;
          foldBar.isCollapse.important = true;
        }
      });
    },
    link: function(scope,element,attrs,foldBar) {
      
      foldBar.checkCollapse();
      
      console.log(foldBar.isCollapse.collapse);
      
      watchCollapse(foldBar.isCollapse.collapse,false);
      
      // Bind Events
      angular.element($window).bind('resize',function() {
        scope.$apply(function() {
          foldBar.checkCollapse();
        });
      });
      
      
      function watchCollapse (isCollapse,wasCollapse) {
        
        if (isCollapse != wasCollapse) {
          if(isCollapse) {
            element.hide();  
          } else {
            element.show();  
          }
        }
        
      }
      
      
      scope.$watch("foldBar.isCollapse.collapse",watchCollapse,true);
    }
  }
}])
.directive('toggleCollapseBar', [ 'collapseBar', function(collapseBar) {
  return {
    restrict:'A',
    scope: {
      id: '@toggleCollapseBar'
    },
    link: function (scope,element,attrs) {
      element.bind('click',clickCallBack);
        
        function clickCallBack () {
          collapseBar.toggle(scope.id);
        }
    }
  }
}])
.service('collapseBar', ['$rootScope',function ($rootScope) {
  
  this.toggle = function(id) {
    $rootScope.$emit('toggleCollapse',id);
    console.log("collapseBar Toggle: " + id);
  }
  
}]);