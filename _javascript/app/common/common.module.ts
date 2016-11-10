import "./loadRepository/loadRepository.js";
import { v2Position } from "./position/position.module.ts";

import { CommonController } from "./common.controller.ts";

export const commonModule = angular
  .module("app.common", [
    "app.loadRepository",
    v2Position
  ])
  .controller("mainController", CommonController)
  .name;