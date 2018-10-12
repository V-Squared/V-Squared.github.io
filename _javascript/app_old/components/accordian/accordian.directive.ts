import { AccordianController } from "./accordian.controller";

export const accordianDirective = (): ng.IDirective => ({
  restrict: "EA",
  scope: true,
  controller: AccordianController,
  controllerAs: "$accordian"
});
