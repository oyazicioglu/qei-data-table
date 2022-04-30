import { Utils } from './Utils.js';

export class Cell {
    /** @type {string} */
    #key;

    /** @type {string} */
    #type;

    /** @type {any} */
    #value;

    /** @type {string} */
    #uuid;

    /**
     * @param {Object} constructor
     * @param {string} constructor.key
     * @param {any} constructor.value
     * @param {string} constructor.type
     * @param {Subject} constructor.eventSubject
     */
    constructor({ key, value, type = 'string', eventSubject = undefined }) {
        this.#key = key;
        this.#value = value;
        this.#type = type;
        this.#uuid = Utils.createUUID();
        this.eventSubject = eventSubject;
    }

    onValueChanged(callback) {
        if (!this.eventSubject) {
            return;
        }

        this.eventSubject.subscribe('onCellValueChanged', callback);
    }

    onTypeChanged(callback) {
        if (!this.eventSubject) {
            return;
        }

        this.eventSubject.subscribe('onCellTypeChanged', callback);
    }

    getKey() {
        return this.#key;
    }

    getValue() {
        return this.#value;
    }

    getType() {
        return this.#type;
    }

    getUUId() {
        return this.#uuid;
    }

    /**
     * @param {any} value
     */
    setValue(value) {
        this.#value = value;

        if (this.eventSubject) {
            this.eventSubject.notify('onCellValueChanged', { cell: this, value });
        }
    }

    /**
     * @param {string} key
     */
    setKey(key) {
        this.#key = key;
    }

    /**
     * @param {string} type
     */
    setType(type) {
        this.#type = type;

        if (this.eventSubject) {
            this.eventSubject.notify('onCellTypeChanged', { cell: this, type });
        }
    }

    toValueObject() {
        return {
            key: this.#key,
            value: this.#value,
            type: this.#type,
        };
    }
}
