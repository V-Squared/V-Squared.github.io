function switcher () {

  var switcher = {
    restrict: "EA",
    scope: true,
    bindToController: {
      "isOpen": "<?"
    },
    controller: switherController,
    controllerAs: "$switcher",
    link: switcherLink
  };

  function switcherLink (scope, element, attrs, $switcher) {
    element.addClass("switcher");
    scope.$watch("$switcher.isOpen",$switcher.select);

    if(attrs.toggleText != null) {
       
    }
  }

  return switcher;
}

function switherController () {
  var $ctrl = this;

  $ctrl.texts = [];
  $ctrl.items = [];
  $ctrl.isOpen = $ctrl.isOpen || 0;

  var previousIndex;

  $ctrl.addText = addText;
  $ctrl.addItem = addItem;

  $ctrl.select = select;

  function addText (text) {
    $ctrl.texts.push({
      text: text,
      index: text.index
    });
  }

  function addItem (item,index) {
    $ctrl.items.push({
      item: item,
      index: index
    });
  }

  function select (index) {
    if(previousIndex !== undefined) {
      var previousTextActive = $ctrl.texts[previousIndex],
        previousItemActive = findItemIndex(previousIndex);

      if(previousTextActive) {
        previousTextActive.text.active = false;
      }
      if(previousItemActive) {
        previousItemActive.item.active = false;
      }
    }

    var selectedText = $ctrl.texts[index],
      selectedItem = findItemIndex(index);
    
    if (selectedText) {
      selectedText.text.active = true;
    }
    if(selectedItem) {
      selectedItem.item.active = true;
    }

    previousIndex = index;
  }

  function findItemIndex (index) {
    for (var i = 0;i < $ctrl.items.length; i++) {
      if($ctrl.items[i].index == index) {
        return $ctrl.items[i];
      }
    }
  }
}

function switchItem () {
  var switchItem = {
    restrict: "A",
    require: "^v2Switcher",
    scope: true,
    link: switchItemLink
  };
  return switchItem;

  function switchItemLink(scope, element, attrs, $switcher) {
    scope.index = scope.$eval(attrs.v2SwitchItem) || $switcher.items.length;

    $switcher.addItem(scope,scope.index);

    scope.active = false;

    element.on("click",handleClick);

    function handleClick () {
      scope.$apply(function() {
        $switcher.select(scope.index);
      });
    }

    scope.$watch('active', function(value) {
      if(value) {
        element.addClass('active');
      } else {
        element.removeClass("active");
      }
    });
  }
}

function switchContent () {
  var switchContent = {
    restrict: "EA",
    scope: true,
    require: "^v2Switcher",
    link: switchContentLink
  };
  return switchContent;

  function switchContentLink (scope,element,attrs,$switcher) {
    $switcher.addText(scope);

    scope.$watch("active", toggleElement);

    function toggleElement (newVal) {
      var display = !!newVal ? 'block' : 'none';
      element.css("display", display);
    }
  }

}

angular
  .module("v2.switcher",[])
  .directive("v2Switcher",switcher)
  .directive("v2SwitchItem",switchItem)
  .directive("v2SwitchText",switchContent);