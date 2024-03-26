/**
 * @class Model
 *
 * Manages the data of the application.
 */
export class Model {
  constructor() {
    this.tools = {
      axe: { active: false },
      pickaxe: { active: false },
      shovel: { active: false },
    };
    this.invertaty = [
      { type: "wood", couner: 0 },
      { type: "earth", couner: 0 },
      { type: "stone", couner: 0 },
    ];
    this.collectedInvertory = [{ type: "wood", id: 0 }];
  }
}
