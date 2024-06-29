// src/components/modal/RegistrarVendaModal.tsx
import React, { useState } from 'react';
import { Modal, Backdrop, Fade, Container, Typography, TextField, Button, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

interface Produto {
  nome: string;
  valorUnitario: number;
}

interface Venda {
  nomeProduto: string;
  quantidade: number;
  desconto: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  produtos: Produto[];
  onRegistrarVenda: (vendas: Venda[]) => void;
}

const RegistrarVendaModal: React.FC<Props> = ({ open, onClose, produtos, onRegistrarVenda }) => {
  const [vendas, setVendas] = useState<Venda[]>([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [desconto, setDesconto] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleAdicionarProduto = () => {
    if (quantidade <= 0) {
      setFeedback('A quantidade vendida deve ser maior que zero.');
      return;
    }
    const produtoExistente = produtos.find(produto => produto.nome === nomeProduto);
    if (!produtoExistente) {
      setFeedback(`O produto '${nomeProduto}' não foi encontrado.`);
      return;
    }
    if (desconto > quantidade * produtoExistente.valorUnitario) {
      setFeedback('O desconto não pode ser maior que o valor da venda.');
      return;
    }
    // Limpar feedback
    setFeedback('');
    // Adicionar produto à lista de vendas
    const novaVenda = { nomeProduto, quantidade, desconto };
    setVendas([...vendas, novaVenda]);
    // Limpar campos
    setNomeProduto('');
    setQuantidade(1);
    setDesconto(0);
  };

  const handleRegistrar = () => {
    if (vendas.length === 0) {
      setFeedback('Adicione pelo menos um produto para registrar a venda.');
      return;
    }
    // Chamar função de registro de venda
    onRegistrarVenda(vendas);
    // Fechar o modal
    onClose();
    // Limpar lista de vendas
    setVendas([]);
  };

  const handleRemoverProduto = (index: number) => {
    const novasVendas = [...vendas];
    novasVendas.splice(index, 1);
    setVendas(novasVendas);
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
            Registrar Venda
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Produto"
                value={nomeProduto}
                onChange={(e) => setNomeProduto(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option value="">Selecione um produto</option>
                {produtos.map((produto) => (
                  <option key={produto.nome} value={produto.nome}>
                    {produto.nome}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(parseInt(e.target.value))}
                variant="outlined"
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Desconto (R$)"
                value={desconto}
                onChange={(e) => setDesconto(parseFloat(e.target.value))}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button variant="contained" color="primary" onClick={handleAdicionarProduto}>
                Adicionar Produto
              </Button>
            </Grid>
          </Grid>

          {vendas.length > 0 && (
            <Paper sx={{ marginTop: 2 }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Produto</TableCell>
                      <TableCell align="right">Quantidade</TableCell>
                      <TableCell align="right">Desconto (R$)</TableCell>
                      <TableCell align="right">Total (R$)</TableCell>
                      <TableCell align="right">Ações</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vendas.map((venda, index) => {
                      const produto = produtos.find(p => p.nome === venda.nomeProduto);
                      const totalVenda = produto ? (venda.quantidade * produto.valorUnitario - venda.desconto) : 0;
                      return (
                        <TableRow key={index}>
                          <TableCell>{venda.nomeProduto}</TableCell>
                          <TableCell align="right">{venda.quantidade}</TableCell>
                          <TableCell align="right">{venda.desconto.toFixed(2)}</TableCell>
                          <TableCell align="right">{totalVenda.toFixed(2)}</TableCell>
                          <TableCell align="right">
                            <Button variant="outlined" color="error" size="small" onClick={() => handleRemoverProduto(index)}>Remover</Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          )}

          {feedback && (
            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
              {feedback}
            </Typography>
          )}

          {vendas.length > 0 && (
            <Grid container justifyContent="flex-end" sx={{ marginTop: 2 }}>
              <Grid item>
                <Typography variant="h6">
                  Total do Cliente: {' '}
                  {vendas.reduce((total, venda) => {
                    const produto = produtos.find(p => p.nome === venda.nomeProduto);
                    const totalVenda = produto ? (venda.quantidade * produto.valorUnitario - venda.desconto) : 0;
                    return total + totalVenda;
                  }, 0).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          )}

          <Grid container justifyContent="flex-end" sx={{ marginTop: 2 }}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleRegistrar}>
                Finalizar Venda
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

export default RegistrarVendaModal;
