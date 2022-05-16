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
import { createBank, deleteBank, getBankById, updateBank } from '../../../connection/api';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async (context) => {
    // ...
    const { id } = context.query;
    const selectedBank = await getBankById(id);

    return {
        props: {
            selectedBank
        }, // will be passed to the page component as props
    }
};

export default function BanksEdit(props: any) {
    const { selectedBank } = props;

    const router = useRouter()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // router.push('/dashboard')
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const bank = {
            id: selectedBank.id,
            name: data.get('name'),
            amount: data.get('amount'),
            properties: selectedBank.properties,
            user: selectedBank.user
        }

        updateBank(bank)
    };

    const handleDelete = () => {
        deleteBank(selectedBank.id)
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
                                label="Nome da Conta"
                                name="name"
                                defaultValue={selectedBank.name}
                                // autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="amount"
                                label="Saldo"
                                type="number"
                                id="amount"
                                defaultValue={selectedBank.amount}
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