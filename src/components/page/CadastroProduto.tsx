// src/components/page/CadastroProduto.tsx

import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CadastroProduto = () => {
  const navigate = useNavigate();

  const handleCadastroProduto = () => {
    // Simulação de cadastro de produto (substitua com sua lógica real)
    console.log('Produto cadastrado com sucesso');
    
    // Navega de volta para a página inicial (Home)
    navigate('/home');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Cadastro de Produto
      </Typography>
      <TextField
        label="Nome do Produto"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Valor Unitário (R$)"
        type="number"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCadastroProduto}
      >
        Cadastrar Produto
      </Button>
    </Container>
  );
};

export default CadastroProduto;
