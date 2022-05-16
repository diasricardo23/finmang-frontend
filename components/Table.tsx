import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { AppProps } from 'next/app';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

// AJEITAR DEPOIS INTERFACE PARA APP PROPS
export default function DataTable(props: any) {
    const { rows, columns, onClick, buttonLabel } = props;
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '1rem', paddingRight: '1rem' }}>
                <Button variant="contained" endIcon={<AddIcon />} onClick={onClick}>
                    {buttonLabel}
                </Button>
            </div>
        </div>
    );
}
