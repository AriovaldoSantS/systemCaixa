// src/components/page/Home.tsx

import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import NovaVenda from '../componentes/NovaVenda'; // Importe corretamente o componente NovaVenda

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmNovaVenda = () => {
    // Lógica para confirmar a nova venda
    console.log('Nova venda confirmada');
    handleCloseModal(); // Fechar o modal após confirmar
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Página Home
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpenModal} sx={{ mb: 2 }}>
        Nova Venda
      </Button>
      <NovaVenda open={openModal} onClose={handleCloseModal} onConfirm={handleConfirmNovaVenda} />
    </Container>
  );
};

export default Home;
