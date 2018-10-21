export interface ITooltipConfig {
  options: ITooltipOptions;
  setOptions(option: ITooltipOptions): void;
  $get(): ITooltipOptions;
}

export interface ITooltipOptions {
  placement: string;
  arrowHeight: number;
  mouseoverTooltip: boolean;
  timeoutDelay: number;
  animation: boolean;
}

export class TooltipConfig implements ITooltipConfig{
  options: ITooltipOptions;

  constructor() {
    this.options = {
      placement: "top",
      arrowHeight: 5,
      mouseoverTooltip: false,
      timeoutDelay: 90,
      animation: true
    };
  }

  setOptions(option: ITooltipOptions): void {
    angular.extend(this.options, option);
  }

  $get(): ITooltipOptions {
    return this.options;
  }
}