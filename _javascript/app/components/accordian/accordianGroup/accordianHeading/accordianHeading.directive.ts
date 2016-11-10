import { IAccordianGroup } from "../accordianGroup.controller.ts";

export const accordianHeadingDirective = (): ng.IDirective => ({
  restrict: "EA",
  require: "^^v2AccordianGroup",
  link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, $group: IAccordianGroup) {
    element.on("click", (): void => {
      scope.$apply(() => { $group.toggleOpen(); });
      console.log("CLICKED!!");
    });

    scope.$on("destroy", (): void => {
      element.off("click");
    });
  }
});