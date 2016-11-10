import { ISwitcherController, SwitcherController } from "./switcher.controller.ts";

export const switcherDirective = (): ng.IDirective => ({
  restrict: "EA",
  scope: true,
  bindToController: {
    "isOpen": "<"
  },
  controller: SwitcherController,
  controllerAs: "$switcher",
  link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: any, $switcher: ISwitcherController) {
    element.addClass("switcher");
    scope.$watch("$switcher.isOpen", (index: number) => $switcher.select(index));
  }
});