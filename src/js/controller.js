import { Model } from "./model.js";
import { View } from "./view.js";

/**
 * @class Controller

 * Controls the flow of the application through the Model and the View
*/
export class Controller {
  constructor(model, view) {
    this.model = new Model();
    this.view = new View();
  }

  init() {
    let rootDom = document.querySelector(".playgraynd-field")
    rootDom.addEventListener("click", (event) => { })
    this.view.createBlocks(rootDom);
  }

  
}
