import { Cell } from './Cell.js';
import { Header } from './Header.js';
import { HeaderCell } from './HeaderCell.js';
import { Row } from './Row.js';
import { TableCreator } from './TableCreator.js';

const tableCreator = new TableCreator();
const headerCell1 = tableCreator.createHeaderCell({ value: 'Header 1', key: 'header1', sortable: true, visible: true, type: 'string' });
const headerCell2 = tableCreator.createHeaderCell({ value: 'Header 2', key: 'header2', sortable: true, visible: true, type: 'date' });
const headerCell3 = tableCreator.createHeaderCell({ value: 'Header 3', key: 'header3', sortable: false, visible: true, type: 'string' });
const headerCell4 = tableCreator.createHeaderCell({ value: 'Header 4', key: 'header4', sortable: true, visible: false, type: 'number' });
const header = tableCreator.createHeader([headerCell1, headerCell2, headerCell3, headerCell4]);

const rows = [
    tableCreator.createRow({
        selectable: true,
        visible: true,
        cells: [
            tableCreator.createCell({ value: 'Row 1 Col 1', key: 'row1-col1', value: 'Row1 Col1', sortable: true, visible: true }),
            tableCreator.createCell({ value: 'Header 2', key: 'header2', value: 'Header 2', sortable: true, visible: true }),
            tableCreator.createCell({ value: 'Header 3', key: 'header3', value: 'Header 3', sortable: true, visible: true }),
            tableCreator.createCell({ value: 'Header 4', key: 'header4', value: 'Header 4', sortable: true, visible: false }),
        ],
    }),
    tableCreator.createRow({
        selectable: true,
        visible: false,
        cells: [
            tableCreator.createCell({ value: 'Row 1 Col 1', key: 'row1-col1', value: 'Row1 Col1', sortable: true, visible: true }),
            tableCreator.createCell({ value: 'Header 2', key: 'header2', value: 'Header 2', sortable: true, visible: true }),
            tableCreator.createCell({ value: 'Header 3', key: 'header3', value: 'Header 3', sortable: true, visible: true }),
            tableCreator.createCell({ value: 'Header 4', key: 'header4', value: 'Header 4', sortable: true, visible: false }),
        ],
    }),
    tableCreator.createRow({
        selectable: true,
        visible: true,
        cells: [
            tableCreator.createCell({ value: 'Row 1 Col 1', key: 'row1-col1', value: 'Row1 Col1', sortable: true, visible: true }),
            tableCreator.createCell({ value: 'Header 2', key: 'header2', value: 'Header 2', sortable: true, visible: true }),
            tableCreator.createCell({ value: 'Header 3', key: 'header3', value: 'Header 3', sortable: true, visible: true }),
            tableCreator.createCell({ value: 'Header 4', key: 'header4', value: 'Header 4', sortable: true, visible: false }),
        ],
    }),
];

const dataTable = tableCreator.createTable(header, rows);

dataTable.onRowChanged((e) => {
    console.log(e.row);
});

dataTable.onHeaderChanged((e) => {
    console.log(e.header);
});

dataTable.addHeaderCell(new HeaderCell({ key: 'header5', value: 'Header 5', sortable: false, visible: true }));
