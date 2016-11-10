import { ISlideshowController } from "../slideshow.controller.ts";

export interface ISlide extends ng.IScope {
  active: boolean;
}

export const slideDirective = ($animate: angular.animate.IAnimateService): ng.IDirective => ({
  restrict: "EA",
  require: "^^v2Slideshow",
  scope: true,
  link(scope: ISlide, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, $slideshow: ISlideshowController) {
    scope.active = false;
    $slideshow.addSlide(scope);

    element.addClass("slide-animation");

    /**
     * @Watcher
     * @param active: new value of active from contoller
     */
    scope.$watch("active", (active: boolean) => {
      element.data("direction", $slideshow.direction);

      if (!active) {
        $animate.addClass(element, "ng-hide");
      } else {
        $animate.removeClass(element, "ng-hide");
      }
    });
  }
});
slideDirective.$inject = ["$animate"];