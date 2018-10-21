angular.module('v2Accordian',['ngAnimate','ui.bootstrap.collapse'])
.constant('v2AccordionConfig', {
  closeOther: true
})
.directive('v2Accordian',v2Accordian)
.directive('v2AccordianGroup',v2AccordianGroup)
.directive('v2AccordianHeading',v2AccordianHeading);

function v2Accordian () {
  var directive = {
    restrict: 'A',
    scope:true,
    controller: accordianController,
    controllerAs: "v2Accordian"
  };
  
  return directive;
}

accordianController.$inject = ['$scope','$attrs','v2AccordionConfig'];

function accordianController ($scope,$attrs,accordianConfig) {

  this.groups = [];

  this.$id = $scope.$id;

  this.closeOther = closeOther;
  this.addGroup = addGroup;
  this.removeGroup = removeGroup;

  function closeOther (openGroup) {
    var closeOther = angular.isDefined($attrs.closeOther) ?
      $scope.$eval($attrs.closeOther) : accordianConfig.closeOther;
    if(closeOther) {
      angular.forEach(this.groups,function(group) {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    }
  }

  function addGroup (group) {
    this.groups.push(group);
  }

  function removeGroup (group) {
    var index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index,1);
    }
  }
}

function v2AccordianGroup () {
  var directive = {
    restrict: 'A',
    require: ['v2AccordianGroup','^v2Accordian'],
    scope:true,
    bindToController: {
      isOpen: '=?',
      isDisabled: '=?',
      openClass: '@?'
    },
    controllerAs: 'v2Group',
    controller: accordianGroupController,
    link: accordianGroupLink
  };
  
  return directive;
  
  function accordianGroupLink (scope,element,attrs,ctrl) {
    var vm = ctrl[0],
        accordianCtrl = ctrl[1];

    accordianCtrl.addGroup(vm);

    scope.$watch('v2Group.isOpen',function(val) {
      element.toggleClass(vm.openClass,!!val);
      if (val) {
        accordianCtrl.closeOther(vm);
      }
    });

    scope.$on('destroy',function() {
      accordianCtrl.removeGroup(vm);
    });
  }
}

accordianGroupController.$inject = ['$scope','$attrs'];

function accordianGroupController ($scope,$attrs) {
  // Create a id so every controller id is different for the
  // groups array
  this.$id = $scope.$id;

  this.isOpen = this.isOpen || false;
  this.openClass = this.openClass || "panel-open";

  if($attrs.isOpened == '') {
    this.isOpen = true;
  }

  this.toggleOpen = toggleOpen;

  function toggleOpen () {
    if(!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }

}

function v2AccordianHeading () {
  var directive = {
    restrict: 'A',
    require: "^v2AccordianGroup",
    link: accordianHeadingLink
  };

  return directive;
  
  function accordianHeadingLink (scope,element,attrs,groupCtrl) {

    element.on('click',toggleOpen);

    function toggleOpen () {
      scope.$apply(function() {
        groupCtrl.toggleOpen();
      });
    }

  }
}