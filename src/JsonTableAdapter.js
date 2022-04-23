import { Cell } from './Cell.js';
import { DataTable } from './DataTable.js';
import { Row } from './Row.js';

export class JsonTableAdapter {
    /** @type {DataTable} */
    dataTable;

    /**
     * @param {JSON} jsonData
     */
    constructor(jsonData) {
        this.jsonData = jsonData;
        this.dataTable = new DataTable();
    }

    /**
     * @param {JSON} jsonData
     */
    setJsonData(jsonData) {
        this.jsonData = jsonData;
    }

    /**
     * @return {Cell[]}
     */
    createHeaders() {}

    /**
     * @return {Row[]}
     */
    createRows() {}
}
