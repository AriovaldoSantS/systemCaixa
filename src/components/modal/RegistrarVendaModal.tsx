import React, { useState } from 'react';
import { Modal, Backdrop, Fade, Container, Typography, TextField, Button, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Produto } from '../types/Produto'; // Importando o tipo Produto
import { Venda } from '../types/Venda'; // Importando o tipo Venda

interface Props {
  open: boolean;
  onClose: () => void;
  produtos: Produto[];
  onRegistrarVenda: (vendas: Omit<Venda, 'id'>[]) => void;
}

const RegistrarVendaModal: React.FC<Props> = ({ open, onClose, produtos, onRegistrarVenda }) => {
  const [vendas, setVendas] = useState<{ nomeProduto: string; quantidade: number; desconto: number }[]>([]);

  const handleAdicionarVenda = () => {
    setVendas([...vendas, { nomeProduto: '', quantidade: 1, desconto: 0 }]);
  };

  const handleChange = (index: number, field: string, value: string | number) => {
    const novasVendas = [...vendas];
    novasVendas[index] = { ...novasVendas[index], [field]: value };
    setVendas(novasVendas);
  };

  const handleRegistrarVenda = () => {
    if (vendas.some(venda => !venda.nomeProduto || venda.quantidade <= 0)) {
      return;
    }
    onRegistrarVenda(vendas);
    setVendas([]);
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
        <Container maxWidth="md" sx={{ backgroundColor: 'white', padding: 3, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: 4, borderRadius: 4 }}>
          <Typography variant="h5" id="modal-title" sx={{ marginBottom: 2 }}>
            Registrar Venda
          </Typography>

          <Button variant="contained" color="primary" onClick={handleAdicionarVenda}>
            Adicionar Produto
          </Button>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Produto</TableCell>
                  <TableCell align="right">Quantidade</TableCell>
                  <TableCell align="right">Desconto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vendas.map((venda, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField
                        select
                        fullWidth
                        SelectProps={{ native: true }}
                        value={venda.nomeProduto}
                        onChange={(e) => handleChange(index, 'nomeProduto', e.target.value)}
                      >
                        <option value=""></option>
                        {produtos.map(produto => (
                          <option key={produto.id} value={produto.nome}>
                            {produto.nome}
                          </option>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        type="number"
                        fullWidth
                        value={venda.quantidade}
                        onChange={(e) => handleChange(index, 'quantidade', parseInt(e.target.value, 10))}
                        inputProps={{ min: 1 }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        type="number"
                        fullWidth
                        value={venda.desconto}
                        onChange={(e) => handleChange(index, 'desconto', parseFloat(e.target.value))}
                        inputProps={{ min: 0 }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button variant="contained" color="primary" onClick={handleRegistrarVenda}>
                Registrar Venda
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </Modal>
  );
};

export default RegistrarVendaModal;
