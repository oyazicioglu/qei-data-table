import { HeaderCell } from './HeaderCell.js';
import { JsonTableAdapter } from './JsonTableAdapter.js';
import { Row } from './Row.js';

export class DataTable {
    /**
     * @param {HeaderCell[]} headers
     * @param {Row[]} rows
     */
    constructor(headers = [], rows = []) {
        this.headers = headers;
        this.rows = rows;
    }

    getHeaders(showHidden = false) {
        return showHidden ? this.headers : this.headers.filter((h) => h.isVisible());
    }

    getRows(showHidden = false) {
        return showHidden ? this.rows : this.rows.filter((r) => r.isVisible());
    }

    /**
     * @param {Row[]} rows
     */
    setRows(rows) {
        this.rows = rows;
    }

    /**
     * @param {HeaderCell[]} headers
     */
    setHeaders(headers) {
        this.headers = headers;
    }

    /**
     * @param {Row} row
     */
    addRow(row) {
        this.rows.push(row);
    }

    /**
     * @param {HeaderCell} header
     */
    addHeader(header) {
        this.headers.push(header);
    }

    /**
     * @param {JSON} jsonData
     */
    createFromJsonData(jsonData) {
        const jsonAdapter = new JsonTableAdapter(jsonData);
        this.setHeaders(jsonAdapter.createHeaders());
        this.setRows(jsonAdapter.createRows());
    }

    toValueObject() {
        return {
            headers: this.headers.map((header) => header.toValueObject()),
            rows: this.rows.map((row) => row.toValueObject()),
        };
    }
}
