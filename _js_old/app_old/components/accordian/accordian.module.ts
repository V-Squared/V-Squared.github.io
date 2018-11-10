import { v2AccordianGroup } from "./accordianGroup/accordianGroup.module";

import { accordianDirective } from "./accordian.directive";

export const v2Accordian = angular
  .module("v2.accordian", [
    v2AccordianGroup
  ])
  .constant("v2AccordianConfig", {
    closeOther: true
  })
  .directive("v2Accordian", accordianDirective)
  .name;
