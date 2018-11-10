import { switchItemDirective } from "./switchItem.directive";

export const switchItem = angular
  .module("v2.switcher.switchItem", [])
  .directive("v2SwitchItem", switchItemDirective)
  .name;
