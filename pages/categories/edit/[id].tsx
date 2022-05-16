import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import React, { } from 'react';
import Container from '../../../components/defaults/Container';
import ResponsiveHeader from '../../../components/defaults/Header';
import { createBank, deleteBank, deleteCategory, getBankById, getCategoryById, updateBank, updateCategory } from '../../../connection/api';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async (context) => {
    // ...
    const { id } = context.query;
    const selectedCategory = await getCategoryById(id);

    return {
        props: {
            selectedCategory
        }, // will be passed to the page component as props
    }
};

export default function BanksEdit(props: any) {
    const { selectedCategory } = props;

    const router = useRouter()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // router.push('/dashboard')
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const category = {
            id: selectedCategory.id,
            name: data.get('name'),
            description: data.get('description'),
            user: selectedCategory.user
        }

        updateCategory(category)
    };

    const handleDelete = () => {
        deleteCategory(selectedCategory.id)
        router.back()
    }

    return (
        <>
            <ResponsiveHeader />
            <Container>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Nome da Categoria"
                                name="name"
                                defaultValue={selectedCategory.name}
                                // autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="description"
                                label="Descrição"
                                id="description"
                                defaultValue={selectedCategory.description}
                            // autoComplete="current-password"
                            />
                            <LoadingButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Editar
                            </LoadingButton>
                            <LoadingButton
                                // type="submit"
                                fullWidth
                                variant="contained"
                                color='error'
                                sx={{ mb: 2 }}
                                onClick={handleDelete}
                            >
                                Deletar
                            </LoadingButton>
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </>
    )
}