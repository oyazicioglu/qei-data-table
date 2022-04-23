export class Cell {
    /** @type {number} */
    index;

    /** @type {string} */
    key;

    /** @type {string} */
    type;

    /** @type {any} */
    value;

    /**
     * @param {Object} constructor
     * @param {number} constructor.index
     * @param {string} constructor.key
     * @param {any} constructor.value
     * @param {string} constructor.type
     */
    constructor({ index = 0, key, value, type = 'string' }) {
        this.index = index;
        this.key = key;
        this.value = value;
        this.type = type;
    }

    /**
     *
     * @param {number} index
     */
    setIndex(index) {
        this.index = index;
    }

    /**
     * @param {any} value
     */
    setValue(value) {
        this.value = value;
    }

    /**
     * @param {string} key
     */
    setKey(key) {
        this.key = key;
    }

    /**
     * @param {string} type
     */
    setType(type) {
        this.type = type;
    }
}
