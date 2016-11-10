export interface ISlideshowConfig {
  slideshowClass: string;
  slideshowInnerClass: string;
  slideNavClass: string;
  slideNavLeftClass: string;
  slideNavRightClass: string;
  slideNavLeftContent: string;
  slideNavRightContent: string;
  dotNavClass: string;
}

export interface ISlideshowSettings {
  config: ISlideshowConfig;
  setOptions(config: Object): void;
  $get(): ISlideshowConfig;
}

export class SlideshowSetting implements ISlideshowSettings {
  config: ISlideshowConfig;

  constructor() {
    // Customizable options for the slideshow
    this.config = {
      slideshowClass: "carousel",
      slideshowInnerClass: "carousel-inner",
      slideNavClass: "carousel-control",
      slideNavLeftClass: "left",
      slideNavRightClass: "right",
      slideNavLeftContent: "<span class='glyphicon glyphicon-chevron-left'></span>",
      slideNavRightContent: "<span class='glyphicon glyphicon-chevron-right'></span>",
      dotNavClass: "carousel-indicators"
    };
  }

  setOptions(config: Object): void {
    angular.extend(this.config, config);
  }

  $get(): ISlideshowConfig {
    return this.config;
  }
}