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
import Container from '../../components/defaults/Container';
import ResponsiveHeader from '../../components/defaults/Header';
import { createBank } from '../../connection/api';

export default function BanksAdd() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // router.push('/dashboard')
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const bank = {
            name: data.get('name'),
            amount: data.get('amount'),
            properties: { field: 'fieldExample' },
            user: 1
        }

        createBank(bank)
    };

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
                                // autoComplete="current-password"
                            />
                            <LoadingButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Criar
                            </LoadingButton>
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </>
    )
}