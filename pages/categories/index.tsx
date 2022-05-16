import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import moment from 'moment';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { } from 'react'
import Container from '../../components/defaults/Container'
import ResponsiveHeader from '../../components/defaults/Header'
import DataTable from '../../components/Table';
import { getCategoriesByUserId } from '../../connection/api';
import { categoiresColumns as columns } from '../../constants/tableColumns';

export const getServerSideProps: GetServerSideProps = async (context) => {
    // ...
    const categories = await getCategoriesByUserId(1);

    return {
        props: {
            categories
        }, // will be passed to the page component as props
    }
};

export default function Categories(props: any) {
    const { categories } = props;

    const router = useRouter()

    const navigateToAddCategory = () => {
        router.push('/categories/add')
    }

    return (
        <>
            <ResponsiveHeader />
            <Container>
                <DataTable rows={categories} columns={columns} onClick={navigateToAddCategory} buttonLabel='Adicionar Categoria'/>
            </Container>
        </>
    )
}