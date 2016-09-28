var switcher = {
  bindings: {
    "isOpen": "<?"
  },
  controller: swithercontroller,
  transclude:true,
  template: '<div ng-transclude></div>'
};

function swithercontroller ($scope,$element) {
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
    if(previousIndex != undefined) {
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
      if(selectedItem)
        selectedItem.item.active = true;
      previousIndex = index;
    }
  }

  function findItemIndex (index) {
    for (var i = 0;i < $ctrl.items.length; i++) {
      if($ctrl.items[i].index == index) {
        return $ctrl.items[i];
      }
    }
  }

  $ctrl.$postLink = function () {
    $element.addClass("switcher");
    $scope.$watch('$ctrl.isOpen',select);
  };
}

swithercontroller.$inject = ["$scope","$element"];

function switchItem () {
  var directive = {
    restrict: "A",
    require: "^v2Switcher",
    scope:true,
    link: switchItemLink
  };
  return directive;

  function switchItemLink(scope,element,attrs,ctrl) {
    var index = scope.$eval(attrs.v2SwitchItem);

    ctrl.addItem(scope,index);

    scope.active = false;

    element.on("click",handleClick);

    function handleClick () {
      scope.$apply(function() {
        ctrl.select(index);
      });
    }

    scope.$watch('active',function(value) {
      if(value) {
        element.addClass('active')
      } else {
        element.removeClass("active");
      }
    });
  }
}

var switchText = {
  require: {
    switcher: "^v2Switcher"
  },
  controller: switchTextController,
  transclude:true,
  template: "<div ng-transclude></div>"
};

function switchTextController ($scope,$element) {
  this.$onInit = function onInit () {
    this.switcher.addText(this);
  };

  this.$postLink = function () {
    $scope.$watch("$ctrl.active",function(newVal) {
      var display = !!newVal ? 'block' : 'none';
      $element.css('display',display);
    })
  }
}

switchTextController.$inject = ["$scope","$element"];

angular
  .module("v2.switcher",[])
  .component("v2Switcher",switcher)
  .directive("v2SwitchItem",switchItem)
  .component("v2SwitchText",switchText);