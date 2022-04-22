import { Column } from './Column';

export class Row {
    /** @type {number} */
    index;

    /** @type {Column[]} */
    coumns;

    /** @type {boolean} */
    selectable;

    /** @type {boolean} */
    visible;
}
