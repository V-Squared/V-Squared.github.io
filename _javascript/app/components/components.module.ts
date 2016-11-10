import { v2Tooltip } from "./toolip/tooltip.module.ts";
import { v2Switcher } from "./switcher/switcher.module.ts";
import { v2Slideshow } from "./slideshow/slideshow.module.ts";
import { v2Accordian } from "./accordian/accordian.module.ts";

import "./collapseBar/collapseBar.js";

export const componentsModule = angular
  .module("app.components", [
    v2Tooltip,
    v2Switcher,
    v2Slideshow,
    v2Accordian,
    "collapseBar"
  ])
  .name;