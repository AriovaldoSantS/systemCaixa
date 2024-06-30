// src/components/page/Login.tsx
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Login: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Box component="form">
        <TextField fullWidth label="Usuário" margin="normal" />
        <TextField fullWidth label="Senha" type="password" margin="normal" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Entrar
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
