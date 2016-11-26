import { SlideshowController } from "./slideshow.controller.ts";
var template = require("./slideshow.template.html");

export const slideshowComponent = {
  bindings: {
    currentIndex: "=?",
    aspectWidth: "@?",
    aspectHeight: "@?"
  },
  transclude: true,
  template,
  controller: SlideshowController
};