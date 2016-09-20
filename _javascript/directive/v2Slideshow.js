angular.module("app",["v2Slideshow"]);

var v2SlideshowCompoonent = {
  bindings: {
    currentIndex: "?="
  },
  transclude:true,
  controller: v2SlideshowCtrl,
  template: "<div ng-class=\"::$ctrl.settings.slideshowInnerClass\" ng-transclude></div>\r\n<a ng-class=\"::[$ctrl.settings.slideNavClass,$ctrl.settings.slideNavLeftClass]\"\r\n   ng-click=\"$ctrl.previous()\"\r\n   ng-bind-html=\"::$ctrl.settings.slideNavLeftContent\"></a>\r\n<a ng-class=\"::[$ctrl.settings.slideNavClass,$ctrl.settings.slideNavRightClass]\"\r\n   ng-click=\"$ctrl.next()\"\r\n   ng-bind-html=\"::$ctrl.settings.slideNavRightContent\"></a>\r\n<ol ng-class=\"::$ctrl.settings.dotNavClass\">\r\n  <li ng-repeat=\"slide in ::$ctrl.slides track by $index\" ng-class=\"{ active: $ctrl.isCurrentSlideIndex($index) }\" ng-click=\"$ctrl.select($index)\">\r\n    <a href=\"#\"></a>\r\n  </li>\r\n</ol>"
};

v2SlideshowCtrl.$inject = ["$scope","$element","v2SlideshowSetting"];
function v2SlideshowCtrl ($scope,$element,v2SlideshowSetting) {
  var $this = this;

  $this.slides = [];
  $this.currentIndex = $this.currentIndex || 0;
  console.log($this);
  $this.direction = "left";
  $this.settings = v2SlideshowSetting;
  
  $this.addSlide = addSlide;
  $this.select = select;
  $this.previous = previous;
  $this.next = next;
  $this.isCurrentSlideIndex = isCurrentSlideIndex;
  $this.findSlideIndex = findSlideIndex;
  
  function addSlide (slide) {
    $this.slides.push(slide);
    
    if($this.slides.length === 1) {
      $this.select(0);
    }
  }
  
  function select (slideIndex) {
    if ($this.previousSlide) {
      $this.previousSlide.active = false;
    }
    var slide = $this.slides[slideIndex];
    if (slide) {
      $this.direction = (slideIndex > $this.currentIndex) ? "left" : "right";
      $this.currentIndex = slideIndex;
      slide.active = true;
      $this.previousSlide = slide;
    }
  }
  
  function previous () {
    var index = $this.currentIndex > 0 ? $this.currentIndex - 1 : $this.slides.length - 1;
    $this.select(index);
  }

  function next () {
    var index = $this.currentIndex < $this.slides.length - 1 ? $this.currentIndex + 1 : 0;
    $this.select(index);
  }

  function isCurrentSlideIndex (index) {
    return $this.currentIndex === index;
  }
  
  function findSlideIndex () {
    for(var i = 0; i < $this.slides.length; i++) {
      if($this.slides[i] === slide) {
        return i;
      }
    }
  }

  // LINK

  $this.$postLink = function postLink () {
    console.log($this.settings);
    $element.addClass($this.settings.slideshowClass);
  }
}

function v2SlideshowSetting () {
  var configs = {
    slideshowClass: "carousel",
    slideshowInnerClass: "carousel-inner",
    slideNavClass: "carousel-control",
    slideNavLeftClass: "left",
    slideNavRightClass: "right",
    slideNavLeftContent: "<span class='glyphicon glyphicon-chevron-left'></span>",
    slideNavRightContent: "<span class='glyphicon glyphicon-chevron-right'></span>",
    dotNavClass: "carousel-indicators"
  };

  this.setOptions = function(config) {
    angular.extend(configs,config);
  };

  this.$get = function() {
    return configs;
  }
}

angular
  .module("v2Slideshow",["ngSanitize","v2Slide"])
  .component("v2Slideshow",v2SlideshowCompoonent)
  .provider("v2SlideshowSetting",v2SlideshowSetting);


var v2SlideComponent = {
  transclude: true,
  require: {
    slideshow: "^^v2Slideshow"
  },
  controller: v2SlideCtrl,
  template: ''
};

v2SlideCtrl.$inject = ["$scope","$animate","$element","$transclude"];
function v2SlideCtrl ($scope, $animate, $element, $transclude) {
  var $this = this;

  $this.active = false;

  $this.$onInit = function () {
    $this.slideshow.addSlide($this);
  };

  $this.$postLink = function () {
    $element.addClass("slide-animation");

    $transclude(function (clone) {
      $element.append(clone);
    });

    $scope.$watch("$ctrl.active", function(val) {
      if(val) {
        $element.data("direction", $this.slideshow.direction);
      }
      //this.$element.toggleClass("ng-hide",!val);
      if(!val) {
        $animate.addClass($element,"ng-hide");
      } else {
        $animate.removeClass($element,"ng-hide");
      }
    })
  };
}

function v2SlideAnimate () {
  return {
    beforeAddClass: beforeAddClass,
    beforeRemoveClass: beforeRemoveClass
  };

  function beforeAddClass (element,className,done) {
    if(className == 'ng-hide') {
      var parentWidth = element[0].offsetWidth;

      TweenMax.to(element, 0.6, {left: -parentWidth, onComplete: done});
    } else {
      done();
    }
  }

  function beforeRemoveClass (element,className,done) {
    if(className == 'ng-hide') {
      element.removeClass("ng-hide");

      var parentWidth = element[0].offsetWidth;

      console.log(parentWidth);

      TweenMax.set(element, {left: parentWidth});
      TweenMax.to(element, 0.6, {left: 0, onComplete: done});
    } else {
      done();
    }
  }
}

angular
  .module("v2Slide",["ngAnimate"])
  .component("v2Slide",v2SlideComponent)
  .animation(".slide-animation",v2SlideAnimate);