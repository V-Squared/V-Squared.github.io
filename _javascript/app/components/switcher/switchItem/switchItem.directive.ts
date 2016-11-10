import { ISwitcherController } from "../switcher.controller.ts";

export interface ISwitcherItem extends ng.IScope {
  active: boolean;
  index: number;
}

export const switchItemDirective = (): ng.IDirective => ({
  restrict: "EA",
  scope: true,
  require: "^^v2Switcher",
  link(scope: ISwitcherItem, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, $switcher: ISwitcherController) {
    scope.index = scope.$eval(attrs["v2SwitchItem"]) || $switcher.items.length;
    scope.active = false;

    $switcher.addItem(scope);

    /**
     * @Event
     */
    element.on("click", () => {
      scope.$apply(() => {
        $switcher.select(scope.index);
      });
    });

    /**
     * @Watcher
     */
    scope.$watch("active", (newValue) => {
      if (newValue) {
        element.addClass("active");
      } else {
        element.removeClass("active");
      }
    });

    /**
     * @Destroy
     */

    scope.$on("destroy", () => {
      element.off("click");
    });
  }
});