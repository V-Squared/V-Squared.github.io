import { SlideshowController } from "./slideshow.controller.ts";
var template = require("./slideshow.template.html");

export const slideshowComponent = {
  bindings: {
    currentIndex: "=?"
  },
  transclude: true,
  template,
  controller: SlideshowController
};