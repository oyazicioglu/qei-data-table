import { Header } from './Header.js';
import { JsonTableAdapter } from './JsonTableAdapter.js';
import { Row } from './Row.js';

export class DataTable {
    /**
     * @param {Header[]} headers
     * @param {Row[]} rows
     */
    constructor(headers = [], rows = []) {
        this.headers = headers;
        this.rows = rows;
    }

    /**
     * @param {Row[]} rows
     */
    setRows(rows) {
        this.rows = rows;
    }

    /**
     * @param {Header[]} headers
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
     * @param {Header} header
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
}
