import { Cell } from './Cell.js';
import { Subject } from './Subject.js';
import { Utils } from './Utils.js';

export class Row {
    /** @type {Cell[]} */
    #cells = [];

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
     * @param {Subject} constructor.eventSubject
     */
    constructor({ cells = [], selectable = true, visible = true, eventSubject = undefined }) {
        this.eventSubject = eventSubject;
        this.setCells(cells);
        this.setSelectable(selectable);
        this.setVisible(visible);
        this.#uuid = Utils.createUUID();
    }

    onCellsChanged(callback) {
        if (!this.eventSubject) {
            return;
        }

        this.eventSubject.subscribe('onRowCellsChanged', callback);
    }

    onCellChanged(callback) {
        if (!this.eventSubject) {
            return;
        }

        this.eventSubject.subscribe('onRowCellChanged', callback);
    }

    onVisibleChanged(callback) {
        if (!this.eventSubject) {
            return;
        }

        this.eventSubject.subscribe('onRowVisibleChanged', callback);
    }

    onSelectableChanged(callback) {
        if (!this.eventSubject) {
            return;
        }

        this.eventSubject.subscribe('onRowSelectableChanged', callback);
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
        cells.forEach((cell) => {
            this.#cells.push(new Cell({ key: cell.key, value: cell.value, type: cell.type, eventSubject: this.eventSubject }));
        });

        if (this.eventSubject) {
            this.eventSubject.notify('onRowCellsChanged', { row: this, cells: this.#cells });
        }
    }

    /**
     * @param {Cell} cell
     */
    addCell(cell) {
        const newCell = new Cell({ key: cell.key, value: cell.value, type: cell.type, eventSubject: this.eventSubject });
        this.#cells.push(newCell);

        if (this.eventSubject) {
            this.eventSubject.notify('onRowCellChanged', { row: this, cell: newCell });
        }
    }

    /**
     * @param {boolean} selectable
     */
    setSelectable(selectable) {
        this.#selectable = selectable;

        if (this.eventSubject) {
            this.eventSubject.notify('onRowSelectableChanged', { row: this, selectable });
        }
    }

    /**
     * @param {boolean} visible
     */
    setVisible(visible) {
        this.#visible = visible;

        if (this.eventSubject) {
            this.eventSubject.notify('onRowVisibleChanged', { row: this, visible });
        }
    }

    toValueObject() {
        return {
            cells: this.#cells.map((c) => c.toValueObject()),
            selectable: this.#selectable,
            visible: this.#visible,
        };
    }
}
