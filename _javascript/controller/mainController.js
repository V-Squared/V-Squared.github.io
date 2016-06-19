angular.module('site')
  .controller('mainController', function($scope,$localStorage,$document) {
  var vm = this;
  
  // I am getting the document width data through
  // document element so I am not doing Dom manipulation
  // in a controller!
  
  var documentWidth = $document[0].documentElement.clientWidth;

  vm.ribbon = [
    {
      name: "Off",
      color: "#DFE3E4",
      tooltip: "Development is currently happening off GitHub. It will be moved to V² GitHub soon"
    },
    {
      name: "Next",
      color: "#FF8000",
      tooltip: "This project is next in line to be moved to a V² GitHub repository"
    },
    {
      name: "Hot",
      color: "#da314b",
      tooltip: "We are moving this project right now to V² GitHub!"
    },
    {
      name: "On",
      color: "#6CC644",
      tooltip: "This project is on our V² GitHub"
    }
  ];

  console.log("vm.displaySideBar: " + vm.displaySideBar);

  vm.openMenu = function($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  }

});