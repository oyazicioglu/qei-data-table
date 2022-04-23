import { Cell } from './Cell.js';

export class HeaderCell extends Cell {
    /** @type {boolean} */
    #sortable;

    /** @type {boolean} */
    #visible;

    /**
     * @param {Object} constructor
     * @param {string} constructor.key
     * @param {string} constructor.type
     * @param {any} constructor.value
     * @param {boolean} constructor.sortable
     * @param {boolean} constructor.visible
     */
    constructor({ key, sortable = true, visible = true, value, type = 'string' }) {
        super({ key, value, type });
        this.#sortable = sortable;
        this.#visible = visible;
    }

    isSortable() {
        return this.#sortable;
    }

    isVisible() {
        return this.#visible;
    }

    setSortable(sortable) {
        this.#sortable = sortable;
    }

    setVisible(visible) {
        this.#visible = visible;
    }

    toValueObject() {
        return {
            key: this.getKey(),
            value: this.getValue(),
            visible: this.#visible,
            sortable: this.#sortable,
            type: this.getType(),
        };
    }
}
