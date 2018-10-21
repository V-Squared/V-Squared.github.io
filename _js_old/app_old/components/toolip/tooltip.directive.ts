import * as angular from "angular";

import { IPositionService } from "../../common/position/position.service";

import { ITooltipOptions } from "./tooltip.provider";

interface ITtScope extends ng.IScope {
  ttLeft: number;
  ttTop: number;
  placement?: string;
  onMouseover?(): void;
  onMouseLeave?(): void;
}

interface ITooltipScope extends ng.IScope {
  content: string;
  template: string;
}

export const tooltipDirective = ($compile: ng.ICompileService, $timeout: ng.ITimeoutService, $document: ng.IDocumentService,
                                 $v2Position: IPositionService, tooltipConfig: ITooltipOptions): ng.IDirective => ({
  restrict: "A",
  scope: true,
  link (scope: ITooltipScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {

    // Tooltip Content
    scope.content = attrs["v2Tooltip"];

    // Tooltip Options
    let placement: string = (attrs["placement"] || tooltipConfig.placement),
        arrowHeight: number = (scope.$eval(attrs["arrowHeight"]) || tooltipConfig.arrowHeight),
        mouseoverTooltip: boolean = (scope.$eval(attrs["mouseoverTooltip"]) || tooltipConfig.mouseoverTooltip),
        animation: boolean = (scope.$eval(attrs["animation"]) || tooltipConfig.animation),
        timeoutDelay: number = (scope.$eval(attrs["timeoutDelay"]) || tooltipConfig.timeoutDelay);

    // Template

    if (mouseoverTooltip) {
      scope.template =
        `<div class="v2-tooltip"
        ng-mouseover="onMouseOver()"
        ng-mouseleave="onMouseLeave()"
        ng-style="{'top': ttTop,'left': ttLeft}" style="z-index:999999"
        ng-class="placement">
          ${scope.content}
        </div>`;
    } else {
      scope.template =
        `<div class="v2-tooltip"
        ng-style="{'top': ttTop,'left': ttLeft}" style="z-index:999999"
        ng-class="placement">
          ${scope.content}
        </div>`;
    }

    // Tooltip scope
    let ttScope: ITtScope;

    let tooltipLinker: Function = $compile(scope.template);
    let tooltip: ng.IAugmentedJQuery;
    let ttPosition: any;

    // Timeout

    let hideTimeout, showTimeout;


    /**
     * @Event
     */

    element.bind("mouseenter", (): void => {
      if (mouseoverTooltip) {
        $timeout.cancel(hideTimeout);
        showTimeout = $timeout((): void => {
          createTooltip();
          positionTooltip();
        }, timeoutDelay);
      } else {
        createTooltip();
        positionTooltip();
      }
    });

    element.bind("mouseleave", (): void => {
      if (mouseoverTooltip) {
        $timeout.cancel(showTimeout);
        hideTimeout = $timeout(removeTooltip, timeoutDelay);
      } else {
        removeTooltip();
      }
    });

    // Position tooltip
    function positionTooltip(): void {
      scope.$apply(() => {
        ttScope.ttLeft = ttPosition.left;
        ttScope.ttTop = ttPosition.top;
      });
    }

    function removeTooltip(): void {
      if (ttScope) {
        ttScope.$destroy();
        ttScope = null;
      }
      if (tooltip) {
        tooltip.remove();
        tooltip = null;
      }
    }

    /**
     * Create the tooltip and attach socpe
     */

    function createTooltip(): void {

      // stop if tooltip already exist
      if (tooltip) {
        return;
      }

      ttScope = Object.assign({
         ttLeft: 0, ttTop: 0
      }, scope.$new(true));

      // append tooltip to the body
      tooltip = tooltipLinker(ttScope, (tooltip) => $document.find("body").append(tooltip) );

      // Get the Position of tooltip
      ttPosition = $v2Position.positionElements(element, tooltip, placement, arrowHeight);

      ttScope.placement = ttPosition.placement;

      /**
       * ttScope
       * @Event
       */

      ttScope.onMouseover = (): void => {
        $timeout.cancel(hideTimeout);
      };

      ttScope.onMouseLeave = (): void => {
        hideTimeout = $timeout((): void => {
          removeTooltip();
        }, timeoutDelay);
      };
    }

    scope.$on("destroy", (): void => {
      $timeout.cancel(showTimeout);
      $timeout.cancel(hideTimeout);
      element.unbind("mouseenter");
      element.unbind("mouseleave");
      removeTooltip();
    });
  }
});
tooltipDirective.$inject = ["$compile", "$timeout", "$document", "$v2Position", "tooltipConfig"];
