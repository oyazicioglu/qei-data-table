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
     */
    constructor({ key, value, type = 'string' }) {
        this.#key = key;
        this.#value = value;
        this.#type = type;
        this.#uuid = Utils.createUUID();
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
    }

    toValueObject() {
        return {
            key: this.#key,
            value: this.#value,
            type: this.#type,
        };
    }
}
