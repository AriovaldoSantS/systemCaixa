// src/components/modal/CadastroProdutoModal.tsx
import React, { useState } from 'react';
import { Modal, Backdrop, Fade, Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Produto } from '../types/Produto'; // Importando o tipo Produto

interface Props {
  open: boolean;
  onClose: () => void;
  onAddProduto: (novoProduto: Produto) => void;
}

const CadastroProdutoModal: React.FC<Props> = ({ open, onClose, onAddProduto }) => {
  const [nome, setNome] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');

  const handleAdicionarProduto = () => {
    const novoProduto: Produto = {
      id: Math.random().toString(36).substring(7),
      nome,
      valorUnitario: parseFloat(valorUnitario),
    };
    onAddProduto(novoProduto);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Container maxWidth="sm" sx={{ backgroundColor: 'white', padding: 3, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: 4, borderRadius: 4 }}>
          <Typography variant="h5" id="modal-title" sx={{ marginBottom: 2 }}>
            Cadastro de Produto
          </Typography>

          <TextField
            fullWidth
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            type="number"
            label="Valor Unitário"
            value={valorUnitario}
            onChange={(e) => setValorUnitario(e.target.value)}
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <Grid container justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleAdicionarProduto}>
              Adicionar Produto
            </Button>
            <Button variant="outlined" onClick={onClose} sx={{ marginLeft: 2 }}>
              Cancelar
            </Button>
          </Grid>
        </Container>
      </Fade>
    </Modal>
  );
};

export default CadastroProdutoModal;
