angular.module('site')
.directive('collapseBar', [ '$window', '$rootScope','$localStorage', 'collapseService', function ($window,$rootScope,$localStorage,collapseService){
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
      
      collapseService.init(foldBar.id);
      
      var localStorageCollapse = "collapseBar_" + foldBar.id;
      
      foldBar.type = foldBar.type || 'Sm';
      
  
      foldBar.checkCollapse = function() {
        var documentWidth = $window.innerWidth;

    
        if ( documentWidth < 1280 && collapseService.isCollapse[foldBar.id].important == false && foldBar.type == 'Mid' ) {
          collapseService.isCollapse[foldBar.id].collapse = true;

        }
        if ( documentWidth > 1280 && collapseService.isCollapse[foldBar.id].important == false  && foldBar.type == 'Mid') {
          collapseService.isCollapse[foldBar.id].collapse = false;
        }
        
        if(documentWidth < 960 ) {
          collapseService.isCollapse[foldBar.id].collapse = true;
          collapseService.isCollapse[foldBar.id].important = false;
        }
        
        if(documentWidth > 960 && foldBar.type == 'Sm') {
          collapseService.isCollapse[foldBar.id].collapse = false;
        }
      }
    },
    link: function(scope,element,attrs,foldBar) {
      
      foldBar.checkCollapse();
      
      watchCollapse(collapseService.isCollapse[foldBar.id].collapse,false);
      
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
      
      scope.$watch(function(){
        return collapseService.isCollapse[foldBar.id].collapse;
      },watchCollapse);
    }
  }
}])
.directive('toggleCollapseBar', function() {
  return {
    restrict:'A',
    scope:{},
    bindToController: {
      id: '@toggleCollapseBar'
    },
    controllerAs: 'toggleCollapse',
    controller: ['$scope', '$element', 'collapseService',function($scope,$element,collapseService) {
      
      var toggle = this;
      
      toggle.isCollapse = false;
      
      console.log(collapseService);
      
      this.$postLink = function () {
        
        console.log($element);
        
        $element.bind('click',clickCallBack);
        
        function clickCallBack () {
          $scope.$apply(function() {
            collapseService.toggle(toggle.id);
          });
        }
        
      }
      
      console.log(toggle);
      
      $scope.$watch(function(){
        return collapseService.isCollapse[toggle.id].collapse;
      },function(isCollapse) {
        toggle.isCollapse = isCollapse;
      });
      
    }]
  }
})
.service('collapseService', ['$rootScope',function ($rootScope) {
  
  this.isCollapse = {};
  
  this.init = function(id) {
    this.isCollapse[id] = {
      collapse: false,
      important: false
    }
  }
  
  this.toggle = function(id) {
    this.isCollapse[id].collapse =! this.isCollapse[id].collapse;
  }
  
  this.open = function (id) {
    this.isCollapse[id].collapse = false;
  }
  
  this.close = function (id) {
    this.isCollapse[id].collapse = true;
  }
  
  this.getIsCollapse = function (id) {
    return this.isCollapse[id];
  }
  
}]);