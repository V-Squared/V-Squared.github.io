import * as TweenMax from "gsap";

export const slideAnimate = (): angular.animate.IAnimateCallbackObject => ({

  beforeAddClass(element: ng.IAugmentedJQuery,
                 className: string,
                 done: Function): void {
    if (className === "ng-hide") {
      var parentWidth = element[0].offsetWidth;
      var animateWidth = element.data("direction") === "left" ? -parentWidth : parentWidth;

      TweenMax.to(element, 0.6, {left: animateWidth, onComplete: done});
    } else {
      done();
    }
  },

  beforeRemoveClass(element: ng.IAugmentedJQuery,
                    className: string,
                    done: Function): void {
    if (className === "ng-hide") {
      element.removeClass("ng-hide");

      var parentWidth = element[0].offsetWidth;
      var animateWidth = element.data("direction") === "left" ? parentWidth : -parentWidth;

      TweenMax.set(element, {left: animateWidth});
      TweenMax.to(element, 0.6, {left: 0, onComplete: done});
    } else {
      done();
    }
  }
});