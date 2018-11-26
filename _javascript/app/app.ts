import * as $ from "jquery";
import * as Stickyfill from "stickyfilljs";
import "bootstrap-material-design";
import * as ClipboardJS from "clipboard";

$(function DocumentReady() {

  //  Init stuff
  $("body").bootstrapMaterialDesign();
  $("[data-toggle*='popover']").popover({
    trigger: "manual",
    placement:  "top",
    html: true
  })
  .on("mouseenter", function () {
    $(this).popover("show");
    $(".popover").on("mouseleave", () => {
        $(this).popover("hide");
    });
  }).on("mouseleave", function () {
    setTimeout( () => {
      if (!$(".popover:hover").length) {
          $(this).popover("hide");
      }
    }, 300);
  });

  $("[data-toggle*='tooltip']").tooltip({
    placement: "bottom"
  });
  Stickyfill.add($(".sticky-top"));
  $("[data-toggle='offcanvas']").data("isOpen", false);
  const clipboard = new ClipboardJS("[clipboard]");

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