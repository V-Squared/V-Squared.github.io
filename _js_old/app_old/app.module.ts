/**
 * Vendors
 */
import * as angular from "angular";
import * as ngSanitize from "angular-sanitize";
import * as ngAnimate  from "angular-animate";
import * as ngAria from "angular-aria";
import * as ngMaterial from "angular-material";
import * as duScroll from "angular-scroll";
import "../vendor/ui-bootstrap-collapse.js";
import "../vendor/ui-bootstrap-tab.js";

//import { commonModule } from "./common/common.module";
//import { componentsModule } from "./components/components.module";

import { appConfig } from "./app.config";

angular
  .module("app", [
    //commonModule,
    //componentsModule,
    ngSanitize,
    ngAnimate,
    ngAria,
    ngMaterial,
    duScroll,
    "ui.bootstrap.collapse",
    "ui.bootstrap.tabs"
  ])
  .config(appConfig);

angular.element(document).ready(function() {
  angular.bootstrap(document, ["app"], {
    strictDi: true
  });

  /*var articleContent = document.getElementById("article-content");

   var imgs = articleContent.getElementsByTagName("img");


   for(var i = 0; i < imgs.length; i++) {
   if (imgs[i].parentNode.nodeName == "P") {
   var imgSt = imgs[i].parentNode.style;

   imgSt.marginLeft = "-30px";
   imgSt.marginRight = "-30px";
   imgSt.overflow = "hidden";
   imgSt.backgroundColor = "#999";
   }
   }*/
});
