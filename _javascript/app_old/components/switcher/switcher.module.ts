import { switchItem } from "./switchItem/switchItem.module";
import { switchContent } from "./switchContent/switchContent.module";

import { switcherDirective } from "./switcher.directive";

export const v2Switcher = angular
  .module("v2.switcher", [
    switchItem,
    switchContent
  ])
  .directive("v2Switcher", switcherDirective)
  .name;
