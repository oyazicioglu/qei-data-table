import { HeaderCell } from './HeaderCell.js';
import { Utils } from './Utils.js';

export class Header {
    /** @type {HeaderCell[]} */
    #cells;

    #uuid;

    /**
     * @param {Object} constructor
     * @param {HeaderCell[]} constructor.cells
     * @param {Subject} constructor.eventSubject
     */
    constructor({ cells = [], eventSubject = undefined }) {
        this.#setCells(cells);
        this.#uuid = Utils.createUUID();
        this.eventSubject = eventSubject;
    }

    onCellsChanged(callback) {
        if (!this.eventSubject) {
            return;
        }

        this.eventSubject.subscribe('onHeaderCellsChanged', callback);
    }

    onCellChanged(callback) {
        if (!this.eventSubject) {
            return;
        }

        this.eventSubject.subscribe('onHeaderCellChanged', callback);
    }

    getCells() {
        return this.#cells;
    }

    /**
     * @param {HeaderCell[]} cells
     */
    setCells(cells) {
        this.#cells = cells;

        if (this.eventSubject) {
            this.eventSubject.notify('onHeaderCellsChanged', { cells });
        }
    }

    /**
     * @param {HeaderCell} cell
     */
    addCell(cell) {
        this.#cells.push(cell);

        if (this.eventSubject) {
            this.eventSubject.notify('onHeaderCellChanged', { cell });
        }
    }

    removeCell(cell) {
        const restCells = this.#cells.filter((c) => c !== cell);
        this.#cells = restCells;

        if (this.eventSubject) {
            this.eventSubject.notify('onHeaderCellsChanged', { cells: restCells, cell });
        }
    }

    getUUId() {
        return this.#uuid;
    }

    toValueObject() {
        return this.#cells.map((c) => c.toValueObject());
    }
}
