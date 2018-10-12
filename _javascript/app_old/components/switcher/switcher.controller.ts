import { ISwitcherItem } from "./switchItem/switchItem.directive";
import { ISwitcherContent } from "./switchContent/switchContent.directive";

export interface ISwitcherController {
  contents: ISwitcherContent[];
  items: ISwitcherItem[];
  isOpen: number;
  previousIndex: number;
  addContent(content: ISwitcherContent): void;
  addItem(item: ISwitcherItem): void;
  select(index: number): void;
}

export class SwitcherController implements ISwitcherController {

  contents: ISwitcherContent[];
  items: ISwitcherItem[];
  isOpen: number;
  previousIndex: number;

  constructor() {
    this.contents = [];
    this.items = [];
    this.isOpen = this.isOpen || 0;
    this.previousIndex = null;

    console.log(this.previousIndex);
  }

  /**
   * addContent
   * add content to the contents array
   * @param content: content to add to the array
   */

  addContent(content: ISwitcherContent): void {
    this.contents.push(content);
  }

  /**
   * addItem
   * add item to the items array
   * @param item: item to add to the array
   */

  addItem(item: ISwitcherItem): void {
    this.items.push(item);
  }

  /**
   * Select
   * Select the switchContent correspond to the switchItem
   * @param index: index of the switchItem
   */

  select(index: number): void {
    if (this.previousIndex !== null) {
      let previousContentActive: ISwitcherContent = this.contents[this.previousIndex],
        previousItemActive: ISwitcherItem = this.findItemIndex(this.previousIndex);

      if (previousContentActive) {
        previousContentActive.active = false;
      }
      if (previousItemActive) {
        previousItemActive.active = false;
      }
    }

    let selectedContent: ISwitcherContent = this.contents[index],
      selectedItem: ISwitcherItem = this.findItemIndex(index);

    if (selectedContent) {
      selectedContent.active = true;
    }
    if (selectedItem) {
      selectedItem.active = true;
    }

    this.previousIndex = index;
  }

  /**
   * findItemIndex
   * @param index: index of the slide
   * @returns {ISwitcherItem}: The switchItem corresponding to the index
   */

  private findItemIndex(index: number): ISwitcherItem {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].index === index) {
        return this.items[i];
      }
    }
  }

}
