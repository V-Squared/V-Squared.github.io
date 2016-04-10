angular.module('site')
.directive('svgTooltip',function($interpolate,$compile,$document,$uibPosition,$window) {
	return {
		restrict: 'A',
    controller: function($scope,$window,$document) {
      var vm = this;

      vm.positionElement = function positionElement (hostElem,targetElem,placement,arrowHeight) {
        var hostElemPos = vm.offset(hostElem);
        var targetElemPos = {top: 0, left: 0, placement: placement};

        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

        switch(placement) {
          case 'top' :
          targetElemPos.top = hostElemPos.top - targetHeight - arrowHeight;
          break;
          case 'bottom' :
          targetElemPos.top = hostElemPos.top + hostElemPos.height + arrowHeight;
          break;
        }

        targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;

        return targetElemPos;
      }

      vm.offset = function offset(element,placement) {
        element = vm.getRawNode(element);

        var elemBCR = element.getBoundingClientRect();
        return {
          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : element.offsetWidth),
          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : element.offsetHeight),
          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
        };
      };

      vm.getRawNode =  function getRawNode(elem) {
        return elem.nodeName ? elem : elem[0] || elem;
      };

      vm.stringToBoolean = function stringToBoolean(string) {
        if (string === 'true') {
          return true;
        } else {
          return false;
        }
      };

    },
		link: function (scope,element,attrs,vm) {

      // Init

      // Create a child scope for each tooltip
      // So it doesn't conflict with each other
      var ttScope;

      var content = attrs.svgTooltip;

      var template = '<div class="svg-tooltip" ' + 
      'ng-style="{\'top\': ttTop,\'left\': ttLeft}">' +
         content +
      '</div>'; 

      /*tooltip.css({
        top:  ttTop + 'px',
        left: ttLeft + 'px',
        visibility: 'visible'
      });*/

      var tooltipLinker = $compile(template);
      var tooltip;
      var ttPosition;


      // Get attribute

      var placement = (attrs.placement || "top");
      var arrowHeight = (attrs.arrowHeight || "5");
      var mouseoverTooltip = (vm.stringToBoolean(attrs.mouseoverTooltip) || false);

      // Event

		  element.bind('mousemove',showTooltip);
		  element.bind('mouseout',hideTooltip);

      function showTooltip(event) {

        createTooltip();

        // Position tooltip
        scope.$apply(
          function updatePosition() {
            ttScope.ttLeft = ttPosition.left;
            ttScope.ttTop = ttPosition.top;
            ttScope.visibility = true;
          }
        );
      	/*tooltip.css({
      		top:  ttTop + 'px',
      		left: ttLeft + 'px',
      		visibility: 'visible'
      	});*/
      }

      function hideTooltip(event) {
        if (tooltip) {
          tooltip.remove();
          tooltip = null;
        }
        if (ttScope) {
          ttScope.$destroy();
          ttScope = null;
        }
      }

      function createTooltip() {

        // stop if tooltip already exist
        if (tooltip) {
          return;
        }

        ttScope = scope.$new(true);

        ttScope.content = content;

        ttScope.ttLeft = 0;
        ttScope.ttTop = 0;
        ttScope.visibility = false;

        // append tooltip to the body
        tooltip = tooltipLinker(ttScope, function(tooltip) {
          $document.find('body').append(tooltip);
        });

        // Get the Position of tooltip
        ttPosition = vm.positionElement(element,tooltip,placement,arrowHeight);
      }

    }
  }
})