import { switchItemDirective } from "./switchItem.directive.ts";

export const switchItem = angular
  .module("v2.switcher.switchItem", [])
  .directive("v2SwitchItem", switchItemDirective)
  .name;