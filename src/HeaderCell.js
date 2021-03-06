import { Cell } from './Cell.js';
import { Subject } from './Subject.js';

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
     * @param {Subject} constructor.eventSubject
     */
    constructor({ key, sortable = true, visible = true, value, type = 'string', eventSubject = undefined }) {
        super({ key, value, type, eventSubject });
        this.setVisible(visible);
        this.setSortable(sortable);
    }

    /**
     * @param {CallableFunction} callback
     */
    onHeaderVisibleChanged(callback) {
        this.eventSubject.subscribe('onHeaderVisibleChanged', callback);
    }

    /**
     * @param {CallableFunction} callback
     */
    onHeaderSortableChanged(callback) {
        this.eventSubject.subscribe('onHeaderSortableChanged', callback);
    }

    isSortable() {
        return this.#sortable;
    }

    isVisible() {
        return this.#visible;
    }

    setSortable(sortable) {
        this.#sortable = sortable;
        if (this.eventSubject) {
            this.eventSubject.notify('onHeaderSortableChanged', { cell: this, sortable });
        }
    }

    setVisible(visible) {
        this.#visible = visible;

        if (this.eventSubject) {
            this.eventSubject.notify('onHeaderVisibleChanged', { cell: this, visible });
        }
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
