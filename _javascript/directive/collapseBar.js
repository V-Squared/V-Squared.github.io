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
      console.log(foldBar.isCollapse.collapse);
  
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
          foldBar.isCollapse.collapse = true;
        }
      }
      
      $rootScope.$on('toggleCollapse',function(event,id) {
        if (id == foldBar.id) {
          foldBar.isCollapse.collapse =!foldBar.isCollapse.collapse;
          foldBar.isCollapse.important = true;
        }
      });
    },
    link: function(scope,element,attrs,foldBar) {
      
      console.log("before checkCollapse()");
      console.log("isCollapse: " + foldBar.isCollapse.collapse);
      
      foldBar.checkCollapse();
      
      // Bind Events
      angular.element($window).bind('resize',function() {
        scope.$apply(function() {
          foldBar.checkCollapse();
        });
      });
      
      console.log("After checkCollapse()");
      console.log("isCollapse: " + foldBar.isCollapse.collapse);
      
      scope.$watch("foldBar.isCollapse.collapse",function(isCollapse,wasCollapse) {
        console.log("Watcher wasCollapse: " + wasCollapse);
        console.log("Watcher isCollapse: " + isCollapse);
        
        if (isCollapse != wasCollapse) {
          console.log("watcher is triggered");
          if(isCollapse) {
            element.hide();
            console.log("set element.hide");            
          } else {
            element.show();
            console.log("set element.show");    
          }
        }
      },true);
    }
  }
}])
.directive('toggleCollapseBar', [ 'collapseBar',function(collapseBar) {
  return {
    restrict:'A',
    scope: {
      id: '@toggleCollapseBar'
    },
    link: function(scope,element,attrs) {
      
      element.bind('click',function(event) {
          collapseBar.toggle(scope.id);
      });
      
    }
  }
}])
.service('collapseBar', ['$rootScope',function ($rootScope) {
  
  this.toggle = function(id) {
    $rootScope.$emit('toggleCollapse',id);
  }
  
}]);