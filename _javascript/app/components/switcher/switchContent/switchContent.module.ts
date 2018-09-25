import { switchContentDirective } from "./switchContent.directive";

export const switchContent = angular
  .module("v2.switcher.switchContent", [])
  // TODO: Switch this to v2SwitchContent
  .directive("v2SwitchText", switchContentDirective)
  .name;
