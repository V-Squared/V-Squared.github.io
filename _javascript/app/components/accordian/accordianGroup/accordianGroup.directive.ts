import { IAccordianGroup, AccordianGroup } from "./accordianGroup.controller.ts";
import { IAccordianController } from "../accordian.controller.ts";

export const accordianDirective = (): ng.IDirective => ({
  restrict: "EA",
  require: ["v2AccordianGroup", "^^v2Accordian"],
  scope: true,
  bindToController: {
    isOpen: "=?",
    isDisabled: "=?",
    openClass: "@?"
  },
  controller: AccordianGroup,
  controllerAs: "$group",
  link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, $ctrls: any[]) {
    let $group: IAccordianGroup = $ctrls[0],
        $accordian: IAccordianController = $ctrls[1];

    $accordian.addGroup($group);

    scope.$watch("$group.isOpen", (isOpen) => {
      element.toggleClass($group.openClass, !!isOpen);
      if (isOpen) {
        $accordian.closeOthers($group);
      }
    });
  }
});