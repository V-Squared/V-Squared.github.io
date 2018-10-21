import { v2AccordianHeading } from "./accordianHeading/accordianHeading.module"

import { accordianDirective } from "./accordianGroup.directive";

export const v2AccordianGroup = angular
  .module("v2.accordian.group", [
    v2AccordianHeading
  ])
  .directive("v2AccordianGroup", accordianDirective)
  .name;
