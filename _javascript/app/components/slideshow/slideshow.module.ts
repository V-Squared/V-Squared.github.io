import * as ngSanitize from "angular-sanitize";
import * as ngAnimate from "angular-animate";
import * as ngMaterial from "angular-material";

import { v2Slide } from "./slide/slide.module.ts";

import { SlideshowSetting } from "./slideshow.provider.ts";
import { slideshowComponent } from "./slideshow.component.ts";

export const v2Slideshow = angular
  .module("v2.slideshow", [
    ngSanitize,
    ngAnimate,
    ngMaterial,
    v2Slide
    ])
  .provider("v2SlideshowSetting", SlideshowSetting)
  .component("v2Slideshow", slideshowComponent)
  .name;