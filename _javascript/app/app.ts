import * as $ from "jquery";

$(function DocumentReady() {
  $(document).on("click", ".v2-accordion-heading" , function() {
    let $collapse = $(this).next();
    const $collapseIcon = $(this).children();
    const $otherCollapseIcons = $(".v2-accordion-heading").not(this).children();
    $collapse.collapse("toggle");
    $collapseIcon.toggleClass("rotate-90");
    $otherCollapseIcons.removeClass("rotate-90");
  });
});