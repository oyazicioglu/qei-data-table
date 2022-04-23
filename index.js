import { DataTable } from './src/DataTable.js';
import { HeaderCell } from './src/HeaderCell.js';

const jsonData = {
    headers: [
        { index: 0, label: 'Header 1', key: 'header1', sortable: true, visible: true },
        { index: 1, label: 'Header 2', key: 'header2', sortable: true, visible: true },
        { index: 2, label: 'Header 3', key: 'header3', sortable: true, visible: true },
        { index: 3, label: 'Header 4', key: 'header4', sortable: true, visible: false },
    ],

    rows: [
        {
            index: 0,
            selectable: false,
            visible: true,
            columns: [
                { index: 0, label: 'Row 1 Col 1', key: 'row1-col1', value: 'Row1 Col1', sortable: true, visible: true },
                { index: 1, label: 'Header 2', key: 'header2', value: 'Header 2', sortable: true, visible: true },
                { index: 2, label: 'Header 3', key: 'header3', value: 'Header 3', sortable: true, visible: true },
                { index: 3, label: 'Header 4', key: 'header4', value: 'Header 4', sortable: true, visible: false },
            ],
        },
    ],
};

const headers = [
    new HeaderCell({ index: 0, label: 'Header 1', key: 'header1', sortable: true, visible: true }),
    new HeaderCell({ index: 1, label: 'Header 2', key: 'header2', sortable: true, visible: true }),
    new HeaderCell({ index: 2, label: 'Header 3', key: 'header3', sortable: true, visible: true }),
    new HeaderCell({ index: 3, label: 'Header 4', key: 'header4', sortable: true, visible: false }),
];
const dataTable = new DataTable();
/* dataTable.setHeaders(headers);
dataTable.addHeader(new Header({ index: 4, key: 'header5', value: 'Header 5', sortable: false, visible: true })); */
dataTable.createFromJsonData(jsonData);
