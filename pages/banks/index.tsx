import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import moment from 'moment';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { } from 'react'
import Container from '../../components/defaults/Container'
import ResponsiveHeader from '../../components/defaults/Header'
import DataTable from '../../components/Table';
import { getAllBanks, getBanksByUserId } from '../../connection/api';
import { bankColumns as columns } from '../../constants/tableColumns';

export const getServerSideProps: GetServerSideProps = async (context) => {
    // ...
    const banks = await getBanksByUserId(1);

    return {
        props: {
            banks
        }, // will be passed to the page component as props
    }
};

export default function Banks(props: any) {
    const { banks } = props;

    const router = useRouter()

    const navigateToAddBank = () => {
        router.push('/banks/add')
    }
    
    return (
        <>
            <ResponsiveHeader />
            <Container>
                <DataTable rows={banks} columns={columns} onClick={navigateToAddBank} buttonLabel='Adicionar Banco'/>
            </Container>
        </>
    )
}