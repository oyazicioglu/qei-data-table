import { HeaderCell } from './HeaderCell.js';
import { Utils } from './Utils.js';

export class Header {
    /** @type {HeaderCell[]} */
    #cells;

    #uuid;

    /**
     * @param {HeaderCell[]} cells
     */
    constructor(cells = []) {
        this.#setCells(cells);
        this.#uuid = Utils.createUUID();
    }

    getCells() {
        return this.#cells;
    }

    /**
     * @param {HeaderCell[]} cells
     */
    setCells(cells) {
        this.#cells = cells;
    }

    /**
     * @param {HeaderCell} cell
     */
    addCell(cell) {
        this.#cells.push(cell);
    }

    removeCell(cell) {
        const restCells = this.#cells.filter((c) => c !== cell);
        this.#cells = restCells;
    }

    getUUId() {
        return this.#uuid;
    }

    toValueObject() {
        return this.#cells.map((c) => c.toValueObject());
    }
}
