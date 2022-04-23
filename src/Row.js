import { Cell } from './Cell.js';

export class Row {
    /** @type {number} */
    #index;

    /** @type {Cell[]} */
    #cells;

    /** @type {boolean} */
    #selectable;

    /** @type {boolean} */
    #visible;

    /**
     * @param {Object} constructor
     * @param {number} constructor.index
     * @param {Cell[]} constructor.cells
     * @param {boolean} constructor.selectable
     * @param {boolean} constructor.visible
     */
    constructor({ index, cells = [], selectable = true, visible = true }) {
        this.#index = index;
        this.#cells = cells;
        this.#selectable = selectable;
        this.#visible = visible;
    }

    /**
     * @param {number} index
     */
    setIndex(index) {
        this.#index = index;
    }

    /**
     * @param {Cell[]} cells
     */
    setCells(cells) {
        this.#cells = cells;
    }

    /**
     * @param {Cell} cell
     */
    addCell(cell) {
        this.#cells.push(cell);
    }

    /**
     * @param {boolean} selectable
     */
    setSelectable(selectable) {
        this.#selectable = selectable;
    }

    /**
     * @param {boolean} visible
     */
    setVisible(visible) {
        this.#visible = visible;
    }

    toValueObject() {
        return {
            index: this.#index,
            cells: this.#cells.map((c) => c.toValueObject()),
            selectable: this.#selectable,
            visible: this.#visible,
        };
    }
}
