import { HeaderCell } from './HeaderCell.js';
import { JsonTableAdapter } from './JsonTableAdapter.js';
import { Row } from './Row.js';
import { Subject } from './Subject.js';

export class DataTable {
    /**
     * @param {HeaderCell[]} headers
     * @param {Row[]} rows
     */
    constructor(headers = [], rows = []) {
        this.subject = new Subject();
        this.setHeaders(headers);
        this.setRows(rows);
    }

    getHeaders(showHidden = false) {
        return showHidden ? this.headers : this.headers.filter((h) => h.isVisible());
    }

    getRows(showHidden = false) {
        return showHidden ? this.rows : this.rows.filter((r) => r.isVisible());
    }

    onRowsSet(callback) {
        this.subject.subscribe('onRowsSet', callback);
    }

    onHeadersSet(callback) {
        this.subject.subscribe('onHeadersSet', callback);
    }

    onRowChanged(callback) {
        this.subject.subscribe('onRowChanged', callback);
    }

    onHeaderChanged(callback) {
        this.subject.subscribe('onHeaderChanged', callback);
    }

    /**
     * @param {Row[]} rows
     */
    setRows(rows) {
        this.rows = rows;
        this.subject.notify('onRowsSet', { rows });
    }

    /**
     * @param {HeaderCell[]} headers
     */
    setHeaders(headers) {
        this.headers = headers;
        this.subject.notify('onHeadersSet', { headers });
    }

    /**
     * @param {Row} row
     */
    addRow(row) {
        this.rows.push(row);
        this.subject.notify('onRowChanged', { row });
    }

    /**
     * @param {HeaderCell} header
     */
    addHeader(header) {
        this.headers.push(header);
        this.subject.notify('onHeaderChanged', { header });
    }

    hideColumn(uuid) {
        this.headers.forEach((header, index) => {
            if (header.getUUId() === uuid) {
                header.setVisible(false);
            }
        });
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
