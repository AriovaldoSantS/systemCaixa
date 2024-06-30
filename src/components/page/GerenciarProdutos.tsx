import React, { useState } from 'react';
import { Container, Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import CadastroProdutoModal from '../modal/CadastroProdutoModal';
import { Produto } from '../types/Produto';

const GerenciarProdutos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddProduto = (novoProduto: Produto) => {
    setProdutos([...produtos, novoProduto]);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gerenciar Produtos
      </Typography>
      
      <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
        Cadastrar Produto
      </Button>
      
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Valor Unitário (R$)</TableCell>
              <TableCell align="right">Quantidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map(produto => (
              <TableRow key={produto.id}>
                <TableCell>{produto.nome}</TableCell>
                <TableCell align="right">{produto.valorUnitario.toFixed(2)}</TableCell>
                <TableCell align="right">{produto.quantidade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CadastroProdutoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddProduto={handleAddProduto}
      />
    </Container>
  );
};

export default GerenciarProdutos;
