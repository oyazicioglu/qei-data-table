import { Cell } from './Cell.js';
import { Row } from './Row.js';

export class JsonTableAdapter {
    /**
     * @param {JSON} jsonData
     */
    constructor(jsonData) {
        this.setJsonData(jsonData);
    }

    /**
     * @param {JSON} jsonData
     */
    setJsonData(jsonData) {
        this.jsonData = jsonData;
        console.log(this.jsonData);
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
