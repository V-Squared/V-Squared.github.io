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
        
        console.log(foldBar.id);
        console.log(collapseService.isCollapse[foldBar.id].important);

    
        if ( documentWidth < 1280 && collapseService.isCollapse[foldBar.id].important == false && foldBar.type == 'Mid' ) {
          collapseService.isCollapse[foldBar.id].collapse = true;
        }
        if ( documentWidth > 1280  && foldBar.type == 'Mid') {
          collapseService.isCollapse[foldBar.id].collapse = false;
          collapseService.isCollapse[foldBar.id].important = false;
        }
        
        if(documentWidth < 960 ) {
          collapseService.isCollapse[foldBar.id].collapse = true;
          collapseService.isCollapse[foldBar.id].important = false;
        }
        
        if(documentWidth > 960  && foldBar.type == 'Sm' && collapseService.isCollapse[foldBar.id].important == false) {
          collapseService.isCollapse[foldBar.id].collapse = false;
        }
        
        if(documentWidth > 1280 && foldBar.type == 'Sm') {
          collapseService.isCollapse[foldBar.id].important = false;
          collapseService.isCollapse[foldBar.id].collapse = false;
        }
        
      }
    },
    link: function(scope,element,attrs,foldBar) {
      
      console.log(element);
      
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
    scope: true,
    bindToController: {
      id: '@toggleCollapseBar'
    },
    controllerAs: 'toggleCollapse',
    controller: ['$scope', '$element', 'collapseService',function($scope,$element,collapseService) {
      
      var toggle = this;
      
      toggle.isCollapse = false;
      
      console.log(toggle.id);
      
      console.log(collapseService);
            
      this.$postLink = function () {
        
        $element.bind('click',clickCallBack);
        
        function clickCallBack () {
          $scope.$apply(function() {
            collapseService.toggle(toggle.id);
          });
        }
        
      }
      
      $scope.$watch(function(){
        return collapseService.isCollapse[toggle.id].collapse;
      },function(isCollapse) {
        toggle.isCollapse = isCollapse;
      });
      
    }]
  }
})
.service('collapseService', ['$rootScope', '$document',function ($rootScope,$document) {
  
  this.isCollapse = {};
  
  this.init = function(id) {
    this.isCollapse[id] = {
      name: id,
      collapse: false,
      important: false
    }
    console.log(this.isCollapse);
  }
  
  this.toggle = function(id) {
    this.isCollapse[id].collapse =! this.isCollapse[id].collapse;
    this.isCollapse[id].important = true;
    
    if($document[0].documentElement.clientWidth < 1280) {
      this.closeOther(id);
    }
  }
  
  this.open = function (id) {
    this.isCollapse[id].collapse = false;
  }
  
  this.closeOther = function (id) {
    angular.forEach(this.isCollapse,function(value,index) {
      if(value.name != id) {
      
        console.log("if executed");
        console.log(value);
        console.log(id);
        value.collapse = true;
        value.important = true;
      }
    })
  }
  
  this.close = function (id) {
    this.isCollapse[id].collapse = true;
  }
  
  this.getIsCollapse = function (id) {
    return this.isCollapse[id];
  }
  
}]);