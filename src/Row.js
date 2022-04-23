import { Column } from './Column.js';

export class Row {
    /** @type {number} */
    index;

    /** @type {Column[]} */
    columns;

    /** @type {boolean} */
    selectable;

    /** @type {boolean} */
    visible;

    /**
     * @param {Object} constructor
     * @param {number} constructor.index
     * @param {Column[]} constructor.columns
     * @param {boolean} constructor.selectable
     * @param {boolean} constructor.visible
     */
    constructor({ index, columns = [], selectable = true, visible = true }) {
        this.index = index;
        this.columns = columns;
        this.selectable = selectable;
        this.visible = visible;
    }

    /**
     * @param {number} index
     */
    setIndex(index) {
        this.index = index;
    }

    /**
     * @param {Column[]} columns
     */
    setColumns(columns) {
        this.columns = columns;
    }

    /**
     * @param {Column} column
     */
    addColumn(column) {
        this.columns.push(column);
    }

    /**
     * @param {boolean} selectable
     */
    setSelectable(selectable) {
        this.selectable = selectable;
    }

    /**
     * @param {boolean} visible
     */
    setVisible(visible) {
        this.visible = visible;
    }
}
