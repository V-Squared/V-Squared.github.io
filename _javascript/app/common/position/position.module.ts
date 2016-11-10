import { PositionService } from "./position.service.ts";

export const v2Position = angular
  .module("v2.position", [])
  .service("$v2Position", PositionService)
  .name;