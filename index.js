import { Cell } from './src/Cell.js';
import { DataTable } from './src/DataTable.js';
import { HeaderCell } from './src/HeaderCell.js';
import { Row } from './src/Row.js';

const jsonData = {
    headers: [
        { value: 'Header 1', key: 'header1', sortable: true, visible: true },
        { value: 'Header 2', key: 'header2', sortable: true, visible: true },
        { value: 'Header 3', key: 'header3', sortable: true, visible: true },
        { value: 'Header 4', key: 'header4', sortable: true, visible: false },
    ],

    rows: [
        {
            selectable: false,
            visible: true,
            columns: [
                { value: 'Row 1 Col 1', key: 'row1-col1', value: 'Row1 Col1', sortable: true, visible: true },
                { value: 'Header 2', key: 'header2', value: 'Header 2', sortable: true, visible: true },
                { value: 'Header 3', key: 'header3', value: 'Header 3', sortable: true, visible: true },
                { value: 'Header 4', key: 'header4', value: 'Header 4', sortable: true, visible: false },
            ],
        },
    ],
};

const headers = [
    new HeaderCell({ value: 'Header 1', key: 'header1', sortable: true, visible: true, type: 'string' }),
    new HeaderCell({ value: 'Header 2', key: 'header2', sortable: true, visible: true, type: 'string' }),
    new HeaderCell({ value: 'Header 3', key: 'header3', sortable: true, visible: true, type: 'string' }),
    new HeaderCell({ value: 'Header 4', key: 'header4', sortable: true, visible: false, type: 'string' }),
];

const rows = [
    new Row({
        selectable: true,
        visible: true,
        cells: [
            new Cell({ value: 'Row 1 Col 1', key: 'row1-col1', value: 'Row1 Col1', sortable: true, visible: true }),
            new Cell({ value: 'Header 2', key: 'header2', value: 'Header 2', sortable: true, visible: true }),
            new Cell({ value: 'Header 3', key: 'header3', value: 'Header 3', sortable: true, visible: true }),
            new Cell({ value: 'Header 4', key: 'header4', value: 'Header 4', sortable: true, visible: false }),
        ],
    }),
    new Row({
        selectable: true,
        visible: false,
        cells: [
            new Cell({ value: 'Row 1 Col 1', key: 'row1-col1', value: 'Row1 Col1', sortable: true, visible: true }),
            new Cell({ value: 'Header 2', key: 'header2', value: 'Header 2', sortable: true, visible: true }),
            new Cell({ value: 'Header 3', key: 'header3', value: 'Header 3', sortable: true, visible: true }),
            new Cell({ value: 'Header 4', key: 'header4', value: 'Header 4', sortable: true, visible: false }),
        ],
    }),
    new Row({
        selectable: true,
        visible: true,
        cells: [
            new Cell({ value: 'Row 1 Col 1', key: 'row1-col1', value: 'Row1 Col1', sortable: true, visible: true }),
            new Cell({ value: 'Header 2', key: 'header2', value: 'Header 2', sortable: true, visible: true }),
            new Cell({ value: 'Header 3', key: 'header3', value: 'Header 3', sortable: true, visible: true }),
            new Cell({ value: 'Header 4', key: 'header4', value: 'Header 4', sortable: true, visible: false }),
        ],
    }),
];

const dataTable = new DataTable();

dataTable.onRowChanged((e) => {
    console.log(e.row);
});

dataTable.onHeaderChanged((e) => {
    console.log(e.header);
});

dataTable.onRowsSet((e) => {
    console.log(e.rows);
});

dataTable.onHeadersSet((e) => {
    console.log(e.headers);
});

dataTable.setRows(rows);
dataTable.setHeaders(headers);
dataTable.addHeader(new HeaderCell({ key: 'header5', value: 'Header 5', sortable: false, visible: true }));
