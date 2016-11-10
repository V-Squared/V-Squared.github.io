import { switchItem } from "./switchItem/switchItem.module.ts";
import { switchContent } from "./switchContent/switchContent.module.ts";

import { switcherDirective } from "./switcher.directive.ts";

export const v2Switcher = angular
  .module("v2.switcher", [
    switchItem,
    switchContent
  ])
  .directive("v2Switcher", switcherDirective)
  .name;