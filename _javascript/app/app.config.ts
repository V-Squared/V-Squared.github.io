import { ISlideshowSettings } from "./components/slideshow/slideshow.provider.ts";

export function appConfig($interpolateProvider: ng.IInterpolateProvider, $mdThemingProvider: angular.material.IThemingProvider,
                          v2SlideshowSettingProvider: ISlideshowSettings): void {
  // Change from {{}} to [[]] so it dosen't conflict with jekyll

  $interpolateProvider.startSymbol("[[");
  $interpolateProvider.endSymbol("]]");

  v2SlideshowSettingProvider.setOptions({
    slideNavLeftSvgPath: "/icons/ic_keyboard_arrow_left_black_24px.svg",
    slideNavRightSvgPath: "/icons/ic_keyboard_arrow_right_black_24px.svg"
  });

  $mdThemingProvider.theme("default").primaryPalette("blue").accentPalette("orange");
}
appConfig.$inject = ["$interpolateProvider", "$mdThemingProvider", "v2SlideshowSettingProvider"];