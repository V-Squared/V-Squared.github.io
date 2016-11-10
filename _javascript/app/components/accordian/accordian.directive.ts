import { AccordianController } from "./accordian.controller.ts";

export const accordianDirective = (): ng.IDirective => ({
  restrict: "EA",
  scope: true,
  controller: AccordianController,
  controllerAs: "$accordian"
});