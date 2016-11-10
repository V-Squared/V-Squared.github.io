import { v2AccordianGroup } from "./accordianGroup/accordianGroup.module.ts";

import { accordianDirective } from "./accordian.directive.ts";

export const v2Accordian = angular
  .module("v2.accordian", [
    v2AccordianGroup
  ])
  .constant("v2AccordianConfig", {
    closeOther: true
  })
  .directive("v2Accordian", accordianDirective)
  .name;