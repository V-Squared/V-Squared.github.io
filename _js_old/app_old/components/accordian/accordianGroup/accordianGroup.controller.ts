export interface IAccordianGroup extends ng.IController {
  $id: number;
  isOpen: boolean;
  openClass: string;
  isDisabled: boolean;
  toggleOpen(): void;
}

export class AccordianGroup implements IAccordianGroup {
  static $inject = ["$scope", "$attrs"];

  $id: number;
  isOpen: boolean;
  openClass: string;
  isDisabled: boolean;
  constructor($scope: ng.IScope, $attrs: ng.IAttributes) {
    this.$id = $scope.$id;
    this.isOpen = this.isOpen || false;
    this.openClass = this.openClass || "panel-open";

    // If it exist
    if ($attrs["isOpened"] != null) {
      this.isOpen = true;
    }
  }

  toggleOpen(): void {
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
      console.log("TOGGLE OPEN: ", this.isOpen);
    }
  }
}