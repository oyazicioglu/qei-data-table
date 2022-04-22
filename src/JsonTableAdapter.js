import { Column } from './Column';
import { DataTable } from './DataTable';
import { Row } from './Row';

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
     * @return {Column[]}
     */
    createHeaders() {}

    /**
     * @return {Row[]}
     */
    createRows() {}
}
