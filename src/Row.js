import { Column } from './Column';

export class Row {
    /** @type {number} */
    index;

    /** @type {Column[]} */
    columns;

    /** @type {boolean} */
    selectable;

    /** @type {boolean} */
    visible;

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
