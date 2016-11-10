import { ISlideshowConfig } from "./slideshow.provider.ts";
import { ISlide } from "./slide/slide.directive.ts";

export interface ISlideshowController extends ng.IController {
  slides: ISlide[];
  currentIndex: number;
  direction: string;
  settings:  ISlideshowConfig;
  previousSlide: ISlide;
  addSlide(slide: ISlide): void;
  select(slideIndex: number): void;
  previous(): void;
  next(): void;
  isCurrentSlideIndex(index: number): boolean;
}

export class SlideshowController implements ISlideshowController {
  static $inject = ["$scope", "$element", "v2SlideshowSetting"];

  slides: ISlide[];
  currentIndex: number;
  direction: string;
  settings: ISlideshowConfig;
  previousSlide: ISlide;

  constructor(public $scope: ng.IScope, private $element: ng.IAugmentedJQuery, v2SlideshowSetting: ISlideshowConfig) {
    this.slides = [];
    this.currentIndex = this.currentIndex || 0;
    this.direction = "left";
    this.settings = v2SlideshowSetting;
  }

  addSlide(slide: ISlide): void {
    this.slides.push(slide);

    console.log("Add Slide", slide, this.slides.length);

    if (this.slides.length === 1) {
      this.select(0);
    }
  }

  select(slideIndex: number): void {
    if (this.previousSlide) {
      this.previousSlide.active = false;
    }
    var slide = this.slides[slideIndex];
    if (slide) {
      this.direction = (slideIndex > this.currentIndex) ? "left" : "right";
      this.currentIndex = slideIndex;
      slide.active = true;
      this.previousSlide = slide;
    }
  }

  previous(): void {
    const index = this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
    this.select(index);
  }

  next(): void {
    const index = this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
    this.select(index);
  }

  isCurrentSlideIndex(index: number): boolean {
    return this.currentIndex === index;
  }

  $postLink(): void {
    // Add the class to the element
    this.$element.addClass(this.settings.slideshowClass);

    this.$element.ready(() => {
      this.resize();

      angular.element(window).on("resize", () => {
        this.$scope.$apply(() => this.resize());
      });
    });
  }

  $onDestroy(): void {
    angular.element(window).off("resize");
  }

  private resize(): void {
    var elementWidth = this.$element[0].clientWidth;
    // set elementHeight 16:9 based of the width
    var elementHeight = elementWidth / 16 * 9;
    this.$element[0].style.height = elementHeight + "px";
  }

  private findSlideIndex(slide: ISlide): number {
    for (var i = 0; i < this.slides.length; i++) {
      if (this.slides[i] === slide) {
        return i;
      }
    }
  }
}