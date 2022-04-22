export class Column {
    /** @type {number} */
    index;

    /** @type {string} */
    label;

    /** @type {string} */
    key;

    /** @type {string} */
    type;

    value;

    constructor({ index = 0, label, key, value, type = 'string' }) {
        this.index = index;
        this.label = label;
        this.key = key;
        this.sortable = sortable;
        this.visible = visible;
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
