import { IAccordianGroup } from "./accordianGroup/accordianGroup.controller.ts";

export interface IAccordianController extends ng.IController {
  groups: IAccordianGroup[];
  closeOthers(openGroup: IAccordianGroup): void;
  addGroup(group: IAccordianGroup): void;
  removeGroup(group: IAccordianGroup): void;
}

export class AccordianController implements IAccordianController {
  static $inject = ["$scope", "$attrs", "v2AccordianConfig"];

  groups: IAccordianGroup[];
  constructor(public $scope: ng.IScope, private $attrs: ng.IAttributes, public accordianConfig: { closeOther: boolean }) {
    this.groups = [];
  }

  closeOthers(openGroup: IAccordianGroup): void {
    let closeOther: boolean = angular.isDefined(this.$attrs["closeOther"]) ?
      this.$scope.$eval(this.$attrs["closeOther"]) : this.accordianConfig.closeOther;

    if (closeOther) {
      angular.forEach(this.groups, (group) => {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    }
  }

  addGroup(group: IAccordianGroup): void {
    this.groups.push(group);
  }

  removeGroup(group: IAccordianGroup): void {
    let index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}