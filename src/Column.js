export class Column {
    /** @type {number} */
    index;

    /** @type {string} */
    key;

    /** @type {string} */
    type;

    value;

    /**
     * @param {Object} constructor
     * @param {number} constructor.index
     * @param {string} constructor.label
     * @param {string} constructor.key
     * @param {any} constructor.value
     * @param {string} constructor.value
     */
    constructor({ index = 0, key, value, type = 'string' }) {
        this.index = index;
        this.key = key;
        this.type = type;
        this.value = value;
    }

    setIndex(index) {
        this.index = index;
    }

    setLabel(label) {
        this.label = label;
    }

    setKey(key) {
        this.key = key;
    }

    setSortable(sortable) {
        this.sortable = sortable;
    }

    setVisible(visible) {
        this.visible = visible;
    }
}
