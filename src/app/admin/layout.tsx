'use client'

import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Panel de Administración
                    </Typography>
                    {user && (
                        <>
                            <Typography variant="subtitle1" sx={{ mr: 2 }}>
                                Bienvenido, {user.email}
                            </Typography>
                            <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 4 }}>
                {children}
            </Container>
        </>
    )
}
