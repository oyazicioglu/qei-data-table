import { Cell } from './Cell.js';
import { Utils } from './Utils.js';

export class Row {
    /** @type {Cell[]} */
    #cells;

    /** @type {boolean} */
    #selectable;

    /** @type {boolean} */
    #visible;

    #uuid;

    /**
     * @param {Object} constructor
     * @param {Cell[]} constructor.cells
     * @param {boolean} constructor.selectable
     * @param {boolean} constructor.visible
     */
    constructor({ cells = [], selectable = true, visible = true }) {
        this.#cells = cells;
        this.#selectable = selectable;
        this.#visible = visible;
        this.#uuid = Utils.createUUID();
    }

    isVisible() {
        return this.#visible;
    }

    isSelectable() {
        return this.#selectable;
    }

    getCells() {
        return this.#cells;
    }

    getUUId() {
        return this.#uuid;
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
            cells: this.#cells.map((c) => c.toValueObject()),
            selectable: this.#selectable,
            visible: this.#visible,
        };
    }
}
