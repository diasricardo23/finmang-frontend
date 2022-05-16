import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import moment from "moment";


export const bankColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nome', width: 250 },
    {
        field: 'created_at',
        headerName: 'Criado em',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${moment(params.row.created_at).format('DD/MM/YYYY HH:mm:ss')}`,
    },
];

export const categoiresColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nome', width: 250 },
    { field: 'description', headerName: 'Descrição', width: 350 },
    {
        field: 'created_at',
        headerName: 'Criado em',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${moment(params.row.created_at).format('DD/MM/YYYY HH:mm:ss')}`,
    },
];