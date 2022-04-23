import { Cell } from './Cell.js';

export class HeaderCell extends Cell {
    /** @type {boolean} */
    sortable;

    /** @type {boolean} */
    visible;

    /**
     * @param {Object} constructor
     * @param {number} constructor.index
     * @param {string} constructor.key
     * @param {string} constructor.type
     * @param {any} constructor.value
     * @param {boolean} constructor.sortable
     * @param {boolean} constructor.visible
     */
    constructor({ index = 0, key, sortable = true, visible = true, value, type = 'string' }) {
        super({ index, key, value, type });
        this.sortable = sortable;
        this.visible = visible;
    }

    setSortable(sortable) {
        this.sortable = sortable;
    }

    setVisible(visible) {
        this.visible = visible;
    }

    toValueObject() {
        return {
            index: this.index,
            key: this.key,
            value: this.value,
            visible: this.visible,
            sortable: this.sortable,
            type: this.type,
        };
    }
}
