// src/components/componentes/NovaVenda.tsx

import React from 'react';
import { Modal, Button, Typography } from '@mui/material';

interface NovaVendaProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const NovaVenda: React.FC<NovaVendaProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        minWidth: '300px',
        textAlign: 'center'
      }}>
        <Typography variant="h5" gutterBottom>
          Nova Venda
        </Typography>
        <Typography variant="body1" paragraph>
          Conteúdo do modal...
        </Typography>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Confirmar
        </Button>
        <Button variant="outlined" color="secondary" onClick={onClose} style={{ marginLeft: '10px' }}>
          Fechar
        </Button>
      </div>
    </Modal>
  );
};

export default NovaVenda;
