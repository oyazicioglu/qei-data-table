import { Header } from './Header.js';
import { HeaderCell } from './HeaderCell.js';
import { JsonTableAdapter } from './JsonTableAdapter.js';
import { Row } from './Row.js';
import { Subject } from './Subject.js';

export class DataTable {
    /** @type {Header} */
    #header = [];

    /** @type {Row[]} */
    #rows = [];

    /**
     * @param {Header} header
     * @param {Row[]} rows
     * @param {Subject} subject
     */
    constructor(header = undefined, rows = [], eventSubject) {
        this.eventSubject = eventSubject;
        this.setHeader(header);
        this.setRows(rows);
    }

    getHeaders(showHidden = false) {
        return showHidden ? this.#header : this.#header.getCells().filter((headerCell) => headerCell.isVisible());
    }

    getRows(showHidden = false) {
        return showHidden ? this.#rows : this.#rows.filter((r) => r.isVisible());
    }

    onRowChanged(callback) {
        this.eventSubject.subscribe('onRowChanged', callback);
    }

    onHeaderChanged(callback) {
        this.eventSubject.subscribe('onHeaderChanged', callback);
    }

    /**
     * @param {Row[]} rows
     */
    setRows(rows) {
        rows.forEach((row) => {
            this.addRow(row);
        });

        this.eventSubject.notify('onRowsSet', { rows });
    }

    /**
     * @param {Header} header
     */
    setHeader(header) {
        header.getCells().forEach((headerCell) => {
            headerCell.eventSubject = this.eventSubject;
            this.addHeaderCell(headerCell);
        });

        this.eventSubject.notify('onHeadersSet', { header });
    }

    /**
     * @param {Row} row
     */
    addRow(row) {
        row.eventSubject = this.eventSubject;

        row.onCellChanged((cell) => {
            console.log(cell);
        });

        this.#rows.push(row);
        this.eventSubject.notify('onRowChanged', { row });
    }

    /**
     * @param {HeaderCell} headerCell
     */
    addHeaderCell(headerCell) {
        headerCell.onHeaderSortableChanged(({ cell, sortable }) => {
            console.log(cell, sortable);
        });

        headerCell.onHeaderVisibleChanged(({ cell, visible }) => {
            console.log(cell, visible);
        });

        this.#header.push(headerCell);
        this.eventSubject.notify('onHeaderChanged', { headerCell });
    }

    /**
     * @param {JSON} jsonData
     */
    createFromJsonData(jsonData) {
        const jsonAdapter = new JsonTableAdapter(jsonData);
        this.setHeader(jsonAdapter.createHeaders());
        this.setRows(jsonAdapter.createRows());
    }

    toValueObject() {
        return {
            headers: this.headers.map((header) => header.toValueObject()),
            rows: this.rows.map((row) => row.toValueObject()),
        };
    }
}
