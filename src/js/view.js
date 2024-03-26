/**
 * @class View
 *
 * Visual representation of the application.
 */
export class View {
  constructor() {}
  createBlocks(rootDom, items = 300) {
    const mapMatix = [
      [0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0],
      [0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 6],
      [3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    ];
    const blocks = document.createDocumentFragment("div");

    mapMatix.map((row, rowIndex) => {
      row.map((div, columnIndex) => {
        const block = document.createElement("div");
        block.setAttribute("id", `${rowIndex}, ${columnIndex}`);
        blocks.appendChild(block);

        if (div === 0) block.classList.add("block", "_sky");
        if (div === 1) block.classList.add("block", "_png", "_tree");
        if (div === 2) block.classList.add("block", "_png", "_leaf");
        if (div === 3) block.classList.add("block", "_png", "_earth");
        if (div === 4) block.classList.add("block", "_png", "_stone");
        if (div === 5) block.classList.add("block", "_png", "_cloud");
        if (div === 6) block.classList.add("block", "_png", "_tnt");
      });
    });
    rootDom.appendChild(blocks);
  }
}
