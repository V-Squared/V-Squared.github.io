import * as $ from "jquery";
import * as Stickyfill from "stickyfilljs";

$(function DocumentReady() {

  //  Init stuff
  Stickyfill.add($(".sticky-top"));
  $("[data-toggle='offcanvas']").data("isOpen", false);
  console.log($(".v2-accordion-heading"));

  // Accordion
  $(document).on("click", ".v2-accordion-heading" , function() {
    console.log("Collapse");
    console.log($(this));
    let $collapse = $(this).next();
    const $collapseIcon = $(this).children(".article-group-foldicon");
    const $otherCollapseIcons = $(this).closest(".v2-accordion").find(".v2-accordion-heading").not(this).children(".article-group-foldicon");
    $collapse.collapse("toggle");
    $collapseIcon.toggleClass("rotate-180");
    $otherCollapseIcons.removeClass("rotate-180");
  });

  // off canvas
  let lastActiveCanvas = null;
  $(document).on("click", "[data-toggle='offcanvas']", function () {
    let offCanvasTarget = $(this).data("target");
    console.log({
      "offCanvasTarget": offCanvasTarget,
      "lastActiveCanvas": lastActiveCanvas
    });

    closeOtherCanvas(offCanvasTarget, lastActiveCanvas);

    if ($(this).data("isOpen")) {
      $(this).data("isOpen", false);
    } else {
      $(this).data("isOpen", true);
      let div = `<div id="bodyClick"></div>`;
      $(div).appendTo("body").click( () => {
        closeOtherCanvas(offCanvasTarget, lastActiveCanvas);
        console.log($(this));
        $(this).data("isOpen", false);
        $(offCanvasTarget).removeClass("open");

        $("#bodyClick").remove();
      });
      $(offCanvasTarget).toggleClass("open");
      lastActiveCanvas = offCanvasTarget;
    }
  });

  function closeOtherCanvas(offCanvasTarget, lastActiveCanvas) {
    if (lastActiveCanvas != null && lastActiveCanvas !== offCanvasTarget) {
      $(lastActiveCanvas).removeClass("open");
      console.log("REMOVED CLASS");
    }
  }
});