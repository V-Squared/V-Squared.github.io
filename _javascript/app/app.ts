import * as $ from "jquery";

$(function DocumentReady() {
  $(document).on("click", ".v2-accordion-heading" , function() {
    $(this).next().collapse("toggle");
    $(".v2-accordion-heading").not(this).children().removeClass("rotate-90");
    $(this).children().toggleClass("rotate-90");
  });
});