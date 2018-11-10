import { accordianHeadingDirective } from "./accordianHeading.directive";

export const v2AccordianHeading = angular
  .module("v2.accordian.heading", [])
  .directive("v2AccordianHeading", accordianHeadingDirective)
  .name;
