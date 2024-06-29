// src/components/modal/CadastroProdutoModal.tsx
import React, { useState } from 'react';
import { Modal, Backdrop, Fade, Container, Typography, TextField, Button, Grid } from '@mui/material';

interface Produto {
  nome: string;
  valorUnitario: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onCadastrarProduto: (novoProduto: Produto) => void;
}

const CadastroProdutoModal: React.FC<Props> = ({ open, onClose, onCadastrarProduto }) => {
  const [nome, setNome] = useState('');
  const [valorUnitario, setValorUnitario] = useState<string>('');

  const handleCadastrar = () => {
    const valorUnitarioNumber = parseFloat(valorUnitario);
    if (!nome || valorUnitarioNumber <= 0) {
      alert('Preencha todos os campos corretamente.');
      return;
    }
    onCadastrarProduto({ nome, valorUnitario: valorUnitarioNumber });
    onClose();
    setNome('');
    setValorUnitario('');
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
            Cadastrar Produto
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome do Produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Valor Unitário (R$)"
                value={valorUnitario}
                onChange={(e) => setValorUnitario(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button variant="contained" color="primary" onClick={handleCadastrar}>
                Cadastrar
              </Button>
              <Button variant="outlined" onClick={onClose} sx={{ marginLeft: 2 }}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </Modal>
  );
};

export default CadastroProdutoModal;
