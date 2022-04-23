import { HeaderCell } from './HeaderCell';

export class Header {
    /** @type {HeaderCell[]} */
    cells;

    /**
     * @param {HeaderCell[]} cells
     */
    constructor(cells = []) {
        this.setCells(cells);
    }

    /**
     * @param {HeaderCell[]} cells
     */
    setCells(cells) {
        this.cells = cells;
    }

    /**
     * @param {HeaderCell} cell
     */
    addCell(cell) {
        this.cells.push(cell);
    }

    removeCell(cell) {
        const restCells = this.cells.filter((c) => c !== cell);
        this.cells = restCells;
    }
}
