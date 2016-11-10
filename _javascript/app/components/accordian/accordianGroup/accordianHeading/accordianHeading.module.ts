import { accordianHeadingDirective } from "./accordianHeading.directive.ts";

export const v2AccordianHeading = angular
  .module("v2.accordian.heading", [])
  .directive("v2AccordianHeading", accordianHeadingDirective)
  .name;