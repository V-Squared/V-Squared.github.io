import * as ngAnimate from "angular-animate";

import { slideDirective } from "./slide.directive.ts";
import { slideAnimate } from "./slide.animation.ts";

export const v2Slide = angular
  .module("v2.slideshow.slide", [ngAnimate])
  .directive("v2Slide", slideDirective)
  .animation(".slide-animation", slideAnimate)
  .name;