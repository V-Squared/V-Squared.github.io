export interface IPositionService {
  positionElements(hostElem: ng.IAugmentedJQuery, targetElem: ng.IAugmentedJQuery,
                   placement: string, offset: number): Object;
  offset(element: ng.IAugmentedJQuery): IOffsetBCR;
}

export interface IOffsetBCR {
  width: number;
  height: number;
  top: number;
  left: number;
}

export interface ITargetPos extends IOffsetBCR {
  placement: string;
}

export class PositionService implements IPositionService {
  static $inject = ["$window", "$document"];
  constructor(private $window: ng.IWindowService, private $document: ng.IDocumentService) {}

  positionElements(hostElem: ng.IAugmentedJQuery, targetElem: ng.IAugmentedJQuery,
                   placement: string, offset: number): ITargetPos {
    let hostElemPos: IOffsetBCR = this.offset(hostElem);
    let targetElemPos: ITargetPos = {
      top: 0,
      left: 0,
      width: angular.isDefined(targetElem["offsetWidth"]) ? targetElem["offsetWidth"] : targetElem.prop("offsetWidth"),
      height: angular.isDefined(targetElem["offsetHeight"]) ? targetElem["offsetHeight"] : targetElem.prop("offsetHeight"),
      placement
    };

    /**
     * Caculate Top position
     */

    if (hostElemPos.top - targetElemPos.height - offset < this.$window.pageYOffset) {
      placement = "bottom";
      targetElemPos.placement = "bottom";
    }

    switch (placement) {
      case "top":
        targetElemPos.top = hostElemPos.top - targetElemPos.height - offset;
        break;
      case "bottom":
        targetElemPos.top = hostElemPos.top + hostElemPos.height + offset;
        break;
    }

    /**
     * Calculate left position
     */

    targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetElemPos.width / 2;

    // If tooltip is at the left border of screen
    if (targetElemPos.left < 0) {
      targetElemPos.left = 0;
    }

    // If tooltip is at the right border of screen
    if (targetElemPos.left + targetElemPos.width > this.$document[0].documentElement.clientWidth) {
      targetElemPos.left = this.$document[0].documentElement.clientWidth - targetElemPos.width;
    }

    // return calculated position
    return targetElemPos;
  }

  offset(element: ng.IAugmentedJQuery): IOffsetBCR {
    let nativeElem = element[0];

    var elemBCR = nativeElem.getBoundingClientRect();

    return {
      width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : nativeElem.offsetWidth),
      height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : nativeElem.offsetHeight),
      top: Math.round(elemBCR.top + (this.$window.pageYOffset || this.$document[0].documentElement.scrollTop)),
      left: Math.round(elemBCR.left + (this.$window.pageXOffset || this.$document[0].documentElement.scrollLeft))
    };
  }
}