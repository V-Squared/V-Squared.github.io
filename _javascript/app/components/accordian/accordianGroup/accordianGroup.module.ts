import { v2AccordianHeading } from "./accordianHeading/accordianHeading.module.ts"

import { accordianDirective } from "./accordianGroup.directive.ts";

export const v2AccordianGroup = angular
  .module("v2.accordian.group", [
    v2AccordianHeading
  ])
  .directive("v2AccordianGroup", accordianDirective)
  .name;