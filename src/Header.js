import { Column } from './Column';

export class Header extends Column {
    /** @type {boolean} */
    sortable;

    /** @type {boolean} */
    visible;

    constructor({ index = 0, label, key, sortable = true, visible = true, value, type = 'string' }) {
        super({ index, label, key, value, type });
        this.sortable = sortable;
        this.visible = visible;
    }
}
