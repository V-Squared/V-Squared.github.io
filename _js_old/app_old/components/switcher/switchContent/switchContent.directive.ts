import { ISwitcherController } from "../switcher.controller";

export interface ISwitcherContent extends ng.IScope {
  active: boolean;
}

export const switchContentDirective = (): ng.IDirective => ({
  restrict: "EA",
  scope: true,
  require: "^v2Switcher",
  link(scope: ISwitcherContent, element: ng.IAugmentedJQuery, attrs: any, $switcher: ISwitcherController) {
    scope.active = false;

    $switcher.addContent(scope);

    /**
     * @Watcher
     */

    scope.$watch("active", (newValue) => {
      var display = !!newValue ? "block" : "none";
      element.css("display", display);
    });
  }
});
