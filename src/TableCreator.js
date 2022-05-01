import { Cell } from './Cell';
import { DataTable } from './DataTable';
import { Header } from './Header';
import { HeaderCell } from './HeaderCell';
import { Row } from './Row';
import { Subject } from './Subject';

export class TableCreator {
    constructor() {
        this.eventSubject = new Subject();
    }

    /**
     * @param {Header} header
     * @param {Row[]} rows
     * @returns {DataTable}
     */
    createTable(header, rows) {
        const table = new DataTable(header, rows, this.eventSubject);
        return table;
    }

    createHeader(headerCells = []) {
        const header = new Header({ cells: headerCells, eventSubject: this.eventSubject });
        return header;
    }

    createHeaderCell({ key, sortable = true, visible = true, value, type = 'string' }) {
        return new HeaderCell({ key, sortable, visible, value, type, eventSubject: this.eventSubject });
    }

    createRow({ selectable = true, visible = true, cells = [] }) {
        return new Row({ selectable, visible, cells, eventSubject: this.eventSubject });
    }

    createCell({ key, sortable = true, visible = true, value, type = 'string' }) {
        return new Cell({ key, sortable, visible, value, type, eventSubject: this.eventSubject });
    }
}
